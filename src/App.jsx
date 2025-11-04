import './App.css'
import Sudoku from "./components/Sudoku.jsx";
import Keypad from "./components/Keypad.jsx";
import {useEffect, useState} from "react";
import {setupPyodideEnvironment, solveSudoku} from "./pyodide.js";
import RuleContainer from "./components/RuleContainer.jsx";
import {sudokuContext} from "./sudokuContext.js";
import CellSelector from "./components/CellSelector.jsx";

const startArr = Array(81).fill(0);

const rules = [{name: "Normal Sudoku", added: true}, {name: "King's Move", added: false}, {
    name: "Knight's Move",
    added: false
}, {name: "Sudoku X", added: false}, {name: "Arrow Sudoku", added: false}, {
    name: "Kropki Dot 2:1",
    added: false
}, {name: "Kropki Dot Consecutive", added: false}, {name: "Killer Cage", added: false}, {
    name: "German Whisper",
    added: false
}, {name: "Thermo Sudoku", added: false},];

function App() {

    const [selectedCell, setSelectedCell] = useState(0);
    const [gridContent, setGridContent] = useState([...startArr]);
    const [canRun, setCanRun] = useState(false);
    const [selectedRule, setSelectedRule] = useState("Normal Sudoku");
    const [appliedRules, setAppliedRules] = useState(rules);
    const [isLoading, setIsLoading] = useState(true);

    const _setSelectedRule = sudokuContext(state => state.setSelectedRule);
    const {setKropkiDotsW, setKropkiDotsB, kropkiDotsB, kropkiDotsW} = sudokuContext();

    const keyClicked = (kkey) => {
        const arr = [...gridContent];
        if (kkey !== "Erase") arr[selectedCell - 1] = parseInt(kkey); else arr[selectedCell - 1] = 0;
        setGridContent([...arr]);
    }

    const onRuleClicked = (ruleName) => {
        _setSelectedRule(ruleName);
        setSelectedRule(ruleName);
    };

    const addRule = (ruleName) => {
        const r = [...appliedRules];
        for (let i = 0; i < r.length; i++) {
            if (r[i].name === ruleName) {
                r[i].added = true;
                break;
            }
        }
        setAppliedRules([...r]);
    };

    const removeRule = (ruleName) => {
        if (ruleName === rules[0].name) return;
        const r = [...appliedRules];
        for (let i = 0; i < r.length; i++) {
            if (r[i].name === ruleName) {
                r[i].added = false;
                break;
            }
        }

        switch (ruleName) {
            case "Kropki Dot 2:1":
                setKropkiDotsB([]);
                break;
            case "Kropki Dot Consecutive":
                setKropkiDotsW([]);
                break;
            default:
                break;
        }

        setAppliedRules([...r]);
    };

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
            setIsLoading(false);
        });
    }, []);

    async function solve() {
        const additionalConstraints = [];

        appliedRules.forEach(rule => {
            if (!rule.added || rule.name === rules[0].name) return;

            switch (rule.name) {
                case "King's Move":
                    additionalConstraints.push(["kings move", []]);
                    break;
                case "Knight's Move":
                    additionalConstraints.push(["knights move", []]);
                    break;
                case "Sudoku X":
                    additionalConstraints.push(["sudoku x", []]);
                    break;
                case "Kropki Dot 2:1":
                    kropkiDotsB.forEach(dot => {
                        if (dot <= 72) {
                            const row = Math.floor(dot / 8) + 1;
                            const col = (dot % 8) + 1;
                            additionalConstraints.push(["black dot", [`X${row}${col}`, `X${row}${col + 1}`]])
                        } else {
                            const row = ((dot - 72) % 8) + 1;
                            const col = Math.floor((dot - 72) / 8) + 1;
                            additionalConstraints.push(["black dot", [`X${row}${col}`, `X${row + 1}${col}`]])
                        }
                    });
                    break;
                case "Kropki Dot Consecutive":
                    kropkiDotsW.forEach(dot => {
                        if (dot <= 72) {
                            const row = Math.floor(dot / 8) + 1;
                            const col = (dot % 8) + 1;
                            additionalConstraints.push(["white dot", [`X${row}${col}`, `X${row}${col + 1}`]])
                        } else {
                            const row = ((dot - 72) % 8) + 1;
                            const col = Math.floor((dot - 72) / 8) + 1;
                            additionalConstraints.push(["white dot", [`X${row}${col}`, `X${row + 1}${col}`]])
                        }
                    });
                    break;
                default:
                    console.log(`${rule.name} not implemented!!!`)
            }
        });
        console.log(additionalConstraints);
        const result = await solveSudoku(gridContent, additionalConstraints);
        if (typeof result === "boolean") {
            alert("Solution for this sudoku does not exist")
            return;
        }
        setGridContent([...result]);
    }

    return (<div
        className={`w-screen h-screen overflow-hidden flex ${isLoading ? "justify-center" : "justify-between"} items-center`}
        onClick={() => {
            setSelectedCell(0)
        }}>
        {!isLoading && (<>
            <RuleContainer solve={solve} canRun={canRun} selectedRule={selectedRule}
                           onRuleClicked={onRuleClicked}
                           appliedRules={appliedRules}
                           addRule={addRule} removeRule={removeRule}/>
            <Sudoku gridContent={gridContent} selectedCell={selectedCell} setSelectedCell={setSelectedCell}
                    showDiagonals={appliedRules[3].added}/>
            <Keypad keyClicked={keyClicked}/>
        </>)}
        {isLoading && (<span className="text-6xl text-white font-semibold">Loading ...</span>)}
        {/*<CellSelector/>*/}
    </div>)
}

export default App
