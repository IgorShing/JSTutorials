/**
 * Created by Admin on 14.08.2016.
 */

    function RectangleArea(cornerTopLeft, width, height) {
        if (cornerTopLeft == null){
            throw new Error("Invalid starting point of the area.");
        }

        // The corner points of the area
        this.cornerTopLeft = cornerTopLeft;
        this.cornerTopRight = new Point2D(this.cornerTopLeft.getX() + width, this.cornerTopLeft.getY());
        this.cornerBottomLeft = new Point2D(this.cornerTopLeft.getX(), this.cornerTopLeft.getY() + height);
        this.cornerBottomRight = new Point2D(this.cornerTopLeft.getX() + width, this.cornerTopLeft.getY() + height);

        this.width = width;
        this.height = height;
    };
    /**
     * Возвращает ширину прямоугольной области.
     */
    RectangleArea.prototype.getWidth = function() {
        return this.width;
    };

    /**
     * Возвращает высоту прямоугольной области.
     */
    RectangleArea.prototype.getHeight = function() {
        return this.height;
    };

    /**
     * Возвращает площадь прямоугольной области.
     */
    RectangleArea.prototype.getArea = function() {
        return this.width * this.height;
    };

    /**
     * Возвращает радиус окружности, описанной вокруг прямоугольной области с центром в точке
     * пересечения ее диагоналей.
     */
    RectangleArea.prototype.surroundingCircleRadius = function() {
        return 0.5 * Math.sqrt(this.width * this.width + this.height * this.height);
    };

    RectangleArea.prototype.getCornerTopLeft = function() {
        return this.cornerTopLeft;
    };

    RectangleArea.prototype.getCornerTopRight = function() {
        return this.cornerTopRight;
    };

    RectangleArea.prototype.getCornerBottomLeft = function() {
        return this.cornerBottomLeft;
    };

    RectangleArea.prototype.getCornerBottomRight = function() {
        return this.cornerBottomRight;
    };