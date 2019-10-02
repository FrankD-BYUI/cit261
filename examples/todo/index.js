import ToDos from './todo.js';

const list = document.getElementById('todoList');
const myToDos = new ToDos(list, 'todo');

document.getElementById('addToDo').addEventListener('click', () => {
  const task = document.getElementById('todoInput').value;
  myToDos.newToDo(task);
});
