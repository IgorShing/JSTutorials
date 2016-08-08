/**
 * Created by Admin on 08.08.2016.
 */
function Node(id, x, y, neighborsIds){

    this.id = id;
    this.x = x;
    this.y = y;
    this.neighborsIds = neighborsIds;
}

Node.prototype.getId = function(){
    return this.id;
}

Node.prototype.setId = function(id){
    this.id = id;
}

Node.prototype.getX = function(){
    return this.x;
}

Node.prototype.setX = function(x){
    this.x = x;
}

Node.prototype.getY = function(){
    return this.y;
}

Node.prototype.setY = function(y){
    this.y = y;
}

Node.prototype.getNeighborsIds = function(){
    return this.neighborsIds;
}

Node.prototype.setNeighborsIds = function(NeighborsIds){
    this.neighborsIds = neighborsIds;
}