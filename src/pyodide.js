import {loadPyodide} from "pyodide";

async function testPyodide() {
    loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.0/full/',
    }).then((pyodide) => {
        pyodide.runPython('print("Hello from Python!")')
    })
}

export default testPyodide;
