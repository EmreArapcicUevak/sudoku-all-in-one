import {useEffect, useRef} from "react";
import {sudokuContext} from "../sudokuContext.js";

let canvasContext;

function Canvas(props) {
    const canvasRef = useRef(null);
    const {setCanvasContext, canvasDrawInstructions} = sudokuContext();
    useEffect(() => {
        const _current = canvasRef.current;
        canvasContext = _current.getContext("2d");
        setCanvasContext(canvasContext);

        canvasContext.fillStyle = "green";
        canvasContext.fillRect(10, 10, 100, 30);
        canvasContext.lineWidth = 8;
        canvasContext.arc(100, 100, 50, 0, Math.PI * 2, true);
        canvasContext.stroke();
    }, [canvasDrawInstructions]);

    return(<canvas className={`absolute inset-0`} ref={canvasRef} {...props}></canvas>);
}

export default Canvas;