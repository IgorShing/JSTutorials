/**
 * 
 */
function Rectangle(name){
	Shape.apply(this, arguments);
}

// Create inheritance
Rectangle.prototype = Object.create(Shape.prototype);
 
// Save the constructor
Rectangle.prototype.constructor = Rectangle;

// Methods
Rectangle.prototype.draw = function(){
	var DRAW_MESSAGE = "The rectangle name: " + this.name;
	alert(DRAW_MESSAGE);
};
