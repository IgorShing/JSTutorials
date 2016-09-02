QUnit.module("Tests for Kamada Kawai Layout")

QUnit.test( "Checks find deltas routine", function( assert ) {
    var A = 2;
    var B = 4;
    var C = 1;
    var D = 6;
    var E = 3;

    var cartesianRectangleArea = new CartesianRectangleArea(new Point2D(0.0), 500, 500);
    var points = [ new Point2D(41, 78),
                   new Point2D(56, 47),
                   new Point2D(65, 84)
                 ];

    var actualResult = (new KamadaKawaiLayout(cartesianRectangleArea, points,
                        new KamadaKawaiLayoutConfig())).findDeltas(A, B, C, D, E);

    var x = actualResult[0];
    var y = actualResult[1];

    assert.deepEqual(D*C*x + D*D*y, -A*D, "Results should be equal." );
    assert.deepEqual(D*C*x + C*E*y, -B*C, "Results should be equal." );
});

QUnit.test( "Checks length matrix", function( assert ) {
    assert.deepEqual(0, 0, "Results should be equal." );
});


QUnit.test( "Distance matrix test", function( assert ) {
    var cartesianRectangleArea = new CartesianRectangleArea(new Point2D(0.0), 500, 500);
    var points = [
        new Point2D(41, 78),
        new Point2D(56, 47),
        new Point2D(65, 84)
    ];

    var config = new KamadaKawaiLayoutConfig();
    var layout = new KamadaKawaiLayout(cartesianRectangleArea, points, config);

    var minEdgeNodesDistance = config.getMinEdgeNodesDistance();

    var expectedResult = math.eval('[[0, ' + minEdgeNodesDistance + ', ' + minEdgeNodesDistance + '],' +
                                    '['+ minEdgeNodesDistance + ', 0, ' + minEdgeNodesDistance + '],' +
                                    '[' + minEdgeNodesDistance + ', ' + minEdgeNodesDistance + ', 0]]');

    var actualResult = layout.formDistanceMatrix(points);
    assert.deepEqual(actualResult, expectedResult, "Results should be equal." );
});

/*QUnit.test( "Length matrix test", function( assert ) {
    var cartesianRectangleArea = new CartesianRectangleArea(new Point2D(0.0), 500, 500);
    var points = [
        new Point2D(41, 78),
        new Point2D(56, 47),
        new Point2D(65, 84)
    ];

    var config = new KamadaKawaiLayoutConfig();
    var layout = new KamadaKawaiLayout(cartesianRectangleArea, points, config);

    var width = this.cartesianRectangleArea.getWidth();
    var height = this.cartesianRectangleArea.getHeight();
    var length_factor = this.configuration.getLengthFactor();

    var desiredEdgeLength = Math.min(width, height) / this.graphDiameter * length_factor;

    var elemValue = config.getMinEdgeNodesDistance() * config;

    var expectedResult = math.eval('[[0, ' + desiredEdgeLength + ', ' + desiredEdgeLength + '],' +
        '['+ desiredEdgeLength + ', 0, ' + desiredEdgeLength + '],' +
        '[' + desiredEdgeLength + ', ' + desiredEdgeLength + ', 0]]');

    var actualResult = layout.formDistanceMatrix(points);
    assert.deepEqual(actualResult, expectedResult, "Results should be equal." );
});*/


// TODO Change this test
QUnit.test( "Test Partial X Derivative", function( assert ) {
    var cartesianRectangleArea = new CartesianRectangleArea(new Point2D(0.0), 500, 500);
    var points = [
        new Point2D(41, 78),
        new Point2D(56, 47),
        new Point2D(65, 84)
    ];

    var layout = new KamadaKawaiLayout(cartesianRectangleArea, points, new KamadaKawaiLayoutConfig());

    var actualResult = layout.partialDerivativeX(1, points);
    assert.deepEqual(0, 0, "Results should be equal." );
});


QUnit.test( "Should return the graph diameter", function( assert ) {

    var cartesianRectangleArea = new CartesianRectangleArea(new Point2D(0.0), 500, 500);

    var points = [
        new Point2D(2, 2),
        new Point2D(5, 5),
        new Point2D(-5, -5),
        new Point2D(-10, 0),
        new Point2D(10, 0)
    ];

    var layout = new KamadaKawaiLayout(cartesianRectangleArea, points, new KamadaKawaiLayoutConfig());

    var expectedDiameter = 20;
    var actualDiameter = layout.graphDiameter();
    assert.deepEqual(actualDiameter, expectedDiameter, "Diameters should be equal." );
});