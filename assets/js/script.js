$(document).ready(function () {
  //Display Date
  let currentDay = new Date();
  $("#currentDay").text(currentDay.toDateString());
  console.log(currentDay);

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

    //Created time Column and inserted the time slots
    let timeDivCol = $("<div>");
    timeDivCol.addClass("col-md-2");
    timeDivCol.addClass("hour");

    let timeSpan = $("<span>");
    timeSpan.addClass("time-block");
    timeSpan.attr("class", "time-block ");
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
    timeSpan.text(showHour + amPm);

    rowDiv.append(timeDivCol);
    timeDivCol.append(timeSpan);

    //Create column for input fields
    let userInputDivCol = $("<div>");
    userInputDivCol.addClass("col-md-8");

    let userInput = $("<input>");
    userInput.attr("id", "input");
    userInput.attr("hourIndex", i);
    userInput.attr("type", "text");
    userInput.attr("class", "userInput");

    rowDiv.append(userInputDivCol);
    userInputDivCol.append(userInput);

    //Create Column for SaveBtn icon
    let saveBtnDivCol = $("<div>");
    saveBtnDivCol.addClass("col-md-2");
    saveBtnDivCol.addClass("colSaveBtn");

    let saveBtn = $("<i>");
    saveBtn.attr("id", "saveBtn");
    saveBtn.attr("saveBtn", i);
    saveBtn.attr("class", "fas fa-piggy-bank saveBtn");

    rowDiv.append(saveBtnDivCol);
    saveBtnDivCol.append(saveBtn);

    //Update color to indicate past
    let currentHour = moment().format("H");
    console.log(currentHour);
    console.log(hour);

    if (currentHour > hour) {
      userInputDivCol.css("background-color", "gray");
    } else if (currentHour < hour) {
      userInputDivCol.css("background-color", "green");
    } else {
      userInputDivCol.css("background-color", "red");
    }
  }
  //Create onClick for saveBtn
  const test = true; //this will check if the click is working in the correct place
  let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
  $(saveBtn).on("click", function (event) {
    event.preventDefault();
    if (test) {
      console.log("hi");
    }
  });
});
