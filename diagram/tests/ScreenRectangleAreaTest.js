QUnit.module("Tests for Screen Rectangle Area")

QUnit.test( "Are width and height correct", function( assert ) {
    var width = 100;
    var height = 100;
    var screenRectangleArea = new ScreenRectangleArea(0, 0, width, height);

    assert.deepEqual(screenRectangleArea.getWidth(), width, "Widths should be equal!" );
    assert.deepEqual(screenRectangleArea.getHeight(), height, "Heights should be equal!" );
});

QUnit.test( "Get center of the area", function( assert ) {
    var width = 100;
    var height = 100;
    var center = new Point2D(width/2, height/2);
    var screenRectangleArea = new ScreenRectangleArea(0, 0, width, height);

    assert.deepEqual(screenRectangleArea.getCenter(), center, "Centers should be equal!" );
});

QUnit.test( "Should return the proper width and height", function( assert ) {
    var width = 100;
    var height = 100;
    var screenRectangleArea = new ScreenRectangleArea(0, 0, width, height);

    assert.deepEqual(screenRectangleArea.getWidth(), width, "Widths should be equal!" );
    assert.deepEqual(screenRectangleArea.getHeight(), height, "Heights should be equal!" );
});
