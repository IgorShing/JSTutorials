/**
 * Transformes coordinates from one area to another.
 */
function CoordinateTransformer(){

}

CoordinateTransformer.prototype.fitPointsToArea = function(width, height, points){
    if (points == null){
        throw new Error("Points are not initiated.");
    }

    // minPoint - the point with minimum x and y coordinates
    // maxPoint - the point with maximum x xnd y coordinates
    var maxPoint = MathUtils.getMaxPoint(points);
    var minPoint = MathUtils.getMinPoint(points);

    // Rescale coordinates of points to fit inside frame
    var xDiff = maxPoint.getX() - minPoint.getX();
    var yDiff = maxPoint.getY() - minPoint.getY();

    // Scale coefficient
    var Kx = width / xDiff;
    var Ky = height / yDiff;

    for (var i = 0; i < points.length; i++) {
      points[i].setX(minPoint.getX() + (points[i].getX() - minPoint.getX()) * Kx);
      points[i].setY(minPoint.getY() + (points[i].getY() - minPoint.getY()) * Ky);
    }
}

// Fits the nodes coordinates to Cartesian system
CoordinateTransformer.prototype.transformToCartesianCoordinates = function(area, nodes){
    if (area == null || nodes == null){
        throw Error("Parameters are not valid");
    }




}

// Fits the nodes coordinates to Screen coordinate system
CoordinateTransformer.prototype.transformToScreenCoordinates = function(area, nodes){

}