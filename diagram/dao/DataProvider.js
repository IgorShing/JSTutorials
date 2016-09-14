/**
 * Simulates the data extraction from DB
 */

// Possible data sets
var DATA_SET_TYPE = {
		DATA_SET_1: {value : "DataSet1"},
		DATA_SET_2: {value : "DataSet2"},
	    DATA_SET_3: {value : "DataSet3"},
	    DATA_SET_4: {value : "DataSet4"},
	    DATA_SET_5: {value : "DataSet5"}
}

function DataProvider(){
}

// Get the data according to the dataId

DataProvider.prototype.getData = function(dataId){
	
	switch (dataId){

		case DATA_SET_TYPE.DATA_SET_1:
			return getDataSet_1();
		break;

		case DATA_SET_TYPE.DATA_SET_2:
			return getDataSet_2();
		break;

		case DATA_SET_TYPE.DATA_SET_3:
			return getDataSet_3();
		break;
		
		case DATA_SET_TYPE.DATA_SET_4:
			return getDataSet_4();
		break;
		
		case DATA_SET_TYPE.DATA_SET_5:
			return getDataSet_5();
		break;

		default:
			return "";
		break;
	}
}

function getDataSet_1(){
	return '{"nodeKeyProperty": "id",'+
	 '"nodeDataArray": ['+
	 '{ "id": 0, "x": "100", "y": "150", "text": "A" },'+
	 '{ "id": 1, "x": "200", "y": "150", "text": "B" },'+
	 '{ "id": 2, "x": "150", "y": "236,6025404","text": "C" }'+
	 '],'+
	 '"linkDataArray": ['+
	 '{ "from": 0, "to": 2, "text": ""},'+
	 '{ "from": 0, "to": 1, "text": ""},'+
	 '{ "from": 1, "to": 2, "text": ""},'+
	 '{ "from": 1, "to": 0, "text": ""},'+
	 '{ "from": 2, "to": 0, "text": ""},'+
	 '{ "from": 2, "to": 1, "text": ""}'+
	 ']}';
}

function getDataSet_2(){
	return '{"nodeKeyProperty": "id",'+
	 '"nodeDataArray": ['+
	 '{ "id": 0, "x": "100", "y": "50", "text": "A" },'+
	 '{ "id": 1, "x": "200", "y": "50", "text": "B" },'+
	 '{ "id": 2, "x": "200", "y": "150", "text": "C" },'+
	 '{ "id": 3, "x": "100", "y": "150","text": "D" }'+
	 '],'+
	 '"linkDataArray": ['+
	 '{ "from": 0, "to": 3, "text": ""},'+
	 '{ "from": 0, "to": 1, "text": ""},'+
	 '{ "from": 1, "to": 2, "text": ""},'+
	 '{ "from": 1, "to": 0, "text": ""},'+
	 '{ "from": 2, "to": 3, "text": ""},'+
	 '{ "from": 2, "to": 1, "text": ""},'+
	 '{ "from": 3, "to": 0, "text": ""},'+
	 '{ "from": 3, "to": 2, "text": ""}'+
	 ']}';
}

function getDataSet_3(){
	return '{"nodeKeyProperty": "id",'+
		'"nodeDataArray": ['+
		'{ "id": 0, "x": "25", "y": "20", "text": "A" },'+
		'{ "id": 1, "x": "20", "y": "10", "text": "B" },'+
		'{ "id": 2, "x": "10", "y": "10", "text": "C" },'+
		'{ "id": 3, "x": "5", "y": "20", "text": "D" },'+
		'{ "id": 4, "x": "9", "y": "30","text": "E" },'+
		'{ "id": 5, "x": "18", "y": "30", "text": "F" }'+
		'],'+
		'"linkDataArray": ['+
		'{ "from": 1, "to": 3, "text": "", "curviness": -20 },'+
		'{ "from": 0, "to": 1, "text": "", "curviness": 20 },'+
		'{ "from": 4, "to": 1, "text": "", "curviness": 20 },'+
		'{ "from": 2, "to": 5, "text": "", "curviness": -20 },'+
		'{ "from": 2, "to": 3, "text": "" },'+
		'{ "from": 4, "to": 0, "text": "" },'+
		'{ "from": 3, "to": 5, "text": "" }'+
		']}';
}

function getDataSet_4(){
	return '{"nodeKeyProperty": "id",'+
	 '"nodeDataArray": ['+
	 '{ "id": 0, "x": "220", "y": "80", "text": "A" },'+
	 '{ "id": 1, "x": "200", "y": "120", "text": "B" },'+
	 '{ "id": 2, "x": "150", "y": "150", "text": "C" },'+
	 '{ "id": 3, "x": "100", "y": "150", "text": "D" },'+
	 '{ "id": 4, "x": "60", "y": "120","text": "E" },'+
	 '{ "id": 5, "x": "40", "y": "80", "text": "F" },'+
	 '{ "id": 6, "x": "80", "y": "40", "text": "G" },'+
	 '{ "id": 7, "x": "100", "y": "20", "text": "H" },'+
	 '{ "id": 8, "x": "150", "y": "20", "text": "I" },'+
	 '{ "id": 9, "x": "200", "y": "40","text": "J" }'+
	 '],'+
	 '"linkDataArray": ['+
	 '{ "from": 0, "to": 4, "text": "", "curviness": -20 },'+
	 '{ "from": 0, "to": 5, "text": "", "curviness": 20 },'+
	 '{ "from": 1, "to": 2, "text": "", "curviness": 20 },'+
	 '{ "from": 1, "to": 0, "text": "", "curviness": -20 },'+
	 '{ "from": 1, "to": 6, "text": "" },'+
	 '{ "from": 2, "to": 3, "text": "" },'+
	 '{ "from": 2, "to": 1, "text": "" },'+
	 '{ "from": 2, "to": 8, "text": "" },'+
	 '{ "from": 2, "to": 9, "text": "" },'+
	 '{ "from": 3, "to": 2, "text": "" },'+
	 '{ "from": 3, "to": 4, "text": "" },'+
	 '{ "from": 3, "to": 7, "text": "" },'+
	 '{ "from": 4, "to": 3, "text": "" },'+
	 '{ "from": 4, "to": 0, "text": "" },'+
	 '{ "from": 4, "to": 7, "text": "" },'+
	 '{ "from": 5, "to": 0, "text": "" },'+
	 '{ "from": 5, "to": 6, "text": "" },'+
	 '{ "from": 6, "to": 5, "text": "" },'+
	 '{ "from": 6, "to": 1, "text": "" },'+
	 '{ "from": 7, "to": 3, "text": "" },'+
	 '{ "from": 7, "to": 4, "text": "" },'+
	 '{ "from": 8, "to": 2, "text": "" },'+
	 '{ "from": 8, "to": 9, "text": "" },'+
	 '{ "from": 9, "to": 8, "text": "" },'+
	 '{ "from": 9, "to": 2, "text": "" }'+
	 ']}';
}

function getDataSet_5(){
	return '{"nodeKeyProperty": "id",'+
	'"nodeDataArray": ['+
	'{ "id": 0, "x": "25", "y": "20", "text": "A" },'+
	'{ "id": 1, "x": "20", "y": "10", "text": "B" },'+
	'{ "id": 2, "x": "10", "y": "10", "text": "C" },'+
	'{ "id": 3, "x": "5", "y": "20", "text": "D" },'+
	'{ "id": 4, "x": "9", "y": "30","text": "E" },'+
	'{ "id": 5, "x": "18", "y": "30", "text": "F" },'+
	'{ "id": 6, "x": "15", "y": "10", "text": "G" },'+
	'{ "id": 7, "x": "30", "y": "16", "text": "H" },'+
	'{ "id": 8, "x": "8", "y": "23", "text": "I" },'+
	'{ "id": 9, "x": "19", "y": "35","text": "K" },'+
	'{ "id": 10, "x": "19", "y": "35","text": "L" },'+
	'{ "id": 11, "x": "19", "y": "35","text": "M" },'+
	'{ "id": 12, "x": "19", "y": "35","text": "N" },'+
	'{ "id": 13, "x": "19", "y": "35","text": "O" },'+
	'{ "id": 14, "x": "19", "y": "35","text": "P" }'+
	'],'+
	'"linkDataArray": ['+
	'{ "from": 1, "to": 3, "text": "", "curviness": -20 },'+
	'{ "from": 0, "to": 1, "text": "", "curviness": 20 },'+
	'{ "from": 4, "to": 1, "text": "", "curviness": 20 },'+
	'{ "from": 2, "to": 5, "text": "", "curviness": -20 },'+
	'{ "from": 2, "to": 3, "text": "" },'+
	'{ "from": 4, "to": 0, "text": "" },'+
	'{ "from": 3, "to": 5, "text": "" }'+
	']}';
}


