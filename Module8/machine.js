/**
 * 
 */
function Machine() {
	
  var enabled = false;

  this.enable = function() {
    enabled = true;
  };

  this.disable = function() {
    enabled = false;
  };
  
  this.getStatus = function(){
	  return enabled;
  }
}