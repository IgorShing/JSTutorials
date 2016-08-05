/**
 * 
 */
function Circle(){
// Initialize parent's fields.
	Shape.apply(this, arguments);
}

//Create inheritance
Circle.prototype = Object.create(Shape.prototype);
 
// Save the constructor
Circle.prototype.constructor = Circle;

// Draws a circle
Circle.prototype.draw = function(){
	alert("Circle");
}

Circle.prototype.clone = function(){
	// a cloned object
	return new Circle();
}