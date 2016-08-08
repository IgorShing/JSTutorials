QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

QUnit.module("Tests for Screen Rectangle Area")
QUnit.test( "Are width and height correct", function( assert ) {
    var width = 100;
    var height = 100;
    var screenRectangleArea = new ScreenRectangleArea(0, 0, width, height);

    assert.deepEqual(screenRectangleArea.getWidth(), width, "Width has passed!" );
    assert.deepEqual(screenRectangleArea.getHeight(), height, "Height has passed!" );
});

QUnit.test( "Get center of the area", function( assert ) {
    var width = 100;
    var height = 100;
    var center = new Point2D(width/2, height/2);
    var screenRectangleArea = new ScreenRectangleArea(0, 0, width, height);

    assert.deepEqual(screenRectangleArea.getCenter(), center, "Centers are equal!" );
});
