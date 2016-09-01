QUnit.module("Tests for Kamada Kawai Layout Configuration")

QUnit.test( "Checks the default configuration", function( assert ) {
    var expectedAcuracy = 1e-15;
    var expectedMaxIterations = 10000;
    var expectedMinEdgeNodesDistance = 1;
    var expectedMinNodesDistance = 1;
    var expectedDisconnectedFactor = 5.0;
    var expectedLengthFactor = 0.7;
    var expectedDesiredEdgeLength = 1;
    var expectedSpringStiffness = 1;

    var config = new KamadaKawaiLayoutConfig();

    var actualAcuracy = config.getAcuracy();
    var actualMaxIterations = config.getMaxIterations();
    var actualMinEdgeNodesDistance = config.getMinEdgeNodesDistance();
    var actualMinNodesDistance = config.getMinEdgeNodesDistance();
    var actualDisconnectedFactor = config.getDisconnectedFactor();
    var actualLengthFactor = config.getLengthFactor();
    var actualDesiredEdgeLength = config.getDesiredEdgeLength();
    var actualSpringStiffness = config.getSpringStiffness();

    assert.deepEqual(actualAcuracy, expectedAcuracy, "Acuracies should be equal." );
    assert.deepEqual(expectedMaxIterations, actualMaxIterations, "MaxIterations should be equal." );
    assert.deepEqual(expectedMinEdgeNodesDistance, actualMinEdgeNodesDistance, "Min Edge Nodes Distances should be equal." );
    assert.deepEqual(expectedMinNodesDistance, actualMinNodesDistance, "Expected Min Nodes Distances should be equal." );
    assert.deepEqual(expectedDisconnectedFactor, actualDisconnectedFactor, "Expected Disconnected Factors should be equal." );
    assert.deepEqual(expectedLengthFactor, actualLengthFactor, "Expected Length Factors should be equal." );
    assert.deepEqual(expectedDesiredEdgeLength, actualDesiredEdgeLength, "Expected Desired Edge Lengths should be equal." );
    assert.deepEqual(expectedSpringStiffness, actualSpringStiffness, "Expected Spring Stiffnesses should be equal." );
});

QUnit.test( "Checks the setting a new configuration", function( assert ) {
    var expectedAcuracy = 1e-15;
    var expectedMaxIterations = 10000;
    var expectedMinEdgeNodesDistance = 1;
    var expectedMinNodesDistance = 1;
    var expectedDisconnectedFactor = 5.0;
    var expectedLengthFactor = 0.7;
    var expectedDesiredEdgeLength = 1;
    var expectedSpringStiffness = 1;

    var config = new KamadaKawaiLayoutConfig();

    config.setAcuracy(expectedAcuracy);
    config.setMaxIterations(expectedMaxIterations);
    config.setMinEdgeNodesDistance(expectedMinEdgeNodesDistance);
    config.setMinNodesDistance(expectedMinNodesDistance);
    config.setDisconnectedFactor(expectedDisconnectedFactor);
    config.setLengthFactor(expectedLengthFactor);
    config.setDesiredEdgeLength(expectedDesiredEdgeLength);
    config.setSpringStiffness(expectedSpringStiffness);

    var actualAcuracy = config.getAcuracy();
    var actualMaxIterations = config.getMaxIterations();
    var actualMinEdgeNodesDistance = config.getMinEdgeNodesDistance();
    var actualMinNodesDistance = config.getMinEdgeNodesDistance();
    var actualDisconnectedFactor = config.getDisconnectedFactor();
    var actualLengthFactor = config.getLengthFactor();
    var actualDesiredEdgeLength = config.getDesiredEdgeLength();
    var actualSpringStiffness = config.getSpringStiffness();

    assert.deepEqual(actualAcuracy, expectedAcuracy, "Acuracies should be equal." );
    assert.deepEqual(expectedMaxIterations, actualMaxIterations, "MaxIterations should be equal." );
    assert.deepEqual(expectedMinEdgeNodesDistance, actualMinEdgeNodesDistance, "Min Edge Nodes Distances should be equal." );
    assert.deepEqual(expectedMinNodesDistance, actualMinNodesDistance, "Expected Min Nodes Distances should be equal." );
    assert.deepEqual(expectedDisconnectedFactor, actualDisconnectedFactor, "Expected Disconnected Factors should be equal." );
    assert.deepEqual(expectedLengthFactor, actualLengthFactor, "Expected Length Factors should be equal." );
    assert.deepEqual(expectedDesiredEdgeLength, actualDesiredEdgeLength, "Expected Desired Edge Lengths should be equal." );
    assert.deepEqual(expectedSpringStiffness, actualSpringStiffness, "Expected Spring Stiffnesses should be equal." );
});