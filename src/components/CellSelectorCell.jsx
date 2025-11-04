import {sudokuContext} from "../sudokuContext.js";

export default function CellSelectorCell({pos}) {
    const {selectorSelectedCells, setSelectorSelectedCells} = sudokuContext();
    return(
        <div className={`${selectorSelectedCells[pos - 1] ? "" : "bg-gray-900/50"}`} onClick={(e) => {
            e.stopPropagation();
            const arr = [...selectorSelectedCells];
            arr[pos - 1] = !arr[pos - 1];
            setSelectorSelectedCells([...arr]);
        }}></div>
    );
}