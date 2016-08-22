/**
 * Created by Admin on 08.08.2016.
 */
function Node(id, point, text, neighborsIds){

    this.id = id;
    this.point = point;
    this.text = text;
    this.neighborsIds = neighborsIds;
}

Node.prototype.getId = function(){
    return this.id;
}

Node.prototype.setId = function(id){
    this.id = id;
}

Node.prototype.getPoint = function(){
    return this.point;
}

Node.prototype.setPoint = function(point){
    this.point = point;
}

Node.prototype.getText = function(){
    return this.text;
}

Node.prototype.setText = function(text){
    this.text = text;
}

Node.prototype.getNeighborsIds = function(){
    return this.neighborsIds;
}

Node.prototype.setNeighborsIds = function(NeighborsIds){
    this.neighborsIds = neighborsIds;
}