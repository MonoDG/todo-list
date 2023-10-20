import Todo from './todo.mjs';
import Project from './project.mjs';

const myDefaultProject = new Project("Default");
myDefaultProject.addTodo(new Todo("Create Todo class", "Description1"));
myDefaultProject.addTodo(new Todo("Create Project class", "Description2"));
myDefaultProject.printTodos();