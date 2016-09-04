/**
 * Created by Admin on 08.08.2016.
 */
function Edge(fromNode, toNode, text, curviness){
    this.fromNode = fromNode;
    this.toNode = toNode;
    this.text = text;
    this.curviness = curviness;
}

Edge.prototype.getFromNode = function(){
    return this.fromNode;
}

Edge.prototype.setFromNode = function(fromNode){
    this.fromNode = fromNode;
}

Edge.prototype.getToNode = function(){
    return this.toNode;
}

Edge.prototype.setToNode = function(toNode){
    this.toNode = toNode;
}

Edge.prototype.getText = function(){
    return this.text;
}

Edge.prototype.setText = function(text){
    this.text = text;
}

Edge.prototype.getCurviness = function(){
    return this.curviness;
}

Edge.setCurviness = function(curviness){
    this.curviness = curviness;
}
