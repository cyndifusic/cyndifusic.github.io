var years = document.getElementById("years");

var startDate = new Date("May 24, 2013");
var currentDate = new Date();

years.innerHTML = Math.floor((currentDate.valueOf() - startDate.valueOf()) / 31556952000);