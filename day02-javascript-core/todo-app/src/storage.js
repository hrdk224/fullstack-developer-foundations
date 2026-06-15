export function saveTasks(tasksArray) {
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

export function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : null;
}

export function clearStorage() {
  localStorage.clear();
}
