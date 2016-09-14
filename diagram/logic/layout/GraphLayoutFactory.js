/**
 * Creates the layout
 */

// Possible Graph layouts

var LAYOUT_TYPE = {
		CIRCLE_LAYOUT: {value : "circleLayout"},
		GRAVITY_LAYOUT: {value : "gravityLayout"},
	    KAMADA_KAWAI_LAYOUT: {value : "kamadaKawaiLayout"}
}

function GraphLayoutFactory(screenArea, graph){
	this.screenArea = screenArea;
	this.graph = graph;
}

GraphLayoutFactory.prototype.getLayout = function(layoutType){
    
	switch (layoutType) {
    case LAYOUT_TYPE.CIRCLE_LAYOUT:
    	// return new CircleLayout(this.screenArea, this.graph);
    	return null;
    	
    case LAYOUT_TYPE.GRAVITY_LAYOUT:
    	
    	// TODO Implement
    	return null;
    	
    case LAYOUT_TYPE.KAMADA_KAWAI_LAYOUT:
    	return new KamadaKawaiLayout(this.screenArea, this.graph);
    }
}
