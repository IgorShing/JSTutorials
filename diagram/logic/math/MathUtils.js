
function MathUtils(){
}

// Constructs a point with maximum x and y among the points coordinates
MathUtils.getMaxPoint = function(points){
    var coordX = [];
    var coordY = [];

    for (var i = 0; i < points.length; i++) {
        coordX.push(points[i].getX());
        coordY.push(points[i].getY());
    }

    var maxPoint = new Point2D(Math.max.apply(null, coordX), Math.max.apply(null, coordY));
    return maxPoint;
}

// Constructs a point with minimum x and y among the points coordinates
MathUtils.getMinPoint = function(points){
    var coordX = [];
    var coordY = [];

    for (var i = 0; i < points.length; i++) {
        coordX.push(points[i].getX());
        coordY.push(points[i].getY());
    }

    var minPoint = new Point2D(Math.min.apply(null, coordX), Math.min.apply(null, coordY));
    return minPoint;
}