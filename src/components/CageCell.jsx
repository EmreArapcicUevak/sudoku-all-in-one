import {sudokuContext} from "../sudokuContext.js";

export default function CageCell({id}) {

    const {sudokuCages} = sudokuContext();

    const cellCage = findCageOfCell(id);

    const [showTopBorder, showBottomBorder, showLeftBorder, showRightBorder] = checkToShowBorder();

    return (<div
        className={`relative m-1 ${showRightBorder ? "border-r-2" : ""} ${showTopBorder ? "border-t-2" : ""} ${showBottomBorder ? "border-b-2" : ""} 
        ${showLeftBorder ? "border-l-2" : ""} border-black border-dashed text-black`}>
        {cellCage !== null && id === Math.min(...cellCage.cells) &&
            <span className={`absolute top-0 left-0 p-1`}>{cellCage.value}</span>}
    </div>);

    function checkToShowBorder() {

        if (cellCage === null) return [false, false, false, false];

        let showTopBorder = true, showBottomBorder = true, showLeftBorder = true, showRightBorder = true;
        if (cellCage.cells.includes(id - 9)) showTopBorder = false;
        if (cellCage.cells.includes(id + 9)) showBottomBorder = false;
        if (cellCage.cells.includes(id - 1)) showLeftBorder = false;
        if (cellCage.cells.includes(id + 1)) showRightBorder = false;

        return [showTopBorder, showBottomBorder, showLeftBorder, showRightBorder];
    }

    function findCageOfCell(id) {
        let _cage = null;
        sudokuCages.forEach(cage => {
            if (cage.cells.includes(id)) _cage = cage;
        });

        return _cage;
    }
}