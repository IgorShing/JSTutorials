/**
 * 
 */
function ShapeMaker(){
	alert("Shape maker");
	
	var circle = new Circle();
	var rectangle = new Rectangle();
	var square = new Square();
}

ShapeMaker.prototype.drawCircle = function(){
	circle.draw();
}

ShapeMaker.prototype.drawRectangle = function(){
	rectangle.draw();
}

ShapeMaker.prototype.drawSquare = function(){
	square.draw();
}