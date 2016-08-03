/**
 * 
 */

var FACTORY_TYPE = {
		SHAPE_FACTORY: {value : "ShapeFactory"},
		COLOR_FACTORY: {value : "ColorFactory"}
}

function FactoryProducer(){
}

FactoryProducer.prototype.getFactory = function(factoryType){
	if (factoryType == null){
		return null;
	}
	
	if (factoryType === FACTORY_TYPE.SHAPE_FACTORY){
		return new ShapeFactory();		
	}
}