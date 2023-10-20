import './style.css';
import Todo from './todo.mjs';
import Project from './project.mjs';
import { TODO_STATE } from './constants.mjs';
import { DOMHandler, addProject, addTodo } from './DOMHandler.mjs';

DOMHandler();

const myDefaultProject = new Project("Default");
const myOtherProject = new Project("CS Course");
myDefaultProject.addTodo(new Todo("Create Todo class", "Description1"));
myDefaultProject.addTodo(new Todo("Create Project class", "Description2"));

myDefaultProject.todolist[0].state = TODO_STATE.COMPLETED;

addProject(myDefaultProject);
addProject(myOtherProject);

myDefaultProject.printTodos();
