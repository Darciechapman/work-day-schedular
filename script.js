

var date = new Date();
var dayDate = date.getDate();
var monthDate = date.getMonth() + 1;
var yearDate = date.getFullYear();

document.getElementById("currentDay").innerHTML = (dayDate + "/" + monthDate + "/" + yearDate);

//document.getElementsByClassName(".container").addClassList(".future");

//format("L.T"); start of hour

//if time less then current time add past class to container
//if current hour is displayed add present class to the container
// if current time is over current hour in time block, change class container to future class

var displayTime = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//display string in time-blocks. forEach displaytime inner text time-block

//var timeBlock = $(".time-block").innerHTML
//console.log(toDoRow);

//loop for timestamps

var time = ""

addRow(forEach(displayTime));



function addRow() {
    
    let row = $("<div>").addClass("row")  
    let timeBlock = $("<div>").addClass("col-sm-1 time-block")
    let input = $("<input>").addClass("col-sm-10")
    let saveBtn = $("<button>").addClass("col-sm-1 saveBtn")

    //timeBlock.text(hour);

    row.append(timeBlock);
    row.append(input);
    row.append(saveBtn)
    
  

    $("row-container").append(row);

}



$("button").addEventListener("click", () => {
    if (input.innerHTML != "") {
        localStorage()
    }
})

function localStorage() {
    localStorage.getItem(input);
}

var saveBtnClickEvent = saveBtn.addEventListener("click");
