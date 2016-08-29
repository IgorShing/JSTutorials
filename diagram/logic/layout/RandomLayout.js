/**
 * Distributes points randomly within a rectangle (width, height).
 * Cartesian coordinates are used.
 *
 * @param points
 * @param width
 * @param height
 * @constructor
 */

function RandomLayout(points, width, height){
    this.points = points;
}

RandomLayout.prototype.apply = function(){

    // minPoint - the point with minimum x and y coordinates
    // maxPoint - the point with maximum x xnd y coordinates
    var maxPoint = MathUtils.getMaxPoint(this.points);
    var minPoint = MathUtils.getMinPoint(this.points);

    for (var i =0; i < this.points.length; i++){
        this.points[i].setX(MathUtils.getUniformRandomValue(minPoint.getX(),maxPoint.getX()));
        this.points[i].setY(MathUtils.getUniformRandomValue(minPoint.getY(),maxPoint.getY()));
    }
}
