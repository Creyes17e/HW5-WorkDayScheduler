$(document).ready(function () {
  //Display Date
  let currentDay = new Date();
  $("#currentDay").text(currentDay.toDateString());
  console.log(currentDay);

  // Create timeblocks
  //Container for scheduler
  let dayScheduler = $("#daySchedulerContainer");
  //Removes from element
  dayScheduler.empty();
  let hour = 8;
  let i = hour - 8;

  for (let hour = 8; hour <= 18; hour++) {
    let i = hour - 8;

    //Create rows for each hour
    var rowDiv = $("<div>");
    rowDiv.addClass("row");
    rowDiv.addClass("daySchedulerRow");
    rowDiv.attr("hour-index", hour);

    $("#daySchedulerContainer").append(rowDiv);

    // Create Column for time slots
    let colDiv = $("<div>");
    colDiv.addClass("col-md-2");
    colDiv.addClass("hour");
    rowDiv.append(colDiv);

    //Insert the time slots
    let timeSlotSpan = $("<span>");
    timeSlotSpan.addClass("timeSlot");
    timeSlotSpan.attr("class", "timeSlot");
    let showHour = 0;
    let ampm = "";
    if (hour > 12) {
      showHour = hour - 12;
      ampm = "pm";
    } else {
      showHour = hour;
      ampm = "am";
    }
    timeSlotSpan.text(showHour + ampm);

    colDiv.append(timeSlotSpan);

    //Create input fields
    let userInput = $("<input>");
    userInput.attr("id", `input-${i}`);
    userInput.attr("hour-index", i);
    userInput.attr("type", "text");
    userInput.attr("class", "userInput");

    rowDiv.append(userInput);
  }
});
