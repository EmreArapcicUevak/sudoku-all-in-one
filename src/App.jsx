import './App.css'
import Sudoku from "./components/Sudoku.jsx";
import Keypad from "./components/Keypad.jsx";
import {useEffect, useState} from "react";
import {setupPyodideEnvironment, solveSudoku} from "./pyodide.js";

const startArr = Array(81).fill(0);

function App() {

    const [selectedCell, setSelectedCell] = useState(0);
    const [gridContent, setGridContent] = useState([...startArr]);
    const [canRun, setCanRun] = useState(false);

    const keyClicked = (kkey) => {
        const arr = [...gridContent];
        if (kkey !== "Erase") arr[selectedCell - 1] = parseInt(kkey);
        else arr[selectedCell - 1] = 0;
        setGridContent([...arr]);
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            const allowedKeys = ["Backspace", "Delete"];
            if (e.key >= "1" && e.key <= "9") {
                console.log(`Key pressed: ${e.key}`);
                const arr = [...gridContent];
                arr[selectedCell - 1] = parseInt(e.key);
                setGridContent([...arr]);
            } else if (allowedKeys.includes(e.key)) {
                console.log(`Key pressed: ${e.key}`);
                const arr = [...gridContent];
                arr[selectedCell - 1] = 0;
                setGridContent([...arr]);
            } else {
                e.preventDefault();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [gridContent, selectedCell]);

    useEffect(() => {
        setupPyodideEnvironment().then(() => {
            setCanRun(true);
        });
    }, []);

    async function solve() {
        const result = await solveSudoku(gridContent);
        if (typeof result === "boolean") {
            //alertaj
            alert("There is no solution you fucking retards")
            return
        }
        setGridContent([...result]);
    }

    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center" onClick={() => {setSelectedCell(0)}}>
            <button className="m-8" onClick={(e) => {e.stopPropagation(); solve()}} disabled={!canRun}>Find solution</button>
            <Sudoku gridContent={gridContent} selectedCell={selectedCell} setSelectedCell={setSelectedCell}/>
            <Keypad keyClicked={keyClicked}/>
        </div>
    )
}

export default App
