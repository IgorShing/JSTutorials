/**
 * Simulates the data extraction from DB
 */

// Possible data sets
var DATA_SET_TYPE = {
		DATA_SET_1: {value : "DataSet1"},
		DATA_SET_2: {value : "DataSet2"},
	    DATA_SET_3: {value : "DataSet3"}
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

		default:
			return "";
		break;
	}
}

function getDataSet_1(){
	return '{"nodes": [{"id" : "1", "x" : "100", "y" : "100", "neighborsIds" : ["2", "3"]},'+
		              '{"id" : "2", "x" : "200", "y" : "120", "neighborsIds" : ["1", "3"]},'+
		              '{"id" : "3", "x" : "200", "y" : "500", "neighborsIds" : ["1", "2"]},'+
		              '{"id" : "4", "x" : "390", "y" : "50", "neighborsIds" : ["5", "6"]},'+
		              '{"id" : "5", "x" : "270", "y" : "270", "neighborsIds" : ["4"]},'+
		              '{"id" : "6", "x" : "50", "y" : "190", "neighborsIds" : ["7", "4"]},'+
			          '{"id" : "7", "x" : "190", "y" : "200", "neighborsIds" : ["6"]}]}';
}

function getDataSet_2(){
	return '{"nodes": [{"id" : "A", "x" : "250", "y" : "200", "neighborsIds" : ["B", "E"]},'+
		'{"id" : "B", "x" : "200", "y" : "100", "neighborsIds" : ["D", "E", "A"]},'+
		'{"id" : "C", "x" : "100", "y" : "100", "neighborsIds" : ["D", "F"]},'+
		'{"id" : "D", "x" : "50", "y" : "200", "neighborsIds" : ["C", "B", "F"]},'+
		'{"id" : "E", "x" : "90", "y" : "300", "neighborsIds" : ["B", "A"]},'+
		'{"id" : "F", "x" : "180", "y" : "300", "neighborsIds" : ["D", "C"]}]}';
}

function getDataSet_3(){
	return '{"nodeKeyProperty": "id",'+
		'"nodeDataArray": ['+
		'{ "id": 0, "x": "250", "y": "200", "text": "A" },'+
		'{ "id": 1, "x": "200", "y": "100", "text": "B" },'+
		'{ "id": 2, "x": "100", "y": "100", "text": "C" },'+
		'{ "id": 3, "x": "50", "y": "200", "text": "D" },'+
		'{ "id": 4, "x": "90", "y": "300","text": "E" },'+
		'{ "id": 5, "x": "180", "y": "300", "text": "F" }'+
		'],'+
		'"linkDataArray": ['+
		'{ "from": 0, "to": 0, "text": "", "curviness": -20 },'+
		'{ "from": 0, "to": 1, "text": "", "curviness": 20 },'+
		'{ "from": 1, "to": 0, "text": "", "curviness": 20 },'+
		'{ "from": 1, "to": 1, "text": "", "curviness": -20 },'+
		'{ "from": 1, "to": 2, "text": "" },'+
		'{ "from": 1, "to": 4, "text": "" },'+
		'{ "from": 2, "to": 0, "text": "" },'+
		'{ "from": 2, "to": 3, "text": "" },'+
		'{ "from": 3, "to": 0, "text": "" },'+
		'{ "from": 3, "to": 3, "text": "", "curviness": 20 },'+
		'{ "from": 4, "to": 0, "text": "" },'+
		'{ "from": 4, "to": 4, "text": "" }'+
		']'+
		'}';

}
