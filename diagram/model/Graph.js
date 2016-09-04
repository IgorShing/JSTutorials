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
    this.edges = edges;
}

Graph.prototype.getEdges = function(){
    return this.edges;
}

/**
 * Возвращает диаметр графа как расстояние между наиболее отдаленными узлами графа.
 */
Graph.prototype.diameter = function(){
    var diameter = 0;
    var dist;

    // Вычисляем расстояния между всеми парами узлов и возвращаем максимальное расстояние.
    for (var i = 0; i < this.nodes.length - 1; i++) {
        for (var j = i + 1; j < this.nodes.length; j++) {
            dist = CoordinateUtils.distance(this.nodes[i].getPoint(), this.nodes[j].getPoint());
            if (dist > diameter) {
                diameter = dist;
            }
        }
    }
    return diameter;
}
