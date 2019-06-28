var secondOffset;
var heightOffset;
var quality = 0;
var pageLoaded = 0;
var pageTimer = 0;
var cycleVar = -1;

document.documentElement.style.overflowY = 'hidden';

setInterval(function() {
	if (pageLoaded == 0) {
		pageTimer = pageTimer + 1;
	}
}, 10);

window.onload = function() {
	document.getElementById('load').style.opacity = '0';
	document.getElementById('load').style.pointerEvents = 'none';
	pageLoaded = 1;
	document.documentElement.style.overflowY = 'scroll';
	setTimeout(function() {
		document.getElementById('load').style.display = 'none';
	}, 1000);
	if (pageTimer < 40) {
		qualityHigh();
	} else {
		qualityMedium();
	}
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
	
	if (document.documentElement.scrollTop >= document.getElementById('third-calendarcontainer').offsetTop + 60) {
		document.getElementById('third-cover').style.opacity = '0';
		document.getElementById('fourth').style.opacity = '0';
		document.getElementById('second').style.opacity = '0';
		document.getElementById('lineup-title').style.color = 'white';
		document.getElementsByClassName('navbar-link')[0].style.borderBottom = '2px solid transparent';
		document.getElementsByClassName('navbar-link')[1].style.borderBottom = '2px solid red';
	} else {
		document.getElementById('third-cover').style.opacity = '1';
		document.getElementById('fourth').style.opacity = '1';
		document.getElementById('second').style.opacity = '1';
		document.getElementById('lineup-title').style.color = 'black';
		document.getElementsByClassName('navbar-link')[0].style.borderBottom = '2px solid red';
		document.getElementsByClassName('navbar-link')[1].style.borderBottom = '2px solid transparent';
	}

  if (document.documentElement.clientWidth > 583) {
    document.getElementById('navbar-completecontainer').style.top = "-45px";
  }
  if (document.documentElement.scrollTop == 0) {
    document.getElementById('navbar-completecontainer').style.top = "-45px";
  }
  if (document.documentElement.clientWidth > 983) {
    document.getElementsByClassName("third-day")[0].style.height = "560px";
    document.getElementsByClassName("third-day")[1].style.height = "560px";
    document.getElementsByClassName("third-day")[2].style.height = "560px";
    document.getElementsByClassName("third-day")[3].style.height = "560px";
    document.getElementsByClassName("third-day")[4].style.height = "560px";
    document.getElementsByClassName("third-day")[5].style.height = "560px";
    document.getElementsByClassName("third-day")[6].style.height = "560px";
  } else {
    cycleVar = cycleVar + 1;
    if (cycleVar > 6) {
      cycleVar = 0;
    }
    if (document.getElementsByClassName('third-day-button')[cycleVar].clientHeight == 32) {
      document.getElementsByClassName("third-day")[cycleVar].style.height = "560px";
      document.getElementsByClassName("third-day-button")[cycleVar].style.height = "32px";
      document.getElementsByClassName("third-day-button")[cycleVar].style.backgroundImage = "url('./style/images/minus.svg')";
      document.getElementsByClassName("third-day-button")[cycleVar].style.transform = "rotate(360deg)";
    } else {
      document.getElementsByClassName("third-day")[cycleVar].style.height = "42px";
      document.getElementsByClassName("third-day-button")[cycleVar].style.height = "33px";
      document.getElementsByClassName("third-day-button")[cycleVar].style.backgroundImage = "url('./style/images/plus.svg')";
      document.getElementsByClassName("third-day-button")[cycleVar].style.transform = "rotate(0deg)";
    }
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
var stream2 = document.getElementById('stream2');

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
	stream.volume = 1;
	stream.play();
	
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

function qualityHigh() {
	document.getElementsByClassName("navbar-q")[0].setAttribute("class", "navbar-q navbar-quality-selected");
	document.getElementsByClassName("navbar-q")[1].setAttribute("class", "navbar-q navbar-quality");
  document.getElementsByClassName("navbar-q")[2].setAttribute("class", "navbar-q navbar-quality-selected");
	document.getElementsByClassName("navbar-q")[3].setAttribute("class", "navbar-q navbar-quality");
	stream.src = "https://str2b.openstream.co/1036?aw_0_1st.stationid=3850&aw_0_1st.publisherId=1060&aw_0_1st.serverId=str2b";
	stream.load();
	stream.play();
}

function qualityMedium() {
	document.getElementsByClassName("navbar-q")[1].setAttribute("class", "navbar-q navbar-quality-selected");
	document.getElementsByClassName("navbar-q")[0].setAttribute("class", "navbar-q navbar-quality");
  document.getElementsByClassName("navbar-q")[3].setAttribute("class", "navbar-q navbar-quality-selected");
	document.getElementsByClassName("navbar-q")[2].setAttribute("class", "navbar-q navbar-quality");
	stream.src = "https://str2b.openstream.co/1035?aw_0_1st.stationid=3849&aw_0_1st.publisherId=1059&aw_0_1st.serverId=str2b";
	stream.load();
	stream.play();
}

document.getElementsByClassName("third-day")[calendarDay - 1].style.height = "560px";
document.getElementsByClassName("third-day-button")[calendarDay - 1].style.height = "32px";
document.getElementsByClassName("third-day-button")[calendarDay - 1].style.backgroundImage = "url('./style/images/minus.svg')";
document.getElementsByClassName("third-day-button")[calendarDay - 1].style.transform = "rotate(360deg)";
function dayOpen(day) {
  if (document.getElementsByClassName("third-day-button")[day - 1].clientHeight == 33) {
    document.getElementsByClassName("third-day")[day - 1].style.height = "560px";
    document.getElementsByClassName("third-day-button")[day - 1].style.height = "32px";
    document.getElementsByClassName("third-day-button")[day - 1].style.backgroundImage = "url('./style/images/minus.svg')";
    document.getElementsByClassName("third-day-button")[day - 1].style.transform = "rotate(360deg)";
  } else {
    document.getElementsByClassName("third-day")[day - 1].style.height = "42px";
    document.getElementsByClassName("third-day-button")[day - 1].style.height = "33px";
    document.getElementsByClassName("third-day-button")[day - 1].style.backgroundImage = "url('./style/images/plus.svg')";
    document.getElementsByClassName("third-day-button")[day - 1].style.transform = "rotate(0deg)";
  }
}


function scrollDetect(){
  var lastScroll = 0;

  window.onscroll = function() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
        document.getElementById('navbar-completecontainer').style.top = "-45px";
      }else{
        lastScroll = currentScroll;
        document.getElementById('navbar-completecontainer').style.top = "0px";
      }
      if (document.documentElement.clientWidth > 583) {
        document.getElementById('navbar-completecontainer').style.top = "-45px";
      }
  };
}


scrollDetect();