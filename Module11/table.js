/**
 * 
 */

function TableProcessor(){
	this.name = "Table Processor";
}

TableProcessor.prototype.getTableLabels = function(){
	var tableId = "age-table";
	var table = document.getElementById(tableId);
	
	// Get the lables in the table
	var lables = table.getElementsByTagName("label");
	
	alert(lables.length);
}

TableProcessor.prototype.getAgeCell = function(){
	var result = document.getElementById('age-table').getElementsByTagName('td')[0];
	
	alert(result.innerHTML);
}