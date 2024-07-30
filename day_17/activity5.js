//graph
class graph{
    constructor(){
        this.adjacentList = {};
    }
    addVertex(vertex){
        this.adjacentList[vertex] = [];
    }
    addEdge(vertex1,vertex2){
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]){
            this.adjacentList[vertex1].push(vertex2);
            this.adjacentList[vertex2].push(vertex1);
        }
    }
    bfs(start){
        let queue = [start]; 
        const visited = {};
        let result = [];
        let currVertex;

        visited[start] = true;

        while(queue.length){
            currVertex = queue.shift();
            result.push(currVertex);

            this.adjacentList[currVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);   
                }
            });
        }
        return result;
    }
    shortestPath(start,end){
        let queue = [start]; 
        const visited = {};
        let result = [];
        let currVertex;
        let previous = {};

        visited[start] = true;

        while(queue.length){
            currVertex = queue.shift();
            result.push(currVertex);
            if(currVertex === end)
                break;

            this.adjacentList[currVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    previous[neighbor] = currVertex;
                    queue.push(neighbor);   
                }
            });
        }
        let path = [];
        for(let i = end;i != null;i = previous[i]){
            path.push(i);
        }
        path.reverse();
        if(path[0] != start)
            return [];
        return path;
    }
}

let g = new graph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addEdge('a','b');
g.addEdge('b','c');
g.addEdge('c','d');
g.addEdge('d','e');
g.addEdge('e','a');

console.log(g.bfs('a'));

console.log(g.shortestPath('a','d'));
