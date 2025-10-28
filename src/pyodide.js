import {loadPyodide} from "pyodide";

let pyodide;

const files = [
    "/PythonCSPSolver/__init__.py",
    "/PythonCSPSolver/sudoku_solver.py",
    "/PythonCSPSolver/AdditionalConstraints/__init__.py",
    "/PythonCSPSolver/AdditionalConstraints/arrow_constraint.py",
    "/PythonCSPSolver/AdditionalConstraints/black_dot_constraint.py",
    "/PythonCSPSolver/AdditionalConstraints/cage_constraint.py",
    "/PythonCSPSolver/AdditionalConstraints/german_whisper_constraint.py",
    "/PythonCSPSolver/AdditionalConstraints/kings_move_constraint.py",
    "/PythonCSPSolver/AdditionalConstraints/knights_move_constraint.py",
    "/PythonCSPSolver/AdditionalConstraints/sudoku_x_constraint.py",
    "/PythonCSPSolver/AdditionalConstraints/thermo_constraint.py",
    "/PythonCSPSolver/AdditionalConstraints/white_dot_constraint.py"
]

async function setupPyodideEnvironment() {
    pyodide = await loadPyodide({indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.0/full/',});

    //load needed packages
    await pyodide.loadPackage("micropip");

    const requirementsTxtFile = await fetch("/PythonCSPSolver/requirements.txt");
    if (!requirementsTxtFile.ok) throw new Error("Failed to fetch requirements file.")
    const content = await requirementsTxtFile.text();
    const requiredPackages = content.split("\n").filter((x) => x !== "");

    for (let i = 0; i < requiredPackages.length; i++) {
        try {
            await pyodide.runPythonAsync(`
            import micropip
            await micropip.install("${requiredPackages[i]}")
            `);
            console.log(`Installed : ${requiredPackages[i]}`);
        } catch (e) {
            console.error(e);
        }
    }

    // add files
    pyodide.FS.mkdir("/PythonCSPSolver");
    pyodide.FS.mkdir("/PythonCSPSolver/AdditionalConstraints");

    for (const file of files) {
        const req = await fetch(file);
        if (!req.ok) throw new Error(`Failed to fetch ${file}`);
        const content = await req.text();
        pyodide.FS.writeFile(file, content);
        console.log(`Loaded file : ${file}`);
    }

    await pyodide.runPythonAsync(`
        import sys
        sys.path.append("/")
    `);


    console.log(pyodide.FS.readdir("/PythonCSPSolver"));
    console.log(pyodide.FS.readdir("/PythonCSPSolver/AdditionalConstraints"));
    console.log(pyodide.FS.readFile("/PythonCSPSolver/sudoku_solver.py", {encoding: "utf8"}));

}

async function solveSudoku(grid) {
    const slicedGrid = [];
    for (let i = 0; i < 9; i++) {
        slicedGrid.push(grid.slice(i * 9, i * 9 + 9));
    }

    const pyGrid = pyodide.toPy(slicedGrid);
    pyodide.globals.set("pyGrid", pyGrid);
    const pyResult = await pyodide.runPythonAsync(`
        from PythonCSPSolver.sudoku_solver import solve
        solve(pyGrid, [])
        `);
    if (typeof pyResult === "boolean") {
        console.log(pyResult);

        pyGrid.destroy();
        return pyResult;
    }

    const result = pyResult.toJs(pyResult);
    pyGrid.destroy();
    console.log(result);
    return result.flat();

}

async function testPyodide() {
    const pyResult = await pyodide.runPythonAsync(`
    from PythonCSPSolver.sudoku_solver import solve
    solve([
        [5,3,0,0,70,0,0,0,],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
    ], [])
    `)
    const text = pyResult.toJs();
    console.log(text);
}

export {testPyodide, setupPyodideEnvironment, solveSudoku};
