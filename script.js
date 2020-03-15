

var date = new Date();
var dayDate = date.getDate();
var monthDate = date.getMonth() + 1;
var yearDate = date.getFullYear();
var currenthour = moment().format('LT')

document.getElementById("currentDay").innerHTML = (dayDate + "/" + monthDate + "/" + yearDate);

//parse momment

var displayTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

var time = ""


displayTime.forEach(function(element) {
    
    var row = $("<div>").addClass("row"); 
    var timeBlock = $("<div>").addClass("col-sm-1 time-block");
    var input = $("<input>").addClass("col-sm-10");
    var saveBtn = $("<button>").addClass("col-sm-1 saveBtn");

    if (displayTime > currenthour) {
        input.addClass("future");
    } else if (displayTime < currenthour) {
        input.addClass("past");
    } else {
        input.addClass("present");
    }

    timeBlock.text(element);
    //timeBlock.innerHTML = JSON.stringify(element)
    //console.log(element.toString())
    

    row.append(timeBlock);
    row.append(input);
    row.append(saveBtn);
    
    //let hour = JSON.stringify(element)
    //$("aside").innerText = hour
    //console.log(JSON.stringify(element))

    $("#container").append(row)

});

$("button").on("click", function() {
    var inputText = $("input").text
    if (inputText === "") {
        alert("error", "Email cannot be blank");
    } else {
        storeToDo();
    }
});



//displayTime.forEach(function(element) {
   // $("aside").innerHTML = JSON.stringify(element)
//}


function storeToDo() {
   var inputText = $("input").text
   JSON.parse(localStorage.getItem("todoData"));
   localStorage.setItem("todoData", JSON.stringify(inputText));

}



//function localStorage() {
 //   localStorage.getItem(input);
//}

//var saveBtnClickEvent = saveBtn.addEventListener("click");
