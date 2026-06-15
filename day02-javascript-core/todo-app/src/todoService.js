import { datafetcher } from './api.js';
import { saveTasks, loadTasks, clearStorage } from './storage.js';

let tasks = [];
export async function initialize() {
  const localData = loadTasks();
  if (localData) {
    tasks = localData;
  } else {
    let data = await datafetcher();
    tasks = data.map(elements => elements.title);
    saveTasks(tasks);
  }
  return tasks;
}

export function addTasks(taskText) {
  tasks.push(taskText);
  saveTasks(tasks);
  console.log(tasks);
  return tasks;
}

export function clearAllTasks() {
  console.log(tasks);
  tasks = [];
  clearStorage();
  return tasks;
}
export function getTasks() {
  loadTasks();
  return tasks;
}
