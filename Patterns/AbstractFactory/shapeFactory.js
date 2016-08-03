/**
 * 
 */

var SHAPE_TYPE = {
	CIRCLE : {value : "circle"},
	RECTANGLE : {value : "rectangle"}
}

function ShapeFactory(){
	AbstractFactory.apply(this, arguments);
}

ShapeFactory.prototype.getShape = function(shapeType){
	if (shapeType == null){
		return null;
	}
	
	if (shapeType === SHAPE_TYPE.CIRCLE){
		return new Circle();
	}
}