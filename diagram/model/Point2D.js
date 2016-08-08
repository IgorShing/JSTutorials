/**
 * Created by Admin on 08.08.2016.
 */
function Point2D(x,y){
    this.x = x;
    this.y = y;
}

Point2D.prototype.getX = function(){
    return this.x;
}
Point2D.prototype.setX = function(x){
    this.x = x;
}
Point2D.prototype.getY = function(){
    return this.y;
}
Point2D.prototype.setY = function(y){
    this.y = y;
}