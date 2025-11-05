import {create} from "zustand";

export const sudokuContext = create((set) => ({
    selectedRule: "Normal Sudoku",
    kropkiDotsW: [],
    kropkiDotsB: [],
    selectorSelectedCells: [],
    canvasWidth: 0,
    canvasHeight: 0,
    canvasContext: null,
    canvasDrawInstructions: [],
    tempCanvasDrawInstructions: [],
    cellSize: -1,
    sudokuPosition: [0, 0],


    setSelectedRule: (value) => set({selectedRule: value}),
    setKropkiDotsW: (value) => set({kropkiDotsW: value}),
    setKropkiDotsB: (value) => set({kropkiDotsB: value}),
    setSelectorSelectedCells: (value) => set({selectorSelectedCells: value}),
    setCanvasWidth: (value) => set({canvasWidth: value}),
    setCanvasHeight: (value) => set({canvasHeight: value}),
    setCanvasContext: (value) => set({canvasContext: value}),
    setCanvasDrawInstructions: (value) => set({canvasDrawInstructions: value}),
    setTempCanvasDrawInstructions: (value) => set({tempCanvasDrawInstructions: value}),
    setCellSize: value => set({cellSize: value}),
    setSudokuPosition: value => set({sudokuPosition: value}),
}));