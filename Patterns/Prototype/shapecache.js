/**
 * 
 */
function ShapeCache(){
	this.cachedShape = new Map();
	
	this.loadCache();
}
	
ShapeCache.prototype.getShape = function(shapeId){
	return this.cachedShape.get(shapeId);
}	

ShapeCache.prototype.loadCache = function(){
	
	var circle = new Circle();
	var rectangle = new Rectangle();
	var triangle = new Triangle();

	this.cachedShape.set('circle', circle);
	this.cachedShape.set('rectangle', rectangle);
	this.cachedShape.set('triangle', triangle);
}
