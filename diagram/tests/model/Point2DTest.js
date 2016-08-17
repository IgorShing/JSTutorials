QUnit.module("Tests for Point2D")

QUnit.test( "Are x and y correct", function( assert ) {
    var x = 100;
    var y = 100;
    var point = new Point2D(x, y);

    assert.deepEqual(point.getX(), x, "X should be equal!" );
    assert.deepEqual(point.getY(), y, "Y should be equal!" );
});
