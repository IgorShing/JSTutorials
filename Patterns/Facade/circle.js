/**
 * 
 */
function Circle(name){
	Shape.apply(this, arguments);
}

// Create inheritance
Circle.prototype = Object.create(Shape.prototype);
 
// Save the constructor
Circle.prototype.constructor = Circle;

// Methods
Circle.prototype.draw = function(){
	var DRAW_MESSAGE = "The circle name: " + this.name;
	alert(DRAW_MESSAGE);
};