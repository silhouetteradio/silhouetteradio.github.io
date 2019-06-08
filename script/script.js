var secondOffset;
var heightOffset;

window.onload = function loadUp() {
	document.getElementById('load').style.opacity = '0';
	document.getElementById('load').style.pointerEvents = 'none';
	setTimeout(function() {
		document.getElementById('load').style.display = 'none';
	}, 1000)
};

setInterval(function() {
	if ( document.documentElement.scrollTop == 0) {
		document.getElementById('navbar-bottom').style.opacity = '0';
		document.getElementById('navbar-recordcontainer').style.left = '-100px';
		document.getElementById('navbar-recordcontainer').style.transform = 'rotate(90deg)';
		document.getElementById('mobile-play').style.opacity = '0';
		document.getElementById('mobile-play').style.pointerEvents = 'none';
		document.getElementById('navbar-desktopcontrolcontainer').style.opacity = '0';
		document.getElementById('navbar-desktopcontrolcontainer').style.pointerEvents = 'none';
		document.getElementById('socialpop').style.display = 'none';
	} else {
		document.getElementById('navbar-bottom').style.opacity = '1';
		document.getElementById('navbar-recordcontainer').style.left = '50px';
		document.getElementById('navbar-recordcontainer').style.transform = 'rotate(0deg)';
		document.getElementById('mobile-play').style.opacity = '1';
		document.getElementById('mobile-play').style.pointerEvents = 'auto';
		document.getElementById('navbar-desktopcontrolcontainer').style.opacity = '1';
		document.getElementById('navbar-desktopcontrolcontainer').style.pointerEvents = 'auto';
		document.getElementById('socialpop').style.display = 'block';
	}
	
	secondOffset = document.getElementById('second-base').offsetTop - document.getElementById('top').clientHeight;
	//document.getElementById('second').style.height = secondOffset + "px";
	
	if (document.documentElement.scrollTop >= document.getElementById('second-base').offsetTop + 120 + document.getElementById('fourth').clientHeight) {
		document.getElementById('third-cover').style.opacity = '0';
		document.getElementById('lineup-title').style.color = 'white';
		document.getElementsByClassName('navbar-link')[0].style.borderBottom = '2px solid transparent';
		document.getElementsByClassName('navbar-link')[1].style.borderBottom = '2px solid red';
	} else {
		document.getElementById('third-cover').style.opacity = '1';
		document.getElementById('lineup-title').style.color = 'black';
		document.getElementsByClassName('navbar-link')[0].style.borderBottom = '2px solid red';
		document.getElementsByClassName('navbar-link')[1].style.borderBottom = '2px solid transparent';
	}
}, 0);


var para1 = document.querySelector("#top-title");
var para2 = document.querySelector("#top-arrowcontainer");
var para3 = document.querySelector("#top-buttoncontainer");
var para4 = document.querySelector("#second-img");

function setTranslate(xPos, yPos, el) {
	el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
 
window.addEventListener("DOMContentLoaded", scrollLoop, false);
var xScrollPosition;
var yScrollPosition;
function scrollLoop() {
	xScrollPosition = window.scrollX;
	yScrollPosition = window.scrollY;
	setTranslate(0, yScrollPosition * 0.25, para1);
	setTranslate(0, yScrollPosition * 0.4, para2);
	setTranslate(0, yScrollPosition * 0.3, para3);
	setTranslate(0, yScrollPosition * 0.6, para4);
	requestAnimationFrame(scrollLoop);
}

var streamPlaying = 0;
var stream = document.getElementById('stream');

function forcePlay() {
	if (streamPlaying == 0) {
		streamPlaying = 1;
		streamPlay();
	}
}

function streamToggle() {
	if (streamPlaying == 0) {
		streamPlaying = 1;
		streamPlay();
	} else {
		streamPlaying = 0;
		streamStop();
	}
}

function requestClose() {
	document.getElementById('request').style.opacity = '0';
	document.getElementById('request').style.pointerEvents = 'none';
}

function requestOpen() {
	document.getElementById('request').style.opacity = '1';
	document.getElementById('request').style.pointerEvents = 'auto';
}


function streamPlay() {
	document.getElementById('navbar-record').style.animationPlayState = 'running';
	document.getElementById('mobile-image').src = './style/images/pause-white.svg';
	document.getElementById('mobile-image').style.left = '0px';
	document.getElementById('mobile-image').style.transform = 'rotate(360deg)';
	document.getElementById('navbar-desktopcontrol').src = './style/images/pause-white.svg';
	document.getElementById('navbar-desktopcontrol').style.left = '0px';
	document.getElementById('navbar-desktopcontrol').style.transform = 'rotate(360deg)';
	stream.play();
	stream.volume = 1;
	
}

function streamStop() {
	document.getElementById('navbar-record').style.animationPlayState = 'paused';
	document.getElementById('mobile-image').src = './style/images/play-white.svg';
	document.getElementById('mobile-image').style.left = '5px';
	document.getElementById('mobile-image').style.transform = 'rotate(0deg)';
	document.getElementById('navbar-desktopcontrol').src = './style/images/play-white.svg';
	document.getElementById('navbar-desktopcontrol').style.left = '5px';
	document.getElementById('navbar-desktopcontrol').style.transform = 'rotate(0deg)';
	stream.volume = 0;
}

var calendarDate = new Date();
var calendarDay = calendarDate.getDay();
if (calendarDay == 0) {
	calendarDay = 7;
};
document.getElementsByClassName("third-day")[calendarDay - 1].setAttribute("class", "day-select third-day");