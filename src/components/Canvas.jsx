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
    }, [canvasDrawInstructions]);

    return (<canvas className={`absolute inset-0 pointer-events-none`} ref={canvasRef} {...props}></canvas>);
}


function drawCanvas(canvasDrawInstructions, cellSize) {
    canvasDrawInstructions.forEach(drawInstruction => {
        switch (drawInstruction.type) {
            case "German Whisper":
                drawGermanWhisper(drawInstruction, cellSize, 16);
                break;
            case "Thermo Sudoku":
                drawThermoSudoku(drawInstruction, cellSize, 20);
                break;
            case "Arrow Sudoku":
                drawArrowSudoku(drawInstruction, cellSize, 4, 12, Math.PI * 0.20);
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

function drawThermoSudoku(drawInstruction, cellSize, lineWidth) {
    if (drawInstruction.cells === 1) return;

    canvasContext.lineWidth = lineWidth;
    canvasContext.strokeStyle = "#d3d3d3";
    canvasContext.lineCap = "round";
    canvasContext.lineJoin = "round";

    canvasContext.beginPath();

    for (let i = 0; i < drawInstruction.cells.length; i++) {
        const [x, y] = getCellPosition(drawInstruction.cells[i], cellSize);

        if (i === 0) {
            canvasContext.arc(y + cellSize / 2 + lineWidth / 2, x + cellSize / 2 + lineWidth / 2, cellSize * 0.25, 0, Math.PI * 2, false);
            canvasContext.fillStyle = "#d3d3d3";
            canvasContext.fill();
            canvasContext.moveTo(y + cellSize / 2 + lineWidth / 2, x + cellSize / 2 + lineWidth / 2);
            continue;
        }

        canvasContext.lineTo(y + cellSize / 2 + lineWidth / 2, x + cellSize / 2 + lineWidth / 2);
    }

    canvasContext.stroke();
}

function drawArrowSudoku(drawInstruction, cellSize, lineWidth, headLength, headAngle) {
    if (drawInstruction.cells === 1) return;

    canvasContext.lineWidth = lineWidth;
    canvasContext.strokeStyle = "#d3d3d3";
    canvasContext.lineCap = "round";
    canvasContext.lineJoin = "round";

    canvasContext.beginPath();

    for (let i = 0; i < drawInstruction.cells.length; i++) {
        const [x, y] = getCellPosition(drawInstruction.cells[i], cellSize);

        if (i === 0) {
            canvasContext.arc(y + cellSize / 2 + lineWidth / 2, x + cellSize / 2 + lineWidth / 2, cellSize * 0.3, 0, Math.PI * 2, false);
            canvasContext.fillStyle = "#d3d3d3";
            canvasContext.fill();
            canvasContext.moveTo(y + cellSize / 2 + lineWidth / 2, x + cellSize / 2 + lineWidth / 2);
            continue;
        }

        canvasContext.lineTo(y + cellSize / 2 + lineWidth / 2, x + cellSize / 2 + lineWidth / 2);
    }

    // circle
    canvasContext.stroke();
    canvasContext.beginPath();
    const [x, y] = getCellPosition(drawInstruction.cells[0], cellSize);
    canvasContext.arc(y + cellSize / 2 + lineWidth / 2, x + cellSize / 2 + lineWidth / 2, cellSize * 0.28, 0, Math.PI * 2, false);
    canvasContext.fillStyle = "#fff";
    canvasContext.fill();

    // arrow head
    const [xFromCell, yFromCell] = getCellPosition(drawInstruction.cells[drawInstruction.cells.length - 2], cellSize);
    const [xToCell, yToCell] = getCellPosition(drawInstruction.cells[drawInstruction.cells.length - 1], cellSize);

    // Convert to cell centers
    const fromX = yFromCell + cellSize / 2;
    const fromY = xFromCell + cellSize / 2;
    const toX = yToCell + cellSize / 2;
    const toY = xToCell + cellSize / 2;

    const angle = Math.atan2(toY - fromY, toX - fromX);

    const x1 = toX - headLength * Math.cos(angle - headAngle);
    const y1 = toY - headLength * Math.sin(angle - headAngle);

    const x2 = toX - headLength * Math.cos(angle + headAngle);
    const y2 = toY - headLength * Math.sin(angle + headAngle);

    canvasContext.beginPath();
    canvasContext.moveTo(toX + lineWidth / 2, toY + lineWidth / 2);
    canvasContext.lineTo(x1 + lineWidth / 2, y1 + lineWidth / 2);
    canvasContext.moveTo(toX + lineWidth / 2, toY + lineWidth / 2);
    canvasContext.lineTo(x2 + lineWidth / 2, y2 + lineWidth / 2);
    canvasContext.stroke();

}

function getCellPosition(cellNum, cellSize) {
    let x, y, bigGapAmount, smallGapAmount;

    const xNum = Math.floor((cellNum - 1) / 9);
    const yNum = (cellNum - 1) % 9;

    bigGapAmount = Math.floor(xNum / 3);
    smallGapAmount = xNum - bigGapAmount;

    x = xNum * cellSize + bigGapAmount * largeGap + smallGapAmount * smallGap + 8;

    bigGapAmount = Math.floor(yNum / 3);
    smallGapAmount = yNum - bigGapAmount;

    y = yNum * cellSize + bigGapAmount * largeGap + smallGapAmount * smallGap + 8;

    return [x, y];
}

export default Canvas;