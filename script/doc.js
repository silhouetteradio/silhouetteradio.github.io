window.onload = function loadUp() {
	document.getElementById('load').style.opacity = '0';
	document.getElementById('load').style.pointerEvents = 'none';
	setTimeout(function() {
		document.getElementById('load').style.display = 'none';
	}, 1000)
};