function GravityLayout(){

}

/**
 * Смещает весь граф как целое к середине области отображения.
 */
public void adjustForGravity() {
    double gx = 0;
    double gy = 0;

    double areaCenterX = cartesianRectangleArea.getCenter().getX();
    double areaCenterY = cartesianRectangleArea.getCenter().getY();

    // Вычисляем "центр масс" графа
    for (int i = 0; i < nNodes; i++) {
        gx += xPos[i];
        gy += yPos[i];
    }
    gx /= nNodes;
    gy /= nNodes;

    double diffx = areaCenterX - gx;
    double diffy = areaCenterY - gy;

    for (int i = 0; i < nNodes; i++) {
        xPos[i] += diffx;
        yPos[i] += diffy;
    }
}