# Sudoku All-In-One

Sudoku All-In-One is a browser-based Sudoku application that supports multiple Sudoku variants and allows users to solve puzzles using a Python-based solver executed with Pyodide inside the browser. The project provides an intuitive interface for creating, editing, and solving Sudoku boards of various rule types — all without a backend.


![Pre Solved Image](./Images/Sudoku_Pre_Solve.png)

![Post Solved Image](./Images/Sudoku_Post_Solve.png)

Try it out yourself **[here](https://emrearapcicuevak.github.io/sudoku-all-in-one/)**.

---

## Features

- Supports multiple Sudoku puzzle types and rule variants:
  - **Classic Sudoku**
  - **Diagonal**
  - **King Move**
  - **Knight Move**
  - **Kropki Dots**
  - **Thermo**
  - **Arrow**
  - **German Whisper**
  - **Killer Cages**
- Built-in Sudoku solver written in Python and executed in the browser using Pyodide
- Global state management using Zustand
- User-friendly UI for placing digits, adding constraints, and building puzzles
- Import and export puzzles for sharing or storing configurations
- Undo and redo functionality
- Runs entirely in the browser — no backend required

---

## Tech Stack

| Technology | Purpose |
|------------|----------|
| React | UI and application logic |
| Vite | Frontend tooling & development server |
| Pyodide | Executes Python solver in the browser |
| Python (AIMA-Toolkit) | Sudoku solving algorithm |
| Zustand | State management |
| JavaScript | App logic and Pyodide integration |
| Tailwind | Styling and layout |


The main purpose of this project was to showcase the use and power 
of the [AIMA-Toolkit](https://github.com/EmreArapcicUevak/aima-toolkit)

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/EmreArapcicUevak/sudoku-all-in-one.git

# Navigate into the project
cd sudoku-all-in-one

# Install dependencies
npm install

# Start development server
npm run dev
```

