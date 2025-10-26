function SudokuCell({gridContent, id, selectedCell, onClick}) {
    console.log(`selected cell: ${selectedCell}, id: ${id},  ${selectedCell===id}`);
    return(<div className={`${selectedCell === id ? "bg-blue-400" : "bg-white"} flex justify-center items-center`} onClick={() => onClick(id)}>
        <div className="bg-white aspect-square h-[80%] text-black text-6xl flex justify-center items-center">
            {gridContent[id - 1]}
        </div>
    </div>);
}

export default SudokuCell;