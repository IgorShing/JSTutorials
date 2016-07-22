/**
 * 
 */
function Circle(name){
// Initialize parent's fields.
	Shape.apply(this, arguments);
	
	this.x;
	this.y;
	this.radius;
	
}

// Create inheritance
Circle.prototype = Object.create(Shape.prototype);
 
// Save the constructor
Circle.prototype.constructor = Circle;

// Methods
Circle.prototype.getX = function(){
	return this.x;
}

Circle.prototype.setX = function(x){
	this.x = x;
}

Circle.prototype.getY = function(){
	return this.y;
}

Circle.prototype.setY = function(y){
	this.y = y;
}

Circle.prototype.getRadius = function(){
	return this.radius;
}

Circle.prototype.setRadius = function(radius){
	this.radius = radius;
}

Circle.prototype.draw = function(){
	var canvasId = "#canvas";
	
	var circle = d3.select(canvasId).append("circle")
    .attr("r", this.radius)
    .attr("cx", this.x)
    .attr("cy", this.y)
    
    .attr("style", "fill:red; stroke:black; stroke-width:2");
};