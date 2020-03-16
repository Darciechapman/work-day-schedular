

var date = new Date();
var dayDate = date.getDate();
var monthDate = date.getMonth() + 1;
var yearDate = date.getFullYear();

var currenthour = moment().format('HH')

document.getElementById("currentDay").innerHTML = (dayDate + "/" + monthDate + "/" + yearDate);

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

//alert(currenthour)


displayTime.forEach(function(element) {
    
    var row = $("<div>").addClass("row"); 
    var timeBlock = $("<div>").addClass("col-sm-1 time-block");
    var input = $('<input type="text">').addClass("col-sm-10");
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
    saveBtn.attr('id', element.text + "Btn");

    row.append(timeBlock);
    row.append(input);
    //row.append(checkBtn);
    row.append(saveBtn);

    $("#container").append(row)

});

//target event

$("button").on("click", function() {
    
    if(!$('input[type="text"]').val()) {
        //clearLocal();
        //localStorage.clear();
    } else {
        jQuery();
    }
})


jQuery(function ($) {
    if (typeof (window.localStorage) != "undefined") {

        // will get value of specific id from the browser localStorage and set to the input 
        $("input[type=text]").val(function () {
            return localStorage.getItem(this.id);
        });

        // will set values in browser localStorage for further reference
        $("input[type=text]").on("change", function () {
            localStorage.setItem(this.id, $(this).val());
        });
    }
});


