function DiagramBuilder(){
	this.marginX = 20.0;
	this.marginY = 20.0;
	this.data;
}

DiagramBuilder.prototype.formGraphData = function(dataSetType){

    // Get data
    var dataProvider = new DataProvider();
    var dataJson = dataProvider.getData(dataSetType);
    this.data = JSON.parse(dataJson);
}

DiagramBuilder.prototype.displayData = function(canvasId){
	
    clearCanvas(canvasId);

    // Draw a new graph
    var graph = GraphDataExtractor.getGraph(this.data);
    var graphView = new GraphView(graph);

    // Transform nodes coordinates to a points array
    var nodes = graph.getNodes();
    var points = [];
    for (var i = 0; i < nodes.length; i++){
        points.push(nodes[i].getPoint());
    }

    var canvas = document.getElementById(canvasId);
    var screenArea = new ScreenRectangleArea(new Point2D(this.marginX, this.marginY), 
    		                                 canvas.width - 2 * this.marginX, canvas.height - 2 * this.marginY);
    CoordinateTransformer.transformToScreenCoordinates(screenArea, points);
    graphView.draw(canvasId);
}

DiagramBuilder.prototype.buildDiagram = function(canvasId, layoutType){
    clearCanvas(canvasId);

    // Draw a new graph
    var graph = GraphDataExtractor.getGraph(this.data);
    var graphView = new GraphView(graph);

    // Transform nodes coordinates to a points array
    var nodes = graph.getNodes();
    var points = [];
    for (var i = 0; i < nodes.length; i++){
        points.push(nodes[i].getPoint());
    }

    var canvas = document.getElementById(canvasId);
    var screenArea = new ScreenRectangleArea(new Point2D(this.marginX, this.marginY), 
                                             canvas.width - 2 * this.marginX, canvas.height - 2 * this.marginY);

    // Layout nodes
    var layoutFactory = new GraphLayoutFactory(screenArea, points);
    var layout = layoutFactory.getLayout(layoutType);
    layout.apply();

    CoordinateTransformer.transformToScreenCoordinates(screenArea, points);

    console.log(points);
    
    graphView.draw(canvasId);
}

function clearCanvas(canvasId){
    // Clear canvas
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}