QUnit.module("Tests for Math Utils")

QUnit.test( "Should return max point", function( assert ) {

    var points = [new Point2D(160, 250),
                  new Point2D(120, 350),
                  new Point2D(10, 250)];

    var expectedMaxPoint = new Point2D(160, 350);
    var actualMaxPoint = MathUtils.getMaxPoint(points);
    assert.deepEqual(actualMaxPoint, expectedMaxPoint, "Points should be equal." );
});

QUnit.test( "Should return min point", function( assert ) {

    var points = [new Point2D(160, 230),
        new Point2D(120, 350),
        new Point2D(10, 250)];

    var expectedMinPoint = new Point2D(10, 230);
    var actualMinPoint = MathUtils.getMinPoint(points);
    assert.deepEqual(actualMinPoint, expectedMinPoint, "Points should be equal." );
});

QUnit.test( "Should return index of the max value element in an array", function( assert ) {

    var array = [1,2,5,8,7,3,4];

    var expected = 3;
    var actual = MathUtils.getIndexOfMaxValue(array);
    assert.deepEqual(actual, expected, "Should be equal." );
});


