QUnit.module("Tests for Data Extractor")

 var dataJson;

QUnit.begin(function(){
    dataJson = 	'{"nodeKeyProperty": "id",'+
        '"nodeDataArray": ['+
        '{ "id": 0, "x": "250", "y": "200", "text": "A" },'+
        '{ "id": 1, "x": "200", "y": "100", "text": "B" },'+
        '{ "id": 2, "x": "100", "y": "100", "text": "C" },'+
        '{ "id": 3, "x": "50", "y": "200", "text": "D" },'+
        '{ "id": 4, "x": "90", "y": "300","text": "E" },'+
        '{ "id": 5, "x": "180", "y": "300", "text": "F" }'+
        '],'+
        '"linkDataArray": ['+
        '{ "from": 0, "to": 0, "text": "", "curviness": -20 },'+
        '{ "from": 0, "to": 1, "text": "", "curviness": 20 },'+
        '{ "from": 1, "to": 0, "text": "", "curviness": 20 },'+
        '{ "from": 1, "to": 1, "text": "", "curviness": -20 },'+
        '{ "from": 1, "to": 2, "text": "" },'+
        '{ "from": 1, "to": 4, "text": "" },'+
        '{ "from": 2, "to": 0, "text": "" },'+
        '{ "from": 2, "to": 3, "text": "" },'+
        '{ "from": 3, "to": 0, "text": "" },'+
        '{ "from": 3, "to": 3, "text": "", "curviness": 20 },'+
        '{ "from": 4, "to": 0, "text": "" },'+
        '{ "from": 4, "to": 4, "text": "" }'+
        ']'+
        '}';
});

QUnit.test( "Should extract nodes from data", function( assert ) {
    // Get data
    var data = JSON.parse(dataJson);
    var graph = GraphDataExtractor.getGraph(data);

    assert.deepEqual(graph.getNodes().length, 6, "There should be 6 elements in the nodes array");

    assert.deepEqual(+graph.getNodes()[3].getId(), 3, "Id's parameters should be equal");
    assert.deepEqual(+graph.getNodes()[3].getPoint().getX(), 50, "Node's parameters should be equal");
    assert.deepEqual(+graph.getNodes()[3].getPoint().getY(), 200, "Node's parameters should be equal");

    assert.deepEqual(+graph.getEdges().length, 12, "Edge's length should be equal to 12");
});

QUnit.test( "Should extract edges from data", function( assert ) {
    // Get data
    var data = JSON.parse(dataJson);
    var graph = GraphDataExtractor.getGraph(data);

    assert.deepEqual(graph.getEdges().length, 12, "Edge's length should be equal to 12");
    assert.deepEqual(+graph.getEdges()[5].getFromNode().getId(), 1, "Ids should be equal");
    assert.deepEqual(+graph.getEdges()[5].getToNode().getId(), 4, "Ids should be equal");
});


