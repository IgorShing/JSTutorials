/**
 * Расставляет узлы графа по окружности для задания начальных значений координат узлов.
 *
 */
function CircleLayout(areaCenterX, areaCenterY) {
    this.areaCenterX = areaCenterX;
    this.areaCenterY = areaCenterY;
}



public void circleLayout() {
    // calculate the radius of the circle
    var double radius;

    double areaCenterX = cartesianRectangleArea.getCenter().getX();
    double areaCenterY = cartesianRectangleArea.getCenter().getY();

    // calc radius
    if (height > width) {
        radius = width / 2.0;
    }
    else {
        radius = height / 2.0;
    }

    for (int i = 0; i < nNodes; i++) {
        xPos[i] = radius * Math.cos(2 * Math.PI * i / nNodes) + areaCenterX;
        yPos[i] = radius * Math.sin(2 * Math.PI * i / nNodes) + areaCenterY;
    }
}
}
