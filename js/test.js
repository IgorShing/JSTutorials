/**
 * 
 */
"use strict";

function adminInfo(){
	
	var message = "The current admin name is: ";
	var name = "Peter";
	var admin = { name: "" };
	
	admin.name = name;
	
	alert(message + admin.name);
	alert(typeof admin);
}

function compareValues(){
	alert();
}

function showMessageWindows(){
	var years = prompt('Сколько вам лет?', 100);
	alert('Вам ' + years + ' лет!');
	
	var isAdmin = confirm("Вы - администратор?");
	alert( isAdmin );
}

$(document).ready(function() {
	
	$( "#testButton" ).click(function() {
		compareValues();
		});
	
	testConfirm
	
	$( "#testConfirm" ).click(function() {
		showMessageWindows()();
		});
	
});

