/**
 * The Fridge.
 */
function Fridge(){
	
	Machine.apply(this, arguments);
	
	// The food in the fridge.
	var food = [];
	
	// Adds a new item to the food element.
	this.addFood = function(newItem){

		// Check parameters
		if (newItem === undefined || newItem == null){
			var message = "Error. The food item is not defined.";
			throw new Error(message);
		}
		 
		food.push(newItem);
	}
	
	// Show the list of all food items.
	this.showContent = function(){
		var message = "";
		
		for (var i =0; i < food.length; i++){
			
			// Exclude the comma after the last element.
			if (i != food.length - 1){
				message += food[i] + ", " ;
			} else {
				message +=food[i];
			}
			
		}
		alert(message);
	}
}