function KeypadKey({kkey, keyClicked}) {
    return (
        <div className={`text-4xl h-18 rounded font-bold bg-neutral-700 border-2 border-neutral-600 flex 
        justify-center items-center ${kkey === "Erase" ? "col-span-2" : "aspect-square"} select-none 
        ${kkey === " " ? "" : "cursor-pointer"}`} onClick={(e) => {e.stopPropagation();
            if (kkey !== " ") keyClicked(kkey)}}>
            {kkey}
        </div>
    );
}

export default KeypadKey;