/**
 * Расставляет узлы графа по окружности для задания начальных значений координат узлов.
 *
 */
function CircleLayout(rectangleArea, points) {
    this.rectangleArea = rectangleArea;
    this.points = points;
}

CircleLayout.prototype.apply = function() {

    var radius;

    var areaCenterX = this.rectangleArea.getCenter().getX();
    var areaCenterY = this.rectangleArea.getCenter().getY();

    var width = this.rectangleArea.getWidth();
    var height = this.rectangleArea.getHeight();

    if (height > width) {
        radius = width / 2.0;
    }
    else {
        radius = height / 2.0;
    }

    for (var i = 0; i < this.points.length; i++) {
        this.points[i].setX(radius * Math.cos(2 * Math.PI * i / this.points.length) + areaCenterX);
        this.points[i].setY(radius * Math.sin(2 * Math.PI * i / this.points.length) + areaCenterY);
    }
}
