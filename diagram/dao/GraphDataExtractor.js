/**
 * Uses the information about data format to extract data.
 *
 */

function GraphDataExtractor(){

}

GraphDataExtractor.getNodes = function(data){
    var nodes = [];

    for (var i = 0; i < Object.keys(data["nodeDataArray"]).length; i++){
        var curNodeData = data["nodeDataArray"][i];
        var node = new Node(curNodeData["id"],
                            new Point2D(curNodeData["x"], curNodeData["y"]),
                            curNodeData["text"]);
        nodes.push(node);
    };

    return nodes;
}

GraphDataExtractor.getNodes = function(data){
    var edges = [];

    for (var i = 0; i < Object.keys(data["linkDataArray"]).length; i++){
        var curEdgeData = data["linkDataArray"][i];

        var edge = new Edge(curEdgeData["from"],
                            curEdgeData["to"],
                            curEdgeData["text"],
                            curEdgeData["curviness"]);
        edges.push(edge);
    };

    return edges;
}
