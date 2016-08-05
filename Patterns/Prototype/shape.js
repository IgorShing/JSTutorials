/**
 * 
 */

function Shape(){
	this.name;
	var id;
	var _type;
}

// abstract method
Shape.prototype.draw = function(){
	
}

// abstract method
Shape.prototype.clone = function(){
	
}

Shape.prototype.getName = function(){
	return this.name;
}

Shape.prototype.setName = function(name){
	
	if (name != null || name != undefined){
		this.name = name;
	} else {
		throw new SyntaxError("Ошибка в данных");
	}
}

