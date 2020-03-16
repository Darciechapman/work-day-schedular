

var date = new Date();
var dayDate = date.getDate();
var monthDate = date.getMonth() + 1;
var yearDate = date.getFullYear();
var currenthour = moment().format('LT')

document.getElementById("currentDay").innerHTML = (dayDate + "/" + monthDate + "/" + yearDate);

//parse momment
//set a value
var displayTime = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"]


var time = ""


displayTime.forEach(function(element) {
    
    var row = $("<div>").addClass("row"); 
    var timeBlock = $("<div>").addClass("col-sm-1 time-block");
    var input = $('<input type="text">').addClass("col-sm-9");
    //var checkBtn = $("<button>").addClass("col-sm-1");
    var saveBtn = $("<button>").addClass("col-sm-1 saveBtn");

    if (displayTime > currenthour) {
        input.addClass("future");
    } else if (displayTime < currenthour) {
        input.addClass("past");
    } else {
        input.addClass("present");
    }

    timeBlock.text(element);
    input.attr('id', element); 
    saveBtn.attr('id', element);
    //timeBlock.innerHTML = JSON.stringify(element)
    //console.log(element.toString())
    

    row.append(timeBlock);
    row.append(input);
    //row.append(checkBtn);
    row.append(saveBtn);
    
    //let hour = JSON.stringify(element)
    //$("aside").innerText = hour
    //console.log(JSON.stringify(element))

    $("#container").append(row)

});

//target event
//$("button").on("click", function() {
//    var inputText = $("input").text
 //   if (inputText === "") {
 //       alert("error", "Email cannot be blank");
 //   } else {
 //       storeToDo();
  //  }
//});



//displayTime.forEach(function(element) {
   // $("aside").innerHTML = JSON.stringify(element)
//}


$("button").on("click", function() {
    $('input[type="text"]').blur(function() {
        if(!$(this).val()) {
            alert("empty")
        } else {
            alert("not empty")
            storeToDo();
        }
    })
})


function storeToDo() {
        if (typeof (window.localStorage) != "undefined") {
            //set the value to the text fields
            $("input[type=text]").val(function () {
                return localStorage.getItem(this.id);
            });
            $("input[type=text]").on("change", function () {
                localStorage.setItem(this.id, $(this).val());
            });
        }
    };



//add a check button
//<i class="fas fa-check"></i>



//function localStorage() {
 //   localStorage.getItem(input);
//}

//var saveBtnClickEvent = saveBtn.addEventListener("click");
