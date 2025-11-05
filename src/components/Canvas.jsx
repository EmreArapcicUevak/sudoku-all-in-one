import {useEffect, useRef} from "react";
import {sudokuContext} from "../sudokuContext.js";

const largeGap = 8
const smallGap = 2;

let canvasContext;

function Canvas(props) {
    const canvasRef = useRef(null);
    const {setCanvasContext, canvasDrawInstructions, cellSize} = sudokuContext();
    useEffect(() => {
        const _current = canvasRef.current;
        canvasContext = _current.getContext("2d");
        setCanvasContext(canvasContext);

        canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
        drawCanvas(canvasDrawInstructions, cellSize);
        /*
        canvasContext.fillStyle = "green";
        canvasContext.fillRect(10, 10, 100, 30);
        canvasContext.lineWidth = 8;
        canvasContext.arc(100, 100, 50, 0, Math.PI * 2, true);
        canvasContext.stroke();
        */
    }, [canvasDrawInstructions]);

    return(<canvas className={`absolute inset-0 pointer-events-none`} ref={canvasRef} {...props}></canvas>);
}


function drawCanvas(canvasDrawInstructions, cellSize) {
    canvasDrawInstructions.forEach(drawInstruction => {
        switch (drawInstruction.type) {
            case "German Whisper":
                drawGermanWhisper(drawInstruction, cellSize, 16);
                break;
            default:
                break;
        }
    });
}

function drawGermanWhisper(drawInstruction, cellSize, lineWidth) {
    if (drawInstruction.cells === 1) return;

    canvasContext.lineWidth = lineWidth;
    canvasContext.strokeStyle = "#96ff90"
    canvasContext.lineCap = "round";
    canvasContext.lineJoin = "round";

    canvasContext.beginPath();

    for (let i = 0; i < drawInstruction.cells.length; i++) {
        const [x, y] = getCellPosition(drawInstruction.cells[i], cellSize);

        if (i === 0) {
            canvasContext.moveTo(y + cellSize / 2 + lineWidth / 2, x + cellSize / 2 + lineWidth / 2);
            continue;
        }

        canvasContext.lineTo(y + cellSize / 2 + lineWidth / 2, x + cellSize / 2 + lineWidth / 2);
    }

    canvasContext.stroke();
}

function getCellPosition(cellNum, cellSize) {
    let x, y, bigGapAmount, smallGapAmount;

    const xNum = Math.floor((cellNum - 1) / 9);
    const yNum = (cellNum - 1) % 9;

    bigGapAmount = Math.floor(xNum / 3);
    smallGapAmount = xNum - bigGapAmount;

    x = xNum * cellSize + bigGapAmount * largeGap + smallGapAmount * smallGap;

    bigGapAmount = Math.floor(yNum / 3);
    smallGapAmount = yNum - bigGapAmount;

    y = yNum * cellSize + bigGapAmount * largeGap + smallGapAmount * smallGap;

    return [x, y];
}

export default Canvas;