import SudokuCell from "./SudokuCell.jsx";
import {useEffect, useState} from "react";

const startArr = Array(81).fill("\u00A0");

function Sudoku() {

    const [selectedCell, setSelectedCell] = useState(0);
    const [gridContent, setGridContent] = useState([...startArr]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const allowedKeys = ["Backspace", "Delete"];
            if (e.key >= "1" && e.key <= "9") {
                console.log(`Key pressed: ${e.key}`);
                const arr = [...gridContent];
                arr[selectedCell - 1] = e.key;
                setGridContent([...arr]);
            }
            else if (allowedKeys.includes(e.key)) {
                console.log(`Key pressed: ${e.key}`);
                const arr = [...gridContent];
                arr[selectedCell - 1] = "\u00A0";
                setGridContent([...arr]);
            }
            else {
                e.preventDefault();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [gridContent, selectedCell]);

    return(
        <div className="relative aspect-square h-[90%] p-2">
            <div className="absolute inset-0 grid grid-cols-3 gap-2 top-2 left-2 right-2 bottom-2">
                <div className="grid grid-cols-3 gap-0.5 bg-gray-400">
                    <SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={1}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={2}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={3}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={10}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={11}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={12}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={19}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={20}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={21}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5 bg-gray-400">
                    <SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={4}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={5}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={6}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={13}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={14}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={15}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={22}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={23}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={24}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5 bg-gray-400">
                    <SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={7}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={8}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={9}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={16}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={17}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={18}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={25}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={26}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={27}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5 bg-gray-400">
                    <SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={28}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={29}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={30}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={37}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={38}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={39}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={46}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={47}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={48}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5 bg-gray-400">
                    <SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={31}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={32}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={33}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={40}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={41}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={42}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={49}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={50}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={51}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5 bg-gray-400">
                    <SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={34}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={35}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={36}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={43}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={44}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={45}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={52}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={53}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={54}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5 bg-gray-400">
                    <SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={55}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={56}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={57}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={64}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={65}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={66}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={73}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={74}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={75}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5 bg-gray-400">
                    <SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={58}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={59}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={60}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={67}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={68}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={69}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={76}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={77}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={78}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5 bg-gray-400">
                    <SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={61}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={62}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={63}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={70}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={71}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={72}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={79}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={80}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={81}/>
                </div>

            </div>
            <div className="absolute inset-0 flex justify-between pointer-events-none">
                <div className="w-2 h-full bg-black pointer-events-none"></div>
                <div className="w-2 h-full bg-black pointer-events-none"></div>
                <div className="w-2 h-full bg-black pointer-events-none"></div>
                <div className="w-2 h-full bg-black pointer-events-none"></div>
            </div>
            <div className="absolute inset-0 flex justify-between pointer-events-none rotate-90">
                <div className="w-2 h-full bg-black pointer-events-none"></div>
                <div className="w-2 h-full bg-black pointer-events-none"></div>
                <div className="w-2 h-full bg-black pointer-events-none"></div>
                <div className="w-2 h-full bg-black pointer-events-none"></div>
            </div>
        </div>
    );

}

export default Sudoku;