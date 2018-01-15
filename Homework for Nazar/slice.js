'use strict';
var person  = {
	name: 'nazar-kovtun'
};
		
var filters = {
	'deslugify': x => x.replace('-', ' '),
	'uppercase': x => x.toUpperCase()
};

var input = 'name | deslugify | uppercase';

function slice(input, person) {
	var data = input.split(' | ');
	var objName = person[data[0]];
	var actions = data.slice(1);
	for (var i = 0; i < actions.length; i++) {
		objName = filters[actions[i]](objName);
	}
	return objName;
}

var result = slice(input, person);
alert(result);