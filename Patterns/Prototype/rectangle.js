/**
 * 
 */
function Rectangle(){
// Initialize parent's fields.
	Shape.apply(this, arguments);
}

//Create inheritance
Rectangle.prototype = Object.create(Shape.prototype);
 
// Save the constructor
Rectangle.prototype.constructor = Rectangle;

// Draws a circle
Rectangle.prototype.draw = function(){
	alert("Rectangle");
}

Rectangle.prototype.clone = function(){
	// a cloned object
	return new Rectangle();
}