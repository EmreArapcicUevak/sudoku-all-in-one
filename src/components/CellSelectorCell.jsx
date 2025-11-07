import {sudokuContext} from "../sudokuContext.js";

export default function CellSelectorCell({pos}) {
    const {selectorSelectedCells, setSelectorSelectedCells, canvasDrawInstructions, setCanvasDrawInstructions,
        selectedRule, sudokuCages, setSudokuCages} = sudokuContext();
    return(
        <div className={``} onClick={(e) => {
            e.stopPropagation();

            if (selectedRule === "Thermo Sudoku" || selectedRule === "Arrow Sudoku" || selectedRule === "German Whisper") {
                if (selectorSelectedCells.length === 0) {
                    setSelectorSelectedCells([pos]);

                    const CDI = [...canvasDrawInstructions];
                    CDI.push({
                        type: selectedRule,
                        cells: [pos]
                    });
                    setCanvasDrawInstructions([...CDI]);
                    return;
                }

                if (selectorSelectedCells[selectorSelectedCells.length - 1] === pos) {
                    const arr = [...selectorSelectedCells];
                    arr.pop();
                    setSelectorSelectedCells([...arr]);

                    const CDI = [...canvasDrawInstructions];
                    if (CDI[CDI.length - 1].cells.length <= 1) CDI.pop();
                    else CDI[CDI.length - 1].cells.pop();
                    setCanvasDrawInstructions([...CDI]);

                    return;
                }

                if (selectedRule === "Thermo Sudoku") {
                    if (selectorSelectedCells.includes(pos) || selectorSelectedCells.length >= 9) return;
                }

                if (selectedRule === "Arrow Sudoku") {
                    if (selectorSelectedCells.includes(pos)) return;
                }

                const lastPos = selectorSelectedCells[selectorSelectedCells.length - 1];
                if (lastPos + 1 === pos || lastPos - 1 === pos || lastPos + 9 === pos || lastPos - 9 === pos  ||
                    lastPos - 9 - 1 === pos || lastPos - 9 + 1 === pos || lastPos + 9 - 1 === pos || lastPos + 9 + 1 === pos) {
                    const arr = [...selectorSelectedCells];
                    arr.push(pos);
                    setSelectorSelectedCells([...arr]);

                    const CDI = [...canvasDrawInstructions];
                    CDI[CDI.length - 1].cells = [...CDI[CDI.length - 1].cells, pos];
                    setCanvasDrawInstructions([...CDI]);
                }

                return;
            }

            if (selectedRule === "Killer Cage") {
                if (killerCellTaken(pos, sudokuCages)) return;

                if (selectorSelectedCells.length === 0) {
                    setSelectorSelectedCells([pos]);


                    const cages = [... sudokuCages];
                    cages[cages.length - 1].cells = [pos];
                    setSudokuCages([...cages]);
                    return;
                }

                if (selectorSelectedCells.includes(pos)) {
                    let cageCells = [...sudokuCages[sudokuCages.length - 1].cells];
                    if (cageStillConnected(cageCells.filter(cell => cell !== pos))) {
                        cageCells = cageCells.filter(cell => cell !== pos);
                        const temp = structuredClone(sudokuCages);
                        temp[temp.length - 1].cells = [...cageCells];

                        setSudokuCages(structuredClone(temp));

                        let selectorTemp = [...selectorSelectedCells];
                        selectorTemp = selectorTemp.filter(it => it !== pos);
                        setSelectorSelectedCells([...selectorTemp]);
                    }

                    return;
                }



                if (selectorSelectedCells.length >= 9) return;

                const cageCells = [...sudokuCages[sudokuCages.length - 1].cells];

                if (cageCells.includes(pos)) return;
                if ((cageCells.includes(pos - 1) && (pos - 1) % 9 !== 0) ||
                    (cageCells.includes(pos + 1) && (pos - 1) % 9 !== 8) ||
                    cageCells.includes(pos - 9) ||
                    cageCells.includes(pos + 9)) {
                    const temp = structuredClone(sudokuCages);
                    temp[temp.length - 1].cells.push(pos);
                    setSudokuCages([...temp]);

                    setSelectorSelectedCells([...selectorSelectedCells, pos]);
                }
            }
        }}></div>
    );

    function killerCellTaken(pos, sudokuCages) {
        return sudokuCages.some(cage => cage.cells.some(cell => cell === pos));
    }

    function cageStillConnected(cageCells) {
        if (cageCells.length <= 1) return true;

        const visitedCells = [];
        _cageStillConnectedHelper(cageCells[0], visitedCells, cageCells);

        return visitedCells.length === cageCells.length;
    }

    function _cageStillConnectedHelper(pos, visitedCells, cageCells) {
        visitedCells.push(pos);

        if (cageCells.includes(pos - 1) && (pos - 1) % 9 !== 0 && !visitedCells.includes(pos - 1))
            _cageStillConnectedHelper(pos - 1, visitedCells, cageCells);

        if (cageCells.includes(pos + 1) && (pos - 1) % 9 !== 8 && !visitedCells.includes(pos + 1))
            _cageStillConnectedHelper(pos + 1, visitedCells, cageCells);

        if (cageCells.includes(pos - 9) && !visitedCells.includes(pos - 9))
            _cageStillConnectedHelper(pos - 9, visitedCells, cageCells);

        if (cageCells.includes(pos + 9) && !visitedCells.includes(pos + 9))
            _cageStillConnectedHelper(pos + 9, visitedCells, cageCells);
    }
}