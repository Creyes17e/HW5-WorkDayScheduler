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
  //Creates the array of user input text
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
    var rowDiv = $("<div class='row'>");
    rowDiv.attr("id", "daySchedulerRow");
    rowDiv.attr("hourIndex", hour);

    $("#daySchedulerContainer").append(rowDiv);

    //Created time Column and inserted the time slots
    let timeDivCol = $("<div class='col-md-2 hour'>");

    let timeSpan = $("<span class='time-block'>");

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
    let userInputDivCol = $("<div class='col-md-9 justify-content-center'>");

    //Creates user input textbox
    let userInput = $("<input class='userInput'>");
    userInput.attr("id", `userInput-${i}`);
    userInput.attr("hourIndex", i);
    userInput.attr("type", "text");

    //Retrieves user input text
    userInput.val(userInputText[i]);

    rowDiv.append(userInputDivCol);
    userInputDivCol.append(userInput);

    //Creates Column for SaveBtn icon
    let saveBtnDivCol = $("<div class='col-md-1 colSaveBtn'>");

    //Creates save btn icon
    let saveBtn = $("<i class='fas fa-piggy-bank saveBtn'>");
    saveBtn.attr("id", `saveBtn-${i}`);
    saveBtn.attr("save-id", i);

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
    //This calls the # position of the array
    let index = $(this).attr("save-id");
    //this is returning userinput-(the # position in array)
    let userInputId = "#userInput-" + index;

    //Value is the text the user inputs in the scheduler
    let value = $(userInputId).val();
    userInputText[index] = value;

    //Saves user input text into a string
    localStorage.setItem("savedUserInput", JSON.stringify(userInputText));
  });
});
