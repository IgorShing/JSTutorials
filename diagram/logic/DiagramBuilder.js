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

    // Transform nodes coordinates to a points array
    // ...
    var nodes = graph.getNodes();
    var points = [];
    for (var i = 0; i < nodes.length; i++){
        points.push(nodes[i].getPoint());
    }

    // Layout nodes
    var layout = new GraphLayout(new RandomLayout(points));
    layout.apply();

    // Transform coordinates
    var marginX = 30;
    var marginY = 30;

    var canvas = document.getElementById(canvasId);
    var screenArea = new ScreenRectangleArea(new Point2D(marginX, marginY), canvas.width - 2*marginX, canvas.height - 2*marginY);
    CoordinateTransformer.transformToScreenCoordinates(screenArea, points);

    graphView.draw(canvasId);
}

function clearCanvas(canvasId){
    // Clear canvas
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}