/**
 * The functionality to be tested.
 */
    function pow(x, n) {
    
    // Wrong arguments of the function
	if (n < 0 || !isInt(n)){
		return NaN;
	}
     var result = 1;
      
      for (var i = 0; i < n; i++ ){
    	result *=x;  
      }
      return result;
    }
    
    // Checks if the number is integer
    function isInt(n){
        return Number(n) === n && n % 1 === 0;
    }

    // Checks if number is float
    function isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }
    
/*    // Fibonachi number. Calculated using the Bine formula.
    function fibonachi(n){
    	phi = 0.5*(1 + Math.sqrt(5));
    	return Math.pow(phi, n)/Math.sqrt(5);
    }*/
    
    // Generates the Fibonachi number.
    function fib(n) {
    	  var a = 1,
    	    b = 0,
    	    x;
    	  for (i = 0; i < n; i++) {
    	    x = a + b;
    	    a = b
    	    b = x;
    	  }
    	  return b;
    }