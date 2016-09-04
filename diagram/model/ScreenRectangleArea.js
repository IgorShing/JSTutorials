/**
 * Describes a rectangle area for screen coordinates. The origin of cooredinates in in the left upper corner.
 * The Y axis is pointed to the bottom. The X axis is pointed to the right. All coordinates >=0.
 */

function ScreenRectangleArea(cornerTopLeft, width, height){
    // Initialize parent's fields.
    RectangleArea.apply(this, arguments);
}

//Create inheritance
ScreenRectangleArea.prototype = Object.create(RectangleArea.prototype);

// Save the constructor
ScreenRectangleArea.prototype.constructor = ScreenRectangleArea;

/**
 * Sets a new size of the area.
 */
ScreenRectangleArea.prototype.setRectangleArea = function(cornerTopLeft, width, height){
    this.cornerTopLeft = cornerTopLeft;

    this.cornerTopRight.setX(cornerTopLeft.getX() + width);
    this.cornerTopRight.setY(cornerTopLeft.getY());

    this.cornerBottomLeft.setX(cornerTopLeft.getX());
    this.cornerBottomLeft.setY(cornerTopLeft.getY() + height);

    this.cornerBottomRight.setX(cornerTopLeft.getX() + width);
    this.cornerBottomRight.setY(cornerTopLeft.getY() + height);

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
 * Sets the height of the rectangle area.
 */
ScreenRectangleArea.prototype.setHeight = function(height) {
    this.height = height;
    this.cornerBottomLeft.setY(this.cornerTopLeft.getY() + height);
    this.cornerBottomRight.setY(this.cornerTopLeft.getY() + height);
}

/**
 * Returns the center of the rectangle area.
 */
ScreenRectangleArea.prototype.getCenter = function() {
    var x = this.cornerTopLeft.getX() + 0.5 * this.width;
    var y = this.cornerTopLeft.getY() + 0.5 * this.height;
    return new Point2D(x, y);
}