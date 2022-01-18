const taskForm = document.querySelector("#create-task-form");
const taskDescInput = document.querySelector("#new-task-description");
const createNewTaskBtn = document.querySelector("#submitBtn");

createNewTaskBtn.addEventListener("click", createNewTask);

function createNewTask(event) {
  event.preventDefault();
  const myToDoList = document.querySelector("#list");
  const liTag = document.createElement("li");
  const btnTag = document.createElement("button");
  btnTag.textContent = "X";
  liTag.textContent = `${taskDescInput.value}  `;

  myToDoList.appendChild(liTag);
  liTag.append(btnTag);

  taskForm.reset();

  btnTag.addEventListener("click", removeListItemBtn);

  function removeListItemBtn() {
    liTag.remove();
  }
}
