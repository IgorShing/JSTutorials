function Graph(nodes, edges){
    this.nodes = nodes;
    this.edges = edges;
}

Graph.prototype.setNodes = function(nodes){
    this.nodes = nodes;
}

Graph.prototype.getNodes = function(){
    return this.nodes;
}

Graph.prototype.setEdges = function(edges){
    this.nodes = edges;
}

Graph.prototype.getEdges = function(){
    return this.edges;
}
