import CellSelectorCell from "./CellSelectorCell.jsx";
import {sudokuContext} from "../sudokuContext.js";

export default function CellSelector({setShowCellSelector}) {
    const [x, y] = sudokuContext(state => state.sudokuPosition);
    const {tempCanvasDrawInstructions, setCanvasDrawInstructions} = sudokuContext();
    const {setSelectorSelectedCells} = sudokuContext();

    return (<div
        className="fixed inset-0 flex justify-center items-center z-50">
        <div className="fixed bottom-8 left-2 z-50">
            <button className={`m-4`} onClick={e => {
                e.stopPropagation();
                setShowCellSelector(false);
                setSelectorSelectedCells([]);
            }}>Add</button>
            <button className={`m-4`} onClick={e => {
                e.stopPropagation();
                setCanvasDrawInstructions([...tempCanvasDrawInstructions]);
                setShowCellSelector(false);
                setSelectorSelectedCells([]);
            }}>Cancel
            </button>
        </div>
        <div className="fixed aspect-square h-[90%] p-2 outline-[900000px] outline-gray-900/50"
             style={{top: y, left: x}}>
            <div className="absolute inset-0 grid grid-cols-3 gap-2 top-2 left-2 right-2 bottom-2">
                <div className="grid grid-cols-3 gap-0.5">
                    <CellSelectorCell pos={1}/>
                    <CellSelectorCell pos={2}/>
                    <CellSelectorCell pos={3}/>
                    <CellSelectorCell pos={10}/>
                    <CellSelectorCell pos={11}/>
                    <CellSelectorCell pos={12}/>
                    <CellSelectorCell pos={19}/>
                    <CellSelectorCell pos={20}/>
                    <CellSelectorCell pos={21}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5">
                    <CellSelectorCell pos={4}/>
                    <CellSelectorCell pos={5}/>
                    <CellSelectorCell pos={6}/>
                    <CellSelectorCell pos={13}/>
                    <CellSelectorCell pos={14}/>
                    <CellSelectorCell pos={15}/>
                    <CellSelectorCell pos={22}/>
                    <CellSelectorCell pos={23}/>
                    <CellSelectorCell pos={24}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5">
                    <CellSelectorCell pos={7}/>
                    <CellSelectorCell pos={8}/>
                    <CellSelectorCell pos={9}/>
                    <CellSelectorCell pos={16}/>
                    <CellSelectorCell pos={17}/>
                    <CellSelectorCell pos={18}/>
                    <CellSelectorCell pos={25}/>
                    <CellSelectorCell pos={26}/>
                    <CellSelectorCell pos={27}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5">
                    <CellSelectorCell pos={28}/>
                    <CellSelectorCell pos={29}/>
                    <CellSelectorCell pos={30}/>
                    <CellSelectorCell pos={37}/>
                    <CellSelectorCell pos={38}/>
                    <CellSelectorCell pos={39}/>
                    <CellSelectorCell pos={46}/>
                    <CellSelectorCell pos={47}/>
                    <CellSelectorCell pos={48}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5">
                    <CellSelectorCell pos={31}/>
                    <CellSelectorCell pos={32}/>
                    <CellSelectorCell pos={33}/>
                    <CellSelectorCell pos={40}/>
                    <CellSelectorCell pos={41}/>
                    <CellSelectorCell pos={42}/>
                    <CellSelectorCell pos={49}/>
                    <CellSelectorCell pos={50}/>
                    <CellSelectorCell pos={51}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5">
                    <CellSelectorCell pos={34}/>
                    <CellSelectorCell pos={35}/>
                    <CellSelectorCell pos={36}/>
                    <CellSelectorCell pos={43}/>
                    <CellSelectorCell pos={44}/>
                    <CellSelectorCell pos={45}/>
                    <CellSelectorCell pos={52}/>
                    <CellSelectorCell pos={53}/>
                    <CellSelectorCell pos={54}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5">
                    <CellSelectorCell pos={55}/>
                    <CellSelectorCell pos={56}/>
                    <CellSelectorCell pos={57}/>
                    <CellSelectorCell pos={64}/>
                    <CellSelectorCell pos={65}/>
                    <CellSelectorCell pos={66}/>
                    <CellSelectorCell pos={73}/>
                    <CellSelectorCell pos={74}/>
                    <CellSelectorCell pos={75}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5">
                    <CellSelectorCell pos={58}/>
                    <CellSelectorCell pos={59}/>
                    <CellSelectorCell pos={60}/>
                    <CellSelectorCell pos={67}/>
                    <CellSelectorCell pos={68}/>
                    <CellSelectorCell pos={69}/>
                    <CellSelectorCell pos={76}/>
                    <CellSelectorCell pos={77}/>
                    <CellSelectorCell pos={78}/>
                </div>
                <div className="grid grid-cols-3 gap-0.5">
                    <CellSelectorCell pos={61}/>
                    <CellSelectorCell pos={62}/>
                    <CellSelectorCell pos={63}/>
                    <CellSelectorCell pos={70}/>
                    <CellSelectorCell pos={71}/>
                    <CellSelectorCell pos={72}/>
                    <CellSelectorCell pos={79}/>
                    <CellSelectorCell pos={80}/>
                    <CellSelectorCell pos={81}/>
                </div>
            </div>
        </div>
    </div>);
}