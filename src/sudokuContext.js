import {create} from "zustand";

export const sudokuContext = create((set) => ({
    selectedRule: "Normal Sudoku",
    kropkiDotsW: [],
    kropkiDotsB: [],
    selectorSelectedCells: Array(81).fill(false),
    canvasWidth: 0,
    canvasHeight: 0,
    canvasContext: null,
    canvasDrawInstructions: [],


    setSelectedRule: (value) => set({selectedRule: value}),
    setKropkiDotsW: (value) => set({kropkiDotsW: value}),
    setKropkiDotsB: (value) => set({kropkiDotsB: value}),
    setSelectorSelectedCells: (value) => set({selectorSelectedCells: value}),
    setCanvasWidth: (value) => set({canvasWidth: value}),
    setCanvasHeight: (value) => set({canvasHeight: value}),
    setCanvasContext: (value) => set({canvasContext: value}),
    setCanvasDrawInstructions: (value) => set({canvasDrawInstructions: value}),
}));