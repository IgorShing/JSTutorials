QUnit.module("Tests for Coordinate Transformer")

QUnit.test( "Fit point to the area", function( assert ) {
    var points = [new Point2D(0, 0),
                  new Point2D(100, 0),
                  new Point2D(0, 100),
                  new Point2D(100, 100)];

    var width = 50;
    var height = 50;

    var coordinateTransformer = new CoordinateTransformer();
    coordinateTransformer.fitPointsToArea(width, height, points);

    assert.deepEqual(points[0].getX(),0,"Coordinates should be equal.");
    assert.deepEqual(points[0].getY(),0,"Coordinates should be equal.");

    assert.deepEqual(points[1].getX(),50,"Coordinates should be equal.");
    assert.deepEqual(points[1].getY(),0,"Coordinates should be equal.");

    assert.deepEqual(points[2].getX(),0,"Coordinates should be equal.");
    assert.deepEqual(points[2].getY(),50,"Coordinates should be equal.");

    assert.deepEqual(points[3].getX(),50,"Coordinates should be equal.");
    assert.deepEqual(points[3].getY(),50,"Coordinates should be equal.");

});

QUnit.test( "Fit point to the area with non-zero origin", function( assert ) {
    var points = [new Point2D(100, 100),
        new Point2D(200, 100),
        new Point2D(100, 200),
        new Point2D(200, 200)];

    var width = 50;
    var height = 50;

    var coordinateTransformer = new CoordinateTransformer();
    coordinateTransformer.fitPointsToArea(width, height, points);

    assert.deepEqual(points[0].getX(),100,"Coordinates should be equal.");
    assert.deepEqual(points[0].getY(),100,"Coordinates should be equal.");

    assert.deepEqual(points[1].getX(),150,"Coordinates should be equal.");
    assert.deepEqual(points[1].getY(),100,"Coordinates should be equal.");

    assert.deepEqual(points[2].getX(),100,"Coordinates should be equal.");
    assert.deepEqual(points[2].getY(),150,"Coordinates should be equal.");

    assert.deepEqual(points[3].getX(),150,"Coordinates should be equal.");
    assert.deepEqual(points[3].getY(),150,"Coordinates should be equal.");

});
