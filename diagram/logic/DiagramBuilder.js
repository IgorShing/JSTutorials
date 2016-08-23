function DiagramBuilder(){

}

DiagramBuilder.buildDiagram = function(canvasId,dataSetType){

    // Get data
    var dataProvider = new DataProvider();
    var dataJson = dataProvider.getData(dataSetType);
    var data = JSON.parse(dataJson);

    clearCanvas(canvasId);

    // Draw a new graph
    var graph = GraphDataExtractor.getGraph(data);
    var graphView = new GraphView(graph);
    graphView.draw(canvasId);
}

function clearCanvas(canvasId){
    // Clear canvas
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}