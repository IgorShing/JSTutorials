/**
 * 
 */
function Circle(){
// Initialize parent's fields.
	Shape.apply(this, arguments);
	
	this.centerX;
	this.centerY;
	this.radius;
	this.color;
	
	this.setDefaultValues();
}

function Circle(centerX, centerY, radius, color){
	
	Shape.apply(this, arguments);
	this.initialize(centerX, centerY, radius, color);
}

//Create inheritance
Circle.prototype = Object.create(Shape.prototype);
 
// Save the constructor
Circle.prototype.constructor = Circle;

Circle.prototype.setDefaultValues = function(){
	this.centerX = 0;
	this.centerY = 0;
	this.radius = 10;
	this.color = "red";
}

Circle.prototype.initialize = function(centerX, centerY, radius, color){
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.color = color;
}

// Draws a circle
Circle.prototype.draw = function(canvasId){
	
	var canvas = document.getElementById(canvasId);
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	
	ctx.arc(this.centerX,this.centerY,this.radius,0,2*Math.PI);
	ctx.stroke();
	
	// Fill with the color
	ctx.fillStyle = this.color;
	ctx.fill();
}