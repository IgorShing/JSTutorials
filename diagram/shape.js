/**
 * 
 */

function Shape(){
	this.name;
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

