import './style.css';
import Project from './project.mjs';
import { DOMHandler, addProject } from './DOMHandler.mjs';

DOMHandler();

const myDefaultProject = new Project("Default");
// myDefaultProject.addTodo(new Todo("Create Project class", "Description2"));
// myDefaultProject.todolist[0].state = TODO_STATE.COMPLETED;

addProject(myDefaultProject);