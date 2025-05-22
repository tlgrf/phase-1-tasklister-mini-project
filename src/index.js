document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const input = document.getElementById("new-task-description");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the page from reloading

   
    const taskDescription = input.value;
    if (taskDescription === "") return; // ignore empty input

    const newTask = { description: taskDescription };
    buildToDo(newTask); // call buildToDo with the task object
    form.reset();
  });
});
function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task.description;

  // Make the LI editable when you click on it once
  li.addEventListener("click", () => {
    li.contentEditable = "true";
    li.focus();
  });
  // When you click away, save the change and turn off editing
  li.addEventListener("blur", () => {
    li.contentEditable = "false";
  });

  // Delete on double click
  li.addEventListener("dblclick", () => {
    li.remove();
  });

  document.getElementById("tasks").appendChild(li);
}
