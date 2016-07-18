/**
 * This file contains scripts that are used in module 2 examples
 */

function showResult(){
	
	var ADMIN = "Admin";
	var name = "John";
	var result = ADMIN + " " + name;
	
	alert( 'The result is: ' + result );
}

function askName(){
	var ENTER_YOUR_NAME = "Enter your name:";
	var name = prompt(ENTER_YOUR_NAME,"");
	showName(name);
}

function showName(name){
	alert(name);
}

function calculateBalance(){
	var i = 0;
	var N = 100;
	while (i < N){
		i += 10;
	}
	return i;
}

var discount = function(){
	return 10;
}