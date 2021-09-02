//addingContainer variables
let input = $(".input-add");
let addButton = $(".add-button");

//todo container variables
let emptyTask = $(".todo-container");
let taskContent = $(".todo-content");
let delButton = $("<span>Delete</span>").addClass("del-button");

//tasks info variables
let tasksCount = 0;
let completed = 0;

//start functions

function checkFunction() {
  if (input.val() === "") {
    alert("You can't add an empty task!");
  } else {
    addTask();
  }
}

//adding task function
function addTask() {
  newTask = emptyTask.clone(true);
  newTask
    .children()
    .eq(0) //targeting the first child element
    .addClass("added-task")
    .text(input.val())
    .append(delButton.clone(true));
  newTask.css("display", "none");

  //creating some animations
  emptyTask.slideUp(600, function () {
    //adding the newTask after the adding container but it have a display none so it won't be shown
    $(".adding-container").after(newTask);
    addButton.toggleClass("rotation");

    //showing the newTask
    newTask.slideDown(600);

    //clearing the input
    input.val("");
  });
  tasksCount++;
  $(".tasks-num").text(tasksCount);
}

//deleting function
function delTask() {
  $(this)
    .parentsUntil("body")
    .slideUp(600, function () {
      //removing the parent element todo container
      $(this).parentsUntil("body").remove();

      //checking if there is no tasks to show the empty task
      if ($(".todo-container").length === 1) {
        emptyTask.slideDown(600);
      }
    });

  tasksCount--;
  $(".tasks-num").text(tasksCount);

  completed--;
  $(".completed").text(completed);
}
//end functions

//start main code
addButton.click(function () {
  checkFunction();
});

delButton.click(delTask);

$(".todo-container").click(function () {
  $(this).toggleClass("finished");

  if ($(this).attr("class").includes("finished")) {
    completed++;
    $(".completed").text(completed);
  } else {
    completed--;
    $(".completed").text(completed);
  }
});
