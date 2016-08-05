/**
 * 
 */
function Triangle(){
// Initialize parent's fields.
	Shape.apply(this, arguments);
}

//Create inheritance
Triangle.prototype = Object.create(Shape.prototype);
 
// Save the constructor
Triangle.prototype.constructor = Triangle;

// Draws a circle
Triangle.prototype.draw = function(){
	alert("Triangle");
}

Triangle.prototype.clone = function(){
	// a cloned object
	return new Triangle();
}