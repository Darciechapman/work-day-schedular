

var date = new Date();
var dayDate = date.getDate();
var monthDate = date.getMonth() + 1;
var yearDate = date.getFullYear();

document.getElementById("currentDay").innerHTML = (dayDate + "/" + monthDate + "/" + yearDate);

var displayTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

var time = ""


displayTime.forEach(function(element) {
    
    var row = $("<div>").addClass("row"); 
    var timeBlock = $("<aside>").addClass("col-sm-1 time-block");
    let input = $("<input>").addClass("col-sm-10");
    var saveBtn = $("<button>").addClass("col-sm-1 saveBtn");

    timeBlock.innerText = displayTime;

    row.append(timeBlock);
    row.append(input);
    row.append(saveBtn);

    $("section").append(row);

    (saveBtn).click(function() {

        if (input.innerText === "") {
            alert("error", "Email cannot be blank");
        }
    });

});





//function localStorage() {
 //   localStorage.getItem(input);
//}

//var saveBtnClickEvent = saveBtn.addEventListener("click");
