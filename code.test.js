const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Running tests
const graph = [
    [3, 4, 2, 7],
    [0],
    [1, 4],
    [2, 5, 6],
    [1, 5],
    [6],
    [],
    [8],
    [],
    []
];

const graph2 = [
    [1, 2],
    [3],
    [3, 4],
    [],
    [5, 6],
    [],
    [7],
    [],
    [],
    []
];

const graph3 = [
    [5],
    [2, 3],
    [4],
    [7],
    [5],
    [0],
    [8],
    []
];

const graph4 = [
    [1],
    [2],
    [0],
    [], 
    []
];

function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const tests = [
    { func: hasCycle, graph: graph, result: true, name: 'DFS Test 1' },
    { func: hasCycle, graph: graph2, result: false, name: 'DFS Test 2' },
    { func: hasCycle, graph: graph3, result: true, name: 'DFS Test 3' },
    { func: hasCycle, graph: graph4, result: true, name: 'DFS Test 4' },
];

tests.forEach(test => {
    const output = test.func(test.graph);
    if (output === test.result) {
        console.log(`${test.name} successful`);
    } else {
        console.error(`${test.name} failed: ${output} != ${test.result}`);
    }
});
