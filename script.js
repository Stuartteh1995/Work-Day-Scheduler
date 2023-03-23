// this make sure to load the html before anything else.
$(document).ready(function () {

// get the current date, month, year and time and formats it from day.js
var currentDay = dayjs().format('ddd, MMM D, YYYY h:mm A');
//displays date
$('#currentDay').text(currentDay);



function updateTimeBlockClasses() {
$(".time-block").each(function(){
  //gets the current hour
  const currentHour = dayjs().hour();
  //this gets the current hour and identifies which box to change to green
  const blockHour = parseInt($(this).attr("id").split("-")[1]);
  
  //removes any attribute
  $(this).removeClass("past present future");

  //formats the page by currently hour, if its in the pass it would be grey, if its 
  //the current hour it would display a green box and any futre hour is red.
  if (blockHour < currentHour){
    $(this).addClass("past");
  } else if (blockHour === currentHour){
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});
}

//this triggers the set changing of colors every time i interact with the page
updateTimeBlockClasses();



$(".time-block").each(function () {
  //gets any previous data
  const blockId = $(this).attr("id");
  const storedDescription = localStorage.getItem(blockId);

  //gets the value inside the textarea
  if (storedDescription) {
    $(this).find("textarea").val(storedDescription);
  }
});

 // Add a click event listener for the save button
 $(".saveBtn").on("click", function () {
  // Get the id of the containing time-block
  const blockId = $(this).closest(".time-block").attr("id");

  // Get the user input from the textarea
  const description = $(this).siblings("textarea").val();

  // Save the user input in localStorage with the blockId as the key
  localStorage.setItem(blockId, description);
});

});
