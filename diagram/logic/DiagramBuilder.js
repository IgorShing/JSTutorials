function DiagramBuilder(){

}

DiagramBuilder.buildDiagram = function(canvasId,dataSetType){
    // Get data
    var dataProvider = new DataProvider();
    var dataJson = dataProvider.getData(dataSetType);
    var data = JSON.parse(dataJson);

    // Create nodes
    var nodes = GraphDataExtractor.getNodes(data);

    var graph = new Graph(nodes);

    // Clear canvas
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a new graph
    var graphView = new GraphView(graph);
    graphView.draw(canvasId);
}