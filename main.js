/*global document, console*/
/*jslint plusplus: true, evil: true*/

//analog clock------------------------

var hoursHand = document.getElementById("hours-hand"),
	minutesHand = document.getElementById("minutes-hand"),
	secondsHand = document.getElementById("seconds-hand"),
	bars = document.getElementsByClassName("bar"),
	secbars = document.getElementsByClassName("secbar");
	
setInterval(analogClock, 500);

var i;

for (i = 0; i < bars.length; i++) {
	bars[i].style.transform = "translate(-50%, -100px) rotate(" + i * (360 / 12) + "deg)";
}

for (i = 0; i < secbars.length; i++) {
	secbars[i].style.transform = "translate(-50%, -100px) rotate(" + i * (360 / 60) + "deg)";
}



function analogClock() {
	"use strict";
		
	var time = new Date(),

		hours = time.getHours(),
		minutes = time.getMinutes(),
		seconds = time.getSeconds(),
		
		hoursDeg = (hours + ((minutes + (seconds / 60)) / 60)) * (360 / 12) - 90,
		minutesDeg = (minutes + (seconds / 60)) * (360 / 60) - 90,
		secondsDeg = seconds * (360 / 60) - 90;
		
	//"-90" as the initial position is at 3 o'clock
		
	hoursHand.style.transform = "translate(-3px, -50%) rotate(" + hoursDeg + "deg)";
	minutesHand.style.transform = "translate(-3px, -50%) rotate(" + minutesDeg + "deg)";
	secondsHand.style.transform = "translate(-15px, -50%) rotate(" + secondsDeg + "deg)";
}











