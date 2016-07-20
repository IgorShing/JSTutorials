/**
 * 
 */
function Square(name){
	Shape.apply(this, arguments);
}

// Create inheritance
Square.prototype = Object.create(Shape.prototype);
 
// Save the constructor
Square.prototype.constructor = Square;

// Methods
Square.prototype.draw = function(){
	var DRAW_MESSAGE = "The square name: " + this.name;
	alert(DRAW_MESSAGE);
};