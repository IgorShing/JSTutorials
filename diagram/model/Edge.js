/**
 * Created by Admin on 08.08.2016.
 */
function Edge(fromNodeId, toNodeId, text, curviness){
    this.fromNodeId = fromNodeId;
    this.toNodeId = toNodeId;
    this.text = text;
    this.curviness = curviness;
}

Edge.getFromNodeId = function(){
    return this.fromNodeId;
}

Edge.setFromNodeId = function(fromNodeId){
    this.fromNodeId = fromNodeId;
}

Edge.getToNodeId = function(){
    return this.toNodeId;
}

Edge.setToNodeId = function(toNodeId){
    this.toNodeId = toNodeId;
}

Edge.getText = function(){
    return this.text;
}

Edge.setText = function(text){
    this.text = text;
}

Edge.getCurviness = function(){
    return this.curviness;
}

Edge.setCurviness = function(curviness){
    this.curviness = curviness;
}
