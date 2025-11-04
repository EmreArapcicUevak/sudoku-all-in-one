import SudokuCell from "./SudokuCell.jsx";
import KropkiDot from "./KropkiDot.jsx";
import React, {useRef, useState} from "react";
import {sudokuContext} from "../sudokuContext.js";
import Canvas from "./Canvas.jsx";


function Sudoku({gridContent, selectedCell, setSelectedCell, showDiagonals}) {

    const cellRef = useRef(null);
    const sudokuRef = useRef(null);
    const [cellWidth, setCellWidth] = useState(0);

    const {setCanvasHeight, setCanvasWidth, canvasHeight, canvasWidth, setCanvasDrawInstructions} = sudokuContext();

    React.useEffect(() => {
        setCellWidth(cellRef.current.getBoundingClientRect().width)
        setCanvasHeight(sudokuRef.current.getBoundingClientRect().height);
        setCanvasWidth(sudokuRef.current.getBoundingClientRect().width);
        setCanvasDrawInstructions(["test"]);
    }, [])

    return(
        <div ref={sudokuRef} className="relative aspect-square h-[90%] p-2">
            <div className="absolute inset-0 grid grid-cols-3 gap-2 top-2 left-2 right-2 bottom-2">
                <div className="grid grid-cols-3 gap-0.5 bg-gray-400">
                    <SudokuCell ref={cellRef} gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={1}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={2}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={3}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={10}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={11}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={12}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={19}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={20}/><SudokuCell gridContent={gridContent} selectedCell={selectedCell} onClick={setSelectedCell} id={21}/>
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
            <Canvas width={canvasWidth} height={canvasHeight}/>
            <div className="absolute inset-0 flex justify-between pointer-events-none">
                <div className="w-2 h-full bg-black pointer-events-none z-20"></div>
                <div className="w-2 h-full bg-black pointer-events-none"></div>
                <div className="w-2 h-full bg-black pointer-events-none"></div>
                <div className="w-2 h-full bg-black pointer-events-none z-20"></div>
            </div>
            <div className="absolute inset-0 flex justify-between pointer-events-none rotate-90">
                <div className="w-2 h-full bg-black pointer-events-none z-20"></div>
                <div className="w-2 h-full bg-black pointer-events-none"></div>
                <div className="w-2 h-full bg-black pointer-events-none"></div>
                <div className="w-2 h-full bg-black pointer-events-none z-20"></div>
            </div>
            <div className={`${showDiagonals ? "" : "hidden"} top-2 bottom-2 left-2 right-2 absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden`}>
                <div className="w-1 h-[150%] bg-gray-400 pointer-events-none rotate-45"></div>
                <div className="w-1 h-[150%] bg-gray-400 pointer-events-none rotate-[135deg]"></div>
            </div>
            <div className={`absolute inset-0 top-2 bottom-2 left-2 right-2 flex flex-col justify-start z-20 pointer-events-none`}>
                <KropkiRow cellWidth={cellWidth} row={1}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={2}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={3}/>
                <div className={`h-2`}></div>
                <KropkiRow cellWidth={cellWidth} row={4}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={5}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={6}/>
                <div className={`h-2`}></div>
                <KropkiRow cellWidth={cellWidth} row={7}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={8}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={9}/>
            </div>
            <div className={`absolute inset-0 top-2 bottom-2 left-2 right-2 flex flex-col justify-start rotate-90 scale-y-[-1] z-20 pointer-events-none`}>
                <KropkiRow cellWidth={cellWidth} row={10}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={11}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={12}/>
                <div className={`h-2`}></div>
                <KropkiRow cellWidth={cellWidth} row={13}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={14}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={15}/>
                <div className={`h-2`}></div>
                <KropkiRow cellWidth={cellWidth} row={16}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={17}/>
                <div className={`h-0.5`}></div>
                <KropkiRow cellWidth={cellWidth} row={18}/>
            </div>
        </div>
    );

}

function KropkiRow({cellWidth, row}) {
    return(
        <div style={{display: "flex", justifyContent: "start", alignItems: "center", height: `${cellWidth}px`}}>
            <div style={{ width: `${cellWidth - 11}px` }}></div>
            <KropkiDot pos={(row - 1) * 8}/>
            <div style={{ width: `${cellWidth - 22}px` }}></div>
            <KropkiDot pos={(row - 1) * 8 + 1}/>
            <div style={{ width: `${cellWidth - 19}px` }}></div>
            <KropkiDot pos={(row - 1) * 8 + 2}/>
            <div style={{ width: `${cellWidth - 19}px` }}></div>
            <KropkiDot pos={(row - 1) * 8 + 3}/>
            <div style={{ width: `${cellWidth - 22}px` }}></div>
            <KropkiDot pos={(row - 1) * 8 + 4}/>
            <div style={{ width: `${cellWidth - 19}px` }}></div>
            <KropkiDot pos={(row - 1) * 8 + 5}/>
            <div style={{ width: `${cellWidth - 19}px` }}></div>
            <KropkiDot pos={(row - 1) * 8 + 6}/>
            <div style={{ width: `${cellWidth - 22}px` }}></div>
            <KropkiDot pos={(row - 1) * 8 + 7}/>
            <div style={{ width: `${cellWidth - 11}px` }}></div>
        </div>
    );
}

export default Sudoku;