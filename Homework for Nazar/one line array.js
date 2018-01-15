	var a = +prompt();
		var arr = new Array(a + 1).join(1).split('').map(function(item, i, arr) {return +item + i});
		alert(arr);