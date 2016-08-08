/**
 * Created by Admin on 08.08.2016.
 */
function MainController(){

}

MainController.prototype.buildDiagram = function(canvasId, dataSetType){
    // Get data
    var dataProvider = new DataProvider();
    var dataJson = dataProvider.getData(dataSetType);
    var data = JSON.parse(dataJson);

    // Clear canvas
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a new graph
    var graphView = new GraphView(data);
    graphView.draw(canvasId);
}