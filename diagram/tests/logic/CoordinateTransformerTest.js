QUnit.module("Tests for Coordinate Transformer")

QUnit.test( "Fit point to the area with a zero origin", function( assert ) {

    var width = 400;
    var height = 200;

    // Cartesian coordinates
    var pointsInitial = [
        new Point2D(-width/2, height/2),
        new Point2D(0, height/2),
        new Point2D(width/2, height/2),

        new Point2D(-width/2, 0),
        new Point2D(0, 0),
        new Point2D(width/2, 0),

        new Point2D(-width/2, -height/2),
        new Point2D(0, -height/2),
        new Point2D(width/2, -height/2)
    ];

    // Screen coordinates
    var pointsExpected = [
        new Point2D(0, 0),
        new Point2D(width/2, 0),
        new Point2D(width, 0),

        new Point2D(0, height/2),
        new Point2D(width/2, height/2),
        new Point2D(width, height/2),

        new Point2D(0, height),
        new Point2D(width/2, height),
        new Point2D(width, height)
    ];

    var screenArea = new ScreenRectangleArea(new Point2D(0.0, 0.0), width, height);
    CoordinateTransformer.transformToScreenCoordinates(screenArea, pointsInitial);

    for (var i =0; i < pointsExpected.length; i++){
        assert.deepEqual(pointsInitial[i].getX(), pointsExpected[i].getX() ,
                         "Point " + i + ". Coordinate X should be equal to " + pointsExpected[i].getX());
        assert.deepEqual(pointsInitial[i].getY(), pointsExpected[i].getY() , "Coordinate Y should be equal.");
    }
});

QUnit.test( "Fit point to the area with a non-zero origin", function( assert ) {

    var width = 800;
    var height = 600;

    // Cartesian coordinates
    var pointsInitial = [
        new Point2D(250, 200),
        new Point2D(200, 100),
        new Point2D(100, 100),

        new Point2D(50, 200),
        new Point2D(90, 300),
        new Point2D(180, 300)
    ];

    // Screen coordinates
    var pointsExpected = [
        new Point2D(770, 300),
        new Point2D(585, 570),
        new Point2D(215, 570),

        new Point2D(30, 300),
        new Point2D(178, 30),
        new Point2D(511, 30)
    ];

    var marginX = 30;
    var marginY = 30;

    var screenArea = new ScreenRectangleArea(new Point2D(marginX, marginY), width - 2*marginX, height - 2* marginY);
    CoordinateTransformer.transformToScreenCoordinates(screenArea, pointsInitial);

    for (var i =0; i < pointsExpected.length; i++){
        assert.deepEqual(pointsInitial[i].getX(), pointsExpected[i].getX() ,
            "Point " + i + ". Coordinate X should be equal to " + pointsExpected[i].getX());
        assert.deepEqual(pointsInitial[i].getY(), pointsExpected[i].getY() , "Coordinate Y should be equal.");
    }
});
