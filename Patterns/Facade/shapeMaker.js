/**
 * 
 */
function ShapeMaker(){
	alert("Shape maker");
	
	this.circle = new Circle("Circle");
	
	this.circle.setX(50);
	this.circle.setY(50);
	this.circle.setRadius(10);
	
	this.rectangle = new Rectangle("Rectangle");
	this.square = new Square("Square");
}

ShapeMaker.prototype.drawCircle = function(){
	this.circle.draw();
}

ShapeMaker.prototype.drawRectangle = function(){
	this.rectangle.draw();
}

ShapeMaker.prototype.drawSquare = function(){
	this.square.draw();
}