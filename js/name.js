function formartNames(){
	'use strict';

	var formattedName;
	
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	
	formattedName = lastName + ', ' + firstName;
	
	document.getElementById('result').value = formattedName;
	
	return false;
}

function init(){
	'use strict';
	document.getElementById('theform').onsubmit = formartNames;
}
window.onload = init;