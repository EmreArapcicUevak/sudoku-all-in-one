import {create} from "zustand";

export const sudokuContext = create((set) => ({
    selectedRule: "Normal Sudoku",
    kropkiDotsW: [],
    kropkiDotsB: [],


    setSelectedRule: (value) => set({selectedRule: value}),
    setKropkiDotsW: (value) => set({kropkiDotsW: value}),
    setKropkiDotsB: (value) => set({kropkiDotsB: value}),
}));