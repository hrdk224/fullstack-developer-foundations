import {
  initialize,
  addTasks,
  getTasks,
  clearAllTasks,
} from './todoService.js';
const addBtn = document.getElementById('add-task');
const inputEl = document.getElementById('input');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-Btn');

let currentTasks = await initialize();
render(currentTasks);
addBtn.addEventListener('click', function () {
  if (inputEl.value.trim() == '') return;
  currentTasks = addTasks(inputEl.value);
  render(currentTasks);
  inputEl.value = '';
});

deleteBtn.addEventListener('click', function () {
  currentTasks = clearAllTasks();
  render(currentTasks);
});

function render(arr) {
  let taskTags = '';
  for (let i = 0; i < arr.length; i++) {
    taskTags += `<li>
      <input type="checkbox" id="task-${i}">
      <label for="task-${i}">${arr[i]}</label>
    </li>`;
  }
  ulEl.innerHTML = taskTags;
}
