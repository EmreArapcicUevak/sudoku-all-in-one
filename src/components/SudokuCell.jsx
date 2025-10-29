function SudokuCell({gridContent, id, selectedCell, onClick}) {
    return(<div className={`${selectedCell === id ? "bg-blue-400" : "bg-white"} flex justify-center items-center select-none`} onClick={(e) => {e.stopPropagation(); onClick(id)}}>
        <div className="bg-white aspect-square h-[80%] flex justify-center items-center">
            <span className="text-black text-6xl z-50">{gridContent[id - 1] === 0 ? "\u00A0" : gridContent[id - 1]}</span>
        </div>
    </div>);
}

export default SudokuCell;