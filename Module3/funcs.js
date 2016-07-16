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