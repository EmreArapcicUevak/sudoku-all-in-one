import {sudokuContext} from "../sudokuContext.js";

function RuleItem({name, isRemovable, selectedRule, onRuleClicked, onDeleteRule, setShowCellSelector}) {
    const {canvasDrawInstructions, setTempCanvasDrawInstructions} = sudokuContext();

    return (<div
        className={`${name === selectedRule ? "border-blue-600 border-4" : "border-white border-2"} p-4 mb-2 mt-2 rounded-[8px] flex justify-between items-center`}
        onClick={(e) => {
            e.stopPropagation();
            onRuleClicked(name);
        }}>
        <span className="text-2xl font-semibold select-none">{name}</span>
        {(name === "German Whisper" || name === "Thermo Sudoku" || name === "Arrow Sudoku") && <button onClick={e => {
            e.stopPropagation();
            onRuleClicked(name);
            setTempCanvasDrawInstructions([...canvasDrawInstructions]);
            setShowCellSelector(true);
        }} className="!ml-auto !inline-flex items-center justify-center w-6 h-6 rounded-full
      !bg-transparent !font-bold !text-2xl">+</button>}
        <button className="!ml-auto !inline-flex items-center justify-center w-6 h-6 rounded-full
      !bg-transparent" disabled={!isRemovable} onClick={(e) => {
            e.stopPropagation();
            onDeleteRule(name);
        }}>✖
        </button>
    </div>);
}

export default RuleItem;