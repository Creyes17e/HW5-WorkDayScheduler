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

  //# of Hours
  let hour = 8;
  let i = hour - 8;

  for (let hour = 8; hour <= 17; hour++) {
    let i = 0;

    //Create rows for each hour
    var rowDiv = $("<div>");
    rowDiv.addClass("row");
    rowDiv.addClass("daySchedulerRow");
    rowDiv.attr("hourIndex", hour);

    $("#daySchedulerContainer").append(rowDiv);

    //Created Columns and inserted the time slots (FIX TIME SLOTS 12AM NEEDS TO BE 12PM)
    let timeBlockDivCol = $("<div>");
    timeBlockDivCol.addClass("col-md-2");
    timeBlockDivCol.addClass("hour");

    let timeBlockSpan = $("<span>");
    timeBlockSpan.addClass("time-block");
    timeBlockSpan.attr("class", "time-block ");
    let showHour = 0;
    let amPm = "";
    if (hour > 12) {
      showHour = hour - 12;
      amPm = "pm";
    } else if (hour === 12) {
      showHour = hour;
      amPm = "pm";
    } else {
      showHour = hour;
      amPm = "am";
    }
    timeBlockSpan.text(showHour + amPm);

    rowDiv.append(timeBlockDivCol);
    timeBlockDivCol.append(timeBlockSpan);

    //Create input fields
    let userInputDiv = $("<div>");
    userInputDiv.addClass("col-md-8");

    let userInput = $("<input>");
    userInput.attr("id", "input");
    userInput.attr("hourIndex", i);
    userInput.attr("type", "text");
    userInput.attr("class", "userInput");

    rowDiv.append(userInputDiv);
    userInputDiv.append(userInput);

    //Create Column for SaveBtn icon
    let colSaveBtn = $("<div>");
    colSaveBtn.addClass("col-md-2");
    colSaveBtn.addClass("colSaveBtn");

    let saveBtn = $("<i>");
    saveBtn.attr("id", "saveBtn");
    saveBtn.attr("saveBtn", i);
    saveBtn.attr("class", "fas fa-piggy-bank saveBtn");

    rowDiv.append(colSaveBtn);
    colSaveBtn.append(saveBtn);
  }
});
