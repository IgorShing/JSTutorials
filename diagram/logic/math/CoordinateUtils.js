function CoordinateUtils(){

}

CoordinateUtils.distance = function(pointA, pointB){
    var deltaX = pointB.getX() - pointA.getX();
    var deltaY = pointB.getY() - pointA.getY();

    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}
