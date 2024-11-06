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
        
        for(let i = 0; i < graph[node].length; i++){ // This will run once for every edge
            if(cycleHelp(graph[node][i]))
              return true;
        }

        path[node] = false;
        return false;
    }
    
    for (let node = 0; node < graph.length; node++) { // This will run once for every node.
        if (!visited[node] && cycleHelp(node)) {
            return true;
        }
    }
    
    return false;
}
```

The worst case would be when there is no cycle and it has to check every edge of every node. This means that in the worst case the firs loop will run $E$ times and the second loop will run $E$ times. Thus the worst-case big $\Theta$ complexity of it is $\Theta(V + E)$.

I started by taking my DFS code and test code and modifying it to fit the assignment. I looked at the graphs slides and saw on slide 26 that you "need to take care if there are cycles" when searching and thatgave my the idea. I took the idea of marking the arrays like ```path[node] = true``` from https://github.com/COSC3020/detecting-isomorphism-NolanNachbar/tree/NolanNachbar-patch-1. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
