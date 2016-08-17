/**
 * Created by Admin on 08.08.2016.
 */
function Node(id, point, neighborsIds){

    this.id = id;
    this.point = point;
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

Node.prototype.getNeighborsIds = function(){
    return this.neighborsIds;
}

Node.prototype.setNeighborsIds = function(NeighborsIds){
    this.neighborsIds = neighborsIds;
}