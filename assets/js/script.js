$(document).ready(function () {
  //Display Date
  let currentDay = new Date();
  $("#currentDay").text(currentDay.toDateString());
  console.log(currentDay);

  //Container for scheduler
  let dayScheduler = $("#daySchedulerContainer");
  //Removes elements
  dayScheduler.empty();

  //Takes saved user input from local storage
  let savedUserInput = JSON.parse(localStorage.getItem("savedUserInput"));
  //Creates the array of user input
  if (savedUserInput != null) {
    userInputText = savedUserInput;
  } else {
    userInputText = new Array(9);
  }
  //# of Hours on scheduler
  let hour = 8;
  let i = hour - 8;

  for (let hour = 8; hour <= 17; hour++) {
    //Calls for all items in array
    let i = hour - 8;

    //Created rows for each hour
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
    //Displays the numerical hour along with pm/am
    timeSpan.text(showHour + amPm);

    rowDiv.append(timeDivCol);
    timeDivCol.append(timeSpan);

    //Creates column for input fields
    let userInputDivCol = $("<div>");
    userInputDivCol.addClass("col-md-9");
    //Creates user input textbox
    let userInput = $("<input>");
    userInput.attr("id", `userInput-${i}`);
    userInput.attr("hourIndex", i);
    userInput.attr("type", "text");
    userInput.attr("class", "userInput");

    //Retrieves user input text
    userInput.val(userInputText[i]);

    rowDiv.append(userInputDivCol);
    userInputDivCol.append(userInput);

    //Creates Column for SaveBtn icon
    let saveBtnDivCol = $("<div>");
    saveBtnDivCol.addClass("col-md-1");
    saveBtnDivCol.addClass("colSaveBtn");

    //Creates save btn icon
    let saveBtn = $("<i>");
    saveBtn.attr("id", `saveBtn-${i}`);
    saveBtn.attr("save-id", i);
    saveBtn.attr("class", "fas fa-piggy-bank saveBtn");

    rowDiv.append(saveBtnDivCol);
    saveBtnDivCol.append(saveBtn);

    //Updates color to indicate past, present, and future(military time)
    let currentHour = moment().format("H");

    if (currentHour > hour) {
      userInputDivCol.css("background-color", "#d3d3d3");
    } else if (currentHour < hour) {
      userInputDivCol.css("background-color", "#77dd77");
    } else {
      userInputDivCol.css("background-color", "#ff6961");
    }
  }

  //Create onClick for saveBtn on document & saves
  $(document).on("click", "i", function (event) {
    event.preventDefault();
    //This returns i above, I set save-id to i
    let index = $(i).attr("save-id");
    //this calls the user input id that is also returning i + index
    let userInputId = "#userInput-" + index;
    console.log(userInputId);
    let value = $(userInputId).val();
    userInputText[index] = value;
    //Saves user input
    localStorage.setItem("savedUserInput", JSON.stringify(userInputText));
  });
});
