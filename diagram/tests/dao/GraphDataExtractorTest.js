QUnit.module("Tests for Data Extractor")

QUnit.test( "Should extract nodes from data", function( assert ) {

    var dataJson = 	'{"nodeKeyProperty": "id",'+
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

    // Get data
    var data = JSON.parse(dataJson);
    var nodes = DataExtractor.getNodes(data);

    assert.deepEqual(nodes.length, 6, "There should be 6 elements in the nodes array");

    assert.deepEqual(+nodes[3].getId(), 3, "Id's parameters should be equal");
    assert.deepEqual(+nodes[3].getPoint().getX(), 50, "Node's parameters should be equal");
    assert.deepEqual(+nodes[3].getPoint().getY(), 200, "Node's parameters should be equal");
});


