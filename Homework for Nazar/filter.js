'use strict';
var input = [
		{name: 'Ivan', strength: 90000, sex: 'm'},
		{name: 'Nazar', strength: 100000, sex: 'm'},
		{name: 'Alina', strength: 136, sex: 'f'}
	];
	
function isSuperhuman(obj) {
	return obj.strength >= 500;		
}

function findFemale(obj) {
	return obj.sex == 'f';
}

function filter(f, input) {
	var output = [];
	for (var item in input) {
		var obj = input[item];
		if (f(obj))
			output.push(obj);
	}
	return output;
}

var superHumans = filter(isSuperhuman, input);
var females = filter(findFemale, input);

alert("SuperHumans:    " + superHumans.map((obj) => obj.name));
alert("Females:    " + females.map((obj) => obj.name));