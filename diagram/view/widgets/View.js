/**
 * 
 */

function View(){
	this.name;
}

View.prototype.getName = function(){
	return this.name;
}

View.prototype.setName = function(name){
	
	if (name != null || name != undefined){
		this.name = name;
	} else {
		throw new SyntaxError("Ошибка в данных");
	}
}

