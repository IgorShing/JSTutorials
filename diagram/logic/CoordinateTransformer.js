/**
 * Transformes coordinates from one area to another.
 */
function CoordinateTransformer(){

}

// Fits the nodes coordinates to Cartesian system
CoordinateTransformer.prototype.transformToCartesianCoordinates = function(width, height, points){


}

// Fits the nodes coordinates to Screen coordinate system
CoordinateTransformer.transformToScreenCoordinates = function(screenArea, points){
    if (points == null || points.length == 1){
        throw new Error("Points are not initiated or only one point is present.");
    }
    
    // maxPoint - the point with maximum x xnd y coordinates
    var maxPoint = MathUtils.getMaxPoint(points);

    // minPoint - the point with minimum x and y coordinates
    var minPoint = MathUtils.getMinPoint(points);

    // Rescale coordinates of points to fit inside frame
    var xDiff = maxPoint.getX() - minPoint.getX();
    var yDiff = maxPoint.getY() - minPoint.getY();

    // Scale coefficient
    var Kx = Math.abs(screenArea.getWidth() / xDiff);
    var Ky = Math.abs(screenArea.getHeight() / yDiff);
    
    var K = Math.min(Kx, Ky);
    
    
    console.log("Kx: " + Kx);
    console.log("Ky: " + Ky);
    

/*    for (var i = 0; i < points.length; i++) {
        points[i].setX(screenArea.getCornerTopLeft().getX() + (points[i].getX() - minPoint.getX()) * Kx);
        // The y-axis is pointed to the bottom in the screen coordinates
        points[i].setY(screenArea.getCornerBottomLeft().getY() - (points[i].getY() - minPoint.getY()) * Ky);
    }*/
    
    for (var i = 0; i < points.length; i++) {
        points[i].setX(screenArea.getCornerTopLeft().getX() + (points[i].getX() - minPoint.getX()) * K);
        // The y-axis is pointed to the bottom in the screen coordinates
        points[i].setY(screenArea.getCornerBottomLeft().getY() - (points[i].getY() - minPoint.getY()) * K);
    }
}