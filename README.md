# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Recall my code,
```js
function hasCycle(graph) {
    let visited = [];
    let path = [];
    let result = false;
    
    function cycleHelp(node){
        if (path[node]) return true;
        if (visited[node]) return false;
        
        visited[node] = true;
        path[node] = true;
        
        for(let i = 0; i < graph[node].length; i++){
            if(cycleHelp(graph[node][i]))
              return true;
        }
        path[node] = false;
        return false;
    }
    
    for (let node = 0; node < graph.length; node++) {
        if (!visited[node] && cycleHelp(node)) {
            return true;
        }
    }
    
    return false;
}
```
