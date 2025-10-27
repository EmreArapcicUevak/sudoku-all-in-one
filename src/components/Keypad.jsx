import KeypadKey from "./KeypadKey.jsx";

function Keypad({keyClicked}) {
    return(
        <div className="grid grid-cols-3 self-end m-12 gap-1">
            <KeypadKey kkey={"9"} keyClicked={keyClicked}/>
            <KeypadKey kkey={"8"} keyClicked={keyClicked}/>
            <KeypadKey kkey={"7"} keyClicked={keyClicked}/>
            <KeypadKey kkey={"6"} keyClicked={keyClicked}/>
            <KeypadKey kkey={"5"} keyClicked={keyClicked}/>
            <KeypadKey kkey={"4"} keyClicked={keyClicked}/>
            <KeypadKey kkey={"3"} keyClicked={keyClicked}/>
            <KeypadKey kkey={"2"} keyClicked={keyClicked}/>
            <KeypadKey kkey={"1"} keyClicked={keyClicked}/>
            <KeypadKey kkey={"Erase"} keyClicked={keyClicked}/>
            <KeypadKey kkey={" "} keyClicked={keyClicked}/>
        </div>
    );
}

export default Keypad;