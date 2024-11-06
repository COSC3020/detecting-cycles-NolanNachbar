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
