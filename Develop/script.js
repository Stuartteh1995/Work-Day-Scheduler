// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
$(document).ready(function () {

var currentDay = dayjs().format('ddd, MMM D, YYYY h:mm A');
$('#currentDay').text(currentDay);

function updateTimeBlockClasses() {
$(".time-block").each(function(){
  const currentHour = dayjs().hour();
  const blockHour = parseInt($(this).attr("id").split("-")[1]);
  
  $(this).removeClass("past present future");

  if (blockHour < currentHour){
    $(this).addClass("past");
  } else if (blockHour === currentHour){
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});
}

updateTimeBlockClasses();

$(".time-block").each(function () {
  const blockId = $(this).attr("id");
  const storedDescription = localStorage.getItem(blockId);

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
