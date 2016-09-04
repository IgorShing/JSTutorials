/**
 * Created by Admin on 08.08.2016.
 */
function GraphView(graph){
    // Initialize parent's fields.
    View.apply(this, arguments);

    this.graph = graph;
}

//Create inheritance
GraphView.prototype = Object.create(View.prototype);

// Save the constructor
GraphView.prototype.constructor = GraphView;

GraphView.prototype.draw = function(canvasId){
      this.drawEdges(canvasId);
      this.drawNodes(canvasId);
}

/*function findNodeById(nodes, nodeId){
    for (var i = 0; i < nodes.length; i ++){
        if (nodes[i].id === nodeId){
            return nodes[i];
        }
    }
}*/

GraphView.prototype.drawNodes = function(canvasId){
    var nodeView;
    var nodes = this.graph.getNodes();

    // for (var i = 0; i < Object.keys(nodes.length); i++){
    for (var i = 0; i < nodes.length; i++){
        nodeView = new CircleView(nodes[i], 10, "red");
        nodeView.draw(canvasId);
    }
}

GraphView.prototype.drawEdges = function(canvasId){
     var edges = this.graph.getEdges();
     // Draw edges
     for (var i = 0; i < edges.length; i++){
         var edgeView = new EdgeView(edges[i], "blue");
         edgeView.draw(canvasId);
     }
 }

/*function drawEdges(data){
    for (var i = 0; i < Object.keys(data["nodes"]).length; i++){
        var curNodeData = data["nodes"][i];
        var node = new Node(curNodeData["id"], curNodeData["x"], curNodeData["y"], curNodeData["neighborsIds"]);

        // Draw edges
        for (var j = 0; j < node.getNeighborsIds().length; j ++){

            var nodeRightData = findNodeById(data["nodes"], node.getNeighborsIds()[j]);
            var nodeRight = new Node(nodeRightData.id, nodeRightData.x, nodeRightData.y, nodeRightData.neighborsIds);

            var edge = new Edge(node, nodeRight);

            var edgeView = new EdgeView(edge, "blue");
            edgeView.draw(canvasId);
        }
    }
}*/

