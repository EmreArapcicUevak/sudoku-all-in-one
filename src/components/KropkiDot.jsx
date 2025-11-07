import {sudokuContext} from "../sudokuContext.js";

function KropkiDot({pos}) {

    const {selectedRule, kropkiDotsB, kropkiDotsW, setKropkiDotsB, setKropkiDotsW} = sudokuContext();
    let isConsecutive = selectedRule === "Kropki Dot Consecutive";
    if (kropkiDotsW.includes(pos)) isConsecutive = true;
    if (kropkiDotsB.includes(pos)) isConsecutive = false;
    const isVisible = kropkiDotsW.includes(pos) || kropkiDotsB.includes(pos);
    return (<div
        className={`box-border aspect-square h-6 pointer-events-auto  ${isConsecutive ? "bg-white" : "bg-black"}
             border-4 border-black rounded-full ${isVisible ? "opacity-100" : `opacity-0 ${selectedRule === "Kropki Dot Consecutive" || selectedRule === "Kropki Dot 2:1" ? "hover:opacity-50" : ""}`}`}
        onClick={(e) => {
            if (selectedRule !== "Kropki Dot Consecutive" && selectedRule !== "Kropki Dot 2:1") return;

            e.stopPropagation();

            if (kropkiDotsW.includes(pos)) {
                setKropkiDotsW(kropkiDotsW.filter(x => x !== pos));
                return;
            }

            if (kropkiDotsB.includes(pos)) {
                setKropkiDotsB(kropkiDotsB.filter(x => x !== pos));
                return;
            }

            if (selectedRule === "Kropki Dot Consecutive") {
                setKropkiDotsW([...kropkiDotsW, pos]);
                return;
            }

            setKropkiDotsB([...kropkiDotsB, pos]);

        }}></div>);
}

export default KropkiDot;