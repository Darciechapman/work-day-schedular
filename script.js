

var date = new Date();
var dayDate = date.getDate();
var monthDate = date.getMonth() + 1;
var yearDate = date.getFullYear();

document.getElementById("currentDay").innerHTML = (dayDate + "/" + monthDate + "/" + yearDate)

