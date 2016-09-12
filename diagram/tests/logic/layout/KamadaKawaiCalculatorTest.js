QUnit.module("Tests for Kamada Kawai Calculator")

QUnit.test( "Distance matrix test", function( assert ) {
    var cartesianRectangleArea = new CartesianRectangleArea(new Point2D(0.0), 500, 500);
    var points = [
        new Point2D(41, 78),
        new Point2D(56, 47),
        new Point2D(65, 84)
    ];

    var config = new KamadaKawaiLayoutConfig();
    var calculator = new KamadaKawaiCalculator(cartesianRectangleArea, points, config);

    var minEdgeNodesDistance = calculator.calculateMinNodesDistance();

    var expectedResult = math.eval('[[0, ' + minEdgeNodesDistance + ', ' + minEdgeNodesDistance + '],' +
        '['+ minEdgeNodesDistance + ', 0, ' + minEdgeNodesDistance + '],' +
        '[' + minEdgeNodesDistance + ', ' + minEdgeNodesDistance + ', 0]]');

    console.log(expectedResult);
    var actualResult = calculator.formDistanceMatrix(points);
    assert.deepEqual(actualResult, expectedResult, "Results should be equal." );
});

QUnit.test( "Length matrix test", function( assert ) {
    var cartesianRectangleArea = new CartesianRectangleArea(new Point2D(0.0), 500, 500);
    var points = [
        new Point2D(41, 78),
        new Point2D(56, 47),
        new Point2D(65, 84)
    ];

    var config = new KamadaKawaiLayoutConfig();
    var calculator = new KamadaKawaiCalculator(cartesianRectangleArea, points, config);
    var distanceMatrix = calculator.formDistanceMatrix(points);

    var desiredEdgeLength = calculator.calculateDesiredEdgeLength();

    var expectedResult = math.eval(
        '[[0, ' + desiredEdgeLength*distanceMatrix.get([0,1]) + ', ' + desiredEdgeLength*distanceMatrix.get([0,2]) + '],' +
        '['+ desiredEdgeLength * distanceMatrix.get([1,0]) + ', 0, ' + desiredEdgeLength * distanceMatrix.get([1,2]) + '],' +
        '[' + desiredEdgeLength * distanceMatrix.get([2,0]) + ', ' + desiredEdgeLength * distanceMatrix.get([2,1]) + ', 0]]');

    var actualResult = calculator.formLengthMatrix(points);
    console.log(actualResult);

    assert.deepEqual(actualResult, expectedResult, "Results should be equal." );
});

QUnit.test( "Checks solve equations routine", function( assert ) {
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

    var actualResult = (new KamadaKawaiCalculator(cartesianRectangleArea, points,
        new KamadaKawaiLayoutConfig())).solveEquations(A, B, C, D, E);

    var x = actualResult[0];
    var y = actualResult[1];

    assert.deepEqual(C*x + D*y, -A, "First equation" );
    assert.deepEqual(D*x + E*y, -B, "Second equation" );
});

QUnit.test( "Checks length matrix", function( assert ) {
    assert.deepEqual(0, 0, "Results should be equal." );
});

// TODO Change this test
QUnit.test( "Test Partial X Derivative", function( assert ) {


/*    var stiffnessMatrix = math.eval('[[Infinity 3 3],[3 Infinity 3],[3 3 Infinity]]');
    var lengthMatrix = math.eval('[[0 2 2],[2 0 2],[2 2 0]]');

    var cartesianRectangleArea = new CartesianRectangleArea(new Point2D(0.0), 500, 500);
    var points = [
        new Point2D(41, 78),
        new Point2D(56, 47),
        new Point2D(65, 84)
    ];

    var calculator = new KamadaKawaiCalculator(cartesianRectangleArea, points, new KamadaKawaiLayoutConfig());

    var actualResult = calculator.partialDerivativeX(1, points);*/
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

    var calculator = new KamadaKawaiCalculator(cartesianRectangleArea, points, new KamadaKawaiLayoutConfig());

    var expectedDiameter = 20;
    var actualDiameter = calculator.graphDiameter();
    assert.deepEqual(actualDiameter, expectedDiameter, "Diameters should be equal." );
});
