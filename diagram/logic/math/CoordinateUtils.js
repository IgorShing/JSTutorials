function CoordinateUtils(){

}

CoordinateUtils.distance = function(pointA, pointB){

    var xA = pointA.getX();
    var yA = pointA.getY();

    var xB = pointB.getX();
    var yB = pointB.getY();

    return Math.sqrt((xB - xA)*(xB - xA) + (yB - yA)*(yB - yA));
}
