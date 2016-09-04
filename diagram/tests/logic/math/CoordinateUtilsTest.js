QUnit.module("Tests for Coordinate Utils")

QUnit.test( "Calculate distance between two pints", function( assert ) {

    var pointA = new Point2D(1, 1);
    var pointB = new Point2D(2, 2);

    var expectedDistance = 1.4142135623730951;
    var actualDistance = CoordinateUtils.distance(pointA, pointB);

    assert.deepEqual(actualDistance, expectedDistance, "Distances should be equal." );
});
