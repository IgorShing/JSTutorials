/**
 * Uses the information about data format to extract data.
 *
 */

function GraphDataExtractor(){
}

/**
 * Forms the graph based on data.
 */
GraphDataExtractor.getGraph = function(data){
    var nodes = [];
    var edges = [];

    // This map is used to increase the speed of methods.
    var nodesMap = new Map();

    // Form the nodes
    for (var i = 0; i < Object.keys(data["nodeDataArray"]).length; i++){
        var curNodeData = data["nodeDataArray"][i];
        var node = new Node(curNodeData["id"],
                            new Point2D(parseFloat(curNodeData["x"]), parseFloat(curNodeData["y"])),
                            curNodeData["text"]);
        nodes.push(node);
        // Fill the map
        nodesMap.set(curNodeData["id"],node);
    };

    // Form the edges
    for (var i = 0; i < Object.keys(data["linkDataArray"]).length; i++){
        var curEdgeData = data["linkDataArray"][i];

        var fromNodeId = curEdgeData["from"];
        var toNodeId = curEdgeData["to"];

        var fromNode = nodesMap.get(fromNodeId);
        var toNode = nodesMap.get(toNodeId);

        var edge = new Edge(fromNode, toNode, curEdgeData["text"], curEdgeData["curviness"]);
        edges.push(edge);
    };
    return new Graph(nodes, edges);
}
