import './App.css'
import Sudoku from "./components/Sudoku.jsx";
import Keypad from "./components/Keypad.jsx";
import {useEffect, useState} from "react";

const startArr = Array(81).fill("\u00A0");

function App() {

    const [selectedCell, setSelectedCell] = useState(0);
    const [gridContent, setGridContent] = useState([...startArr]);

    const keyClicked = (kkey) => {
        const arr = [...gridContent];
        if (kkey !== "Erase") arr[selectedCell - 1] = kkey;
        else arr[selectedCell - 1] = "\u00A0";
        setGridContent([...arr]);
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            const allowedKeys = ["Backspace", "Delete"];
            if (e.key >= "1" && e.key <= "9") {
                console.log(`Key pressed: ${e.key}`);
                const arr = [...gridContent];
                arr[selectedCell - 1] = e.key;
                setGridContent([...arr]);
            } else if (allowedKeys.includes(e.key)) {
                console.log(`Key pressed: ${e.key}`);
                const arr = [...gridContent];
                arr[selectedCell - 1] = "\u00A0";
                setGridContent([...arr]);
            } else {
                e.preventDefault();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [gridContent, selectedCell]);

    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center" onClick={() => {setSelectedCell(0)}}>
            <Sudoku gridContent={gridContent} selectedCell={selectedCell} setSelectedCell={setSelectedCell}/>
            <Keypad keyClicked={keyClicked}/>
        </div>
    )
}

export default App
