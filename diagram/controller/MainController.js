/**
 * Created by Admin on 08.08.2016.
 */
function MainController(){
	this.currentDataSet;
	this.currentLayout;
}

MainController.prototype.displayData = function(canvasId, dataSetType){
    DiagramBuilder.buildDiagram(canvasId, dataSetType);
}

MainController.prototype.formClickHandlers = function(canvasId){
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
	var self = this;
	
	$("#loadDataSet1").click(function() {
		var canvasId = "myCanvas";
		self.currentDataSet = DATA_SET_TYPE.DATA_SET_1;
		self.displayCurrentData(canvasId);
	});

	$("#loadDataSet2").click(function() {
		var canvasId = "myCanvas";
		self.currentDataSet = DATA_SET_TYPE.DATA_SET_2;
		self.displayCurrentData(canvasId);
	});

	$("#loadDataSet3").click(function() {
		var canvasId = "myCanvas";
		self.currentDataSet = DATA_SET_TYPE.DATA_SET_3;
		self.displayCurrentData(canvasId);
	});
	
	$("#loadDataSet4").click(function() {
		var canvasId = "myCanvas";
		self.currentDataSet = DATA_SET_TYPE.DATA_SET_4;
		self.displayCurrentData(canvasId);
	});
	
	$("#loadDataSet5").click(function() {
		var canvasId = "myCanvas";
		self.currentDataSet = DATA_SET_TYPE.DATA_SET_5;
		self.displayCurrentData(canvasId);
	});
	
	$("#loadDataSet6").click(function() {
		var canvasId = "myCanvas";
		self.currentDataSet = DATA_SET_TYPE.DATA_SET_6;
		self.displayCurrentData(canvasId);
	});
	
	// Layout handlers
	$("#linkCircleLayout").click(function() {
		var canvasId = "myCanvas";
		self.currentLayout = LAYOUT_TYPE.CIRCLE_LAYOUT;
		self.layoutCurrentData(canvasId);
	});

	$("#linkRandomLayout").click(function() {
		alert("Not implemented");
	});

	$("#linkKamadaKawaiLayout").click(function() {
		var canvasId = "myCanvas";
		self.currentLayout = LAYOUT_TYPE.KAMADA_KAWAI_LAYOUT;
		self.layoutCurrentData(canvasId);
	});
}

MainController.prototype.displayCurrentData = function(canvasId){
	var diagramBuilder = new DiagramBuilder();
	diagramBuilder.formGraphData(this.currentDataSet);
	diagramBuilder.displayData(canvasId);
}

MainController.prototype.layoutCurrentData = function(canvasId){
	var diagramBuilder = new DiagramBuilder();
	diagramBuilder.formGraphData(this.currentDataSet);
	diagramBuilder.buildDiagram(canvasId, this.currentLayout);
}

MainController.prototype.formMouseEvents = function(){
	/*// Get mouse position
    function writeMessage(canvas, message) {

    	  var posX = 10;
		  var posY = 700;

        var context = canvas.getContext('2d');
        context.clearRect(posX, posY, canvas.width, 50);
        context.font = '12pt Calibri';
        context.fillStyle = 'black';
        context.fillText(message, posX, posY);
      }
    
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: x = ' + mousePos.x + ', y = ' + mousePos.y + '';
        
        writeMessage(canvas, message);
      }, false);*/
}
