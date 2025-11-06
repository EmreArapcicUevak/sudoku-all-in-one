import {sudokuContext} from "../sudokuContext.js";

export default function CellSelectorCell({pos}) {
    const {selectorSelectedCells, setSelectorSelectedCells, canvasDrawInstructions, setCanvasDrawInstructions, selectedRule} = sudokuContext();
    return(
        <div className={``} onClick={(e) => {
            e.stopPropagation();

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

        }}></div>
    );
}