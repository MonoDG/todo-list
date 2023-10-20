import './style.css';
import Todo from './todo.mjs';
import Project from './project.mjs';
import { TODO_STATE } from './constants.mjs';

const myDefaultProject = new Project("Default");
myDefaultProject.addTodo(new Todo("Create Todo class", "Description1"));
myDefaultProject.addTodo(new Todo("Create Project class", "Description2"));

myDefaultProject.todolist[0].state = TODO_STATE.COMPLETED;

myDefaultProject.printTodos();
