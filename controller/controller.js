/**
 * Controller for events.
 */

var DEMO_IS_NOT_AVAILABLE = "Demo is not available.";

function EventController(){
	
};

EventController.prototype.demonstrate = function(demo){
	if (demo != null || !(demo === undefined))
	{
		demo.demonstrate();
		// TODO Replace this alert with a call of the actual object
		alert("");
	} else {
		alert(DEMO_IS_NOT_AVAILABLE);
	}
	
}