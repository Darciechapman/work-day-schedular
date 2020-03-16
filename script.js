

var date = new Date();
var dayDate = date.getDate();
var monthDate = date.getMonth() + 1;
var yearDate = date.getFullYear();

var currenthour = moment().format('HH')

document.getElementById("currentDay").innerHTML = (dayDate + "/" + monthDate + "/" + yearDate);

//parse momment
//set a value
var displayTime = [
    {text:"9:00am",
    value:"9"},
    {text:"10:00am",
    value:"10"},
    {text:"11:00am",
    value:"11"},
    {text:"12:00am",
    value:"12"},
    {text:"1:00pm",
    value:"13"},
    {text:"2:00pm",
    value:"14"},
    {text:"3:00pm",
    value:"15"},
    {text:"4:00pm",
    value:"16"},
    {text:"5:00pm",
    value:"17"},
]



var time = ""

alert(currenthour)


displayTime.forEach(function(element) {
    
    var row = $("<div>").addClass("row"); 
    var timeBlock = $("<div>").addClass("col-sm-1 time-block");
    var input = $('<input type="text">').addClass("col-sm-9");
    //var checkBtn = $("<button>").addClass("col-sm-1");
    var saveBtn = $("<button>").addClass("col-sm-1 saveBtn");

    if (element.value === currenthour) {
        input.addClass("present");
    } else if (element.value < currenthour) {
        input.addClass("past");
    } else {
        input.addClass("future");
    }

    timeBlock.text(element.text);
    input.attr('id', element.text); 
    saveBtn.attr('id', element.text);
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
            $('input[type="text"]').val(function () {
                return localStorage.getItem(this.id);
            });
            $('input[type="text"]').on("change", function () {
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
