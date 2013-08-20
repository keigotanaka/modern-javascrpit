try {
	ajax = new ActiveXObject('MSXML2.XMLHTTP6.0');
} catch(ex) {
	try {
		ajax = new ActiveXObject('MSXML2.XMLHTTP3.0');
		} catch(ex) {
			try {
				ajax = new ActiveXObject('MSXML2.XMLHTTP');
			} catch (ex) {
				throw new Error('XMLHttpRequest is not supported in this browser');
		}
	}
}