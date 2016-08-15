/**
 * Transformes coordinates from one area to another.
 */
function CoordinateTransformer(){

}

CoordinateTransformer.prototype.transform = function(fromArea, toArea, nodes){

    for (var i = 0; i < Object.keys(data["nodes"]).length; i++){
        var curNodeData = data["nodes"][i];
        var node = new Node(curNodeData["id"], curNodeData["x"], curNodeData["y"], curNodeData["neighborsIds"]);
    }
}

// Fits the nodes coordinates to Cartesian system
CoordinateTransformer.prototype.transformToCartesianCoordinates = function(area, nodes){
    if (area == null || nodes == null){
        throw Error("Parameters are not valid");
    }

    area

}

// Fits the nodes coordinates to Screen coordinate system
CoordinateTransformer.prototype.transformToScreenCoordinates = function(area, nodes){

}