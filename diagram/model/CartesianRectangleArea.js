/**
 * Описывает прямоугольную область, для которой используются декартовы координаты. Начало координат
 * в центре области. Ось ординат направлена вверх.
 */
function CartesianRectangleArea(cornerTopLeft, width, height) {
    // Initialize parent's fields.
    RectangleArea.apply(this, arguments);
}

//Create inheritance
    CartesianRectangleArea.prototype = Object.create(RectangleArea.prototype);

// Save the constructor
    CartesianRectangleArea.prototype.constructor = CartesianRectangleArea;

/**
 * Устанавливает размеры прямоугольной области.
 */
CartesianRectangleArea.prototype.setRectangleArea = function(width, height) {
    this.cornerTopLeft.setX(-0.5 * width);
    this.cornerTopLeft.setY(0.5 * height);

    this.cornerTopRight.setX(0.5 * width);
    this.cornerTopRight.setY(0.5 * height);

    this.cornerBottomLeft.setX(-0.5 * width);
    this.cornerBottomLeft.setY(-0.5 * height);

    this.cornerBottomRight.setX(0.5 * width);
    this.cornerBottomRight.setY(-0.5 * height);

    this.width = width;
    this.height = height;
}

/**
 * Устанавливает ширину прямоугольной области.
 */
CartesianRectangleArea.prototype.setWidth = function(width) {
    this.cornerTopLeft.setX(-0.5 * width);
    this.cornerTopRight.setX(0.5 * width);
    this.cornerBottomLeft.setX(-0.5 * width);
    this.cornerBottomRight.setX(0.5 * width);

    this.width = width;
}

/**
 * Устанавливает высоту прямоугольной области.
 */
CartesianRectangleArea.prototype.setHeight = function(height) {
    this.cornerTopLeft.setY(0.5 * height);
    this.cornerTopRight.setY(0.5 * height);
    this.cornerBottomLeft.setY(-0.5 * height);
    this.cornerBottomRight.setY(-0.5 * height);

    this.height = height;
}

/**
 * Возвращает центр прямоугольной области.
 */
CartesianRectangleArea.prototype.getCenter = function(){
    return new Point2D(0.0, 0.0);
}