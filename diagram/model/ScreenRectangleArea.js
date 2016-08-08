/**
 * Created by Admin on 08.08.2016.
 */

/**
 * Describes a rectangle area for screen coordinates. The origin of cooredinates in in the left upper corner.
 * The Y axis is pointed to the bottom. The X axis is pointed to the right. All coordinates >=0.
 */

/**
 * Constructor.
 *
 * @param x
 * @param y
 * @param width
 * @param height
 * @constructor
 */
function ScreenRectangleArea(x, y, width, height){
    this.cornerTopLeft = new Point2D(x, y);
    this.cornerTopRight = new Point2D(x + width, y);
    this.cornerBottomLeft = new Point2D(x, y + height);
    this.cornerBottomRight = new Point2D(x + width, y + height);
    this.width = width;
    this.height = height;
}

/**
 * Sets the size of the area.
 */
ScreenRectangleArea.prototype.setRectangleArea = function(x, y, width, height){
    this.cornerTopLeft.setX(x);
    this.cornerTopLeft.setY(y);

    this.cornerTopRight.setX(x + width);
    this.cornerTopRight.setY(y);

    this.cornerBottomLeft.setX(x);
    this.cornerBottomLeft.setY(y + height);

    this.cornerBottomRight.setX(x + width);
    this.cornerBottomRight.setY(y + height);

    this.width = width;
    this.height = height;
}

/**
 * Sets the width of the rectangle area.
 */
ScreenRectangleArea.prototype.setWidth = function(width) {
    this.width = width;
    this.cornerTopRight.setX(this.cornerTopLeft.getX() + width);
    this.cornerBottomRight.setX(this.cornerTopLeft.getX() + width);
}

/**
 * Gets the width of the rectangle area.
 */
ScreenRectangleArea.prototype.getWidth = function() {
    return this.width;
}

/**
 * Sets the height of the rectangle area.
 */
ScreenRectangleArea.prototype.setHeight = function(height) {
    this.height = height;
    this.cornerBottomLeft.setY(this.cornerTopLeft.getY() + height);
    this.cornerBottomRight.setY(this.cornerTopLeft.getY() + height);
}

/**
 * Gets the height of the rectangle area.
 */
ScreenRectangleArea.prototype.getHeight = function() {
    return this.height;
}

/**
 * Returns the center of the rectangle area.
 */
ScreenRectangleArea.prototype.getCenter = function() {
    var x = this.cornerTopLeft.getX() + 0.5 * this.width;
    var y = this.cornerTopLeft.getY() + 0.5 * this.height;
    return new Point2D(x, y);
}