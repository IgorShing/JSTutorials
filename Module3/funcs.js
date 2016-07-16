/**
 * The functionality to be tested.
 */
    function pow(x, n) {
      var result = 1;
      
      for (var i = 0; i < n; i++ ){
    	result *=x;  
      }
      return result;
    }