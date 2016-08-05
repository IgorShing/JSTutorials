/**
 * 
 */
function Line(){
	
	
	
	// Initialize parent's fields.
	Shape.apply(this, arguments);
}

//Create inheritance
Line.prototype = Object.create(Shape.prototype);
 
// Save the constructor
Line.prototype.constructor = Line;

//Draws a line
Line.prototype.draw = function(canvasId){
	
	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.moveTo(100, 150);
	ctx.lineTo(450, 50);
	ctx.stroke();
}