QUnit.module("Tests for Rectangle Area")

QUnit.test( "Are width and height correct", function( assert ) {
    var width = 100;
    var height = 100;
    var cartesianRectangleArea = new CartesianRectangleArea(width, height);

    assert.deepEqual(cartesianRectangleArea.getWidth(), width, "Widths should be equal!" );
    assert.deepEqual(cartesianRectangleArea.getHeight(), height, "Heights should be equal!" );
});

QUnit.test( "Get center of the area", function( assert ) {
    var width = 100;
    var height = 100;
    var center = new Point2D(0, 0);
    var cartesianRectangleArea = new CartesianRectangleArea(width, height);

    assert.deepEqual(cartesianRectangleArea.getCenter(), center, "Centers should be equal!" );
});

QUnit.test( "Should return the proper width and height", function( assert ) {
    var width = 100;
    var height = 100;
    var cartesianRectangleArea = new CartesianRectangleArea(width, height);

    assert.deepEqual(cartesianRectangleArea.getWidth(), width, "Widths should be equal!" );
    assert.deepEqual(cartesianRectangleArea.getHeight(), height, "Heights should be equal!" );
});
