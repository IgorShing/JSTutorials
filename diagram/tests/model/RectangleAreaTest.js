QUnit.module("Tests for Rectangle Area")

QUnit.test( "Should return the correct width and height", function( assert ) {
    var cornerTopLeft = new Point2D(0.0, 0.0);
    var width = 100;
    var height = 100;
    var rectangleArea = new RectangleArea(cornerTopLeft, width, height);

    assert.deepEqual(rectangleArea.getWidth(), width, "Widths should be equal!" );
    assert.deepEqual(rectangleArea.getHeight(), height, "Heights should be equal!" );
});

QUnit.test( "Should return the correct area", function( assert ) {
    var cornerTopLeft = new Point2D(0.0, 0.0);
    var width = 100;
    var height = 100;
    var rectangleArea = new RectangleArea(cornerTopLeft, width, height);

    assert.deepEqual(rectangleArea.getArea(), width*height, "Areas should be equal!" );
});

QUnit.test( "Should return the correct surrounding circle radius", function( assert ) {
    var cornerTopLeft = new Point2D(0.0, 0.0);
    var width = 100;
    var height = 100;

    var rectangleArea = new RectangleArea(cornerTopLeft, width, height);
    var radius = 0.5 * Math.sqrt(width * width + height * height);

    assert.deepEqual(rectangleArea.surroundingCircleRadius(), radius, "Radii should be equal!" );
});

QUnit.test( "Should return the correct corner points of the area", function( assert ) {
    var cornerTopLeft = new Point2D(0.0, 0.0);
    var width = 100;
    var height = 100;

    var rectangleArea = new RectangleArea(cornerTopLeft, width, height);
    // The corner points of the area

    var cornerTopRight = new Point2D(cornerTopLeft.getX() + width, cornerTopLeft.getY());
    var cornerBottomLeft = new Point2D(cornerTopLeft.getX(), cornerTopLeft.getY() + height);
    var cornerBottomRight = new Point2D(cornerTopLeft.getX() + width, cornerTopLeft.getY() + height);

    assert.deepEqual(rectangleArea.getCornerTopLeft(), cornerTopLeft, "Corner Top Left points should be equal!" );
    assert.deepEqual(rectangleArea.getCornerBottomRight(), cornerBottomRight, "Corner Bottom Right points should be equal!" );
    assert.deepEqual(rectangleArea.getCornerBottomLeft(), cornerBottomLeft, "Corner Top Left Points should be equal!" );
    assert.deepEqual(rectangleArea.getCornerTopRight(), cornerTopRight, "Corner Top Right Points should be equal!" );
});
