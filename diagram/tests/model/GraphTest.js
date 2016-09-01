QUnit.module("Tests for Graph")

QUnit.test( "Should return the graph diameter", function( assert ) {

    var nodes = [
        new Node("1", new Point2D(2, 2), ""),
        new Node("2", new Point2D(5, 5), ""),
        new Node("3", new Point2D(-5, -5), ""),
        new Node("4", new Point2D(-10, 0), ""),
        new Node("5", new Point2D(10, 0), "")
    ];

    var graph = new Graph(nodes, null);

     var expectedDiameter = 20;
     var actualDiameter = graph.diameter();
     assert.deepEqual(actualDiameter, expectedDiameter, "Diameters should be equal." );
});

