import { formatISO } from "date-fns";
import { TODO_STATE } from './constants.mjs';

export default class ProjectComponent {
    #_projects
    #_project
    #_node

    constructor(projects, project) {
        this.#_projects = projects;
        this.#_project = project;
        this.#setupNode();
    }

    get project() { return this.#_project; };
    get node() { return this.#_node; };

    set project(value) { this.#_project = value; };
    set node(value) { this.#_node = value; };

    #setupNode() {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project-container");
        projectContainer.appendChild(this.#createNodeHeader());
        projectContainer.appendChild(this.#createNewTaskDiv());
        projectContainer.appendChild(this.#createTodoListDiv());
        this.#_node = projectContainer;
    }

    #createNodeHeader() {
        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header");
        projectHeader.appendChild(this.#createNameSection());
        projectHeader.appendChild(this.#createOptionsSection());
        return projectHeader;
    }

    #createNameSection() {
        const nameSection = document.createElement("div");
        const nameInput = document.createElement("input");
        const nameButtonsHideableSection = document.createElement("div");
        const nameButtonsSubSection = document.createElement("div");
        const saveButton = document.createElement("button");
        const cancelButton = document.createElement("button");

        nameSection.classList.add("project-name-container");
        saveButton.classList.add("confirm");
        cancelButton.classList.add("cancel");

        nameInput.value = this.#_project.name;
        nameInput.addEventListener("click", () => {
            nameInput.classList.add("editable");
            nameButtonsHideableSection.hidden = false;
        })
        nameSection.appendChild(nameInput);

        saveButton.textContent = "Save";
        cancelButton.textContent = "Cancel";

        saveButton.addEventListener("click", () => {
            const sidebarProjectButton = document.querySelector(`button[data-id="${this.#_project.id}"]`);
            this.#_project.name = nameInput.value.trim();
            nameInput.value = this.#_project.name;
            sidebarProjectButton.textContent = this.#_project.name;
            nameButtonsHideableSection.hidden = true;
            nameInput.classList.remove("editable");
        });

        cancelButton.addEventListener("click", () => {
            nameInput.value = this.#_project.name;
            nameButtonsHideableSection.hidden = true;
            nameInput.classList.remove("editable");
        })

        nameButtonsHideableSection.hidden = true;
        nameButtonsSubSection.appendChild(saveButton);
        nameButtonsSubSection.appendChild(cancelButton);

        nameButtonsHideableSection.appendChild(nameButtonsSubSection);
        nameSection.appendChild(nameButtonsHideableSection);
        return nameSection;
    }

    #createOptionsSection() {
        // For the moment, just the option to delete the project
        const optionsSection = document.createElement("div");
        const deleteButton = document.createElement("button");

        optionsSection.classList.add("project-options-container");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            const projectList = document.querySelector(".projects");
            const projectToRemove = document.querySelector(`button[data-id="${this.#_project.id}"]`).parentElement;
            projectList.removeChild(projectToRemove);
            // TODO remove from local storage project list when implemented
            delete this.#_projects[this.project.id];
            // TODO change to project list overview instead
            document.querySelector(".main").replaceChildren();
        });

        optionsSection.appendChild(deleteButton);
        return optionsSection;
    }

    #createNewTaskDiv() {
        const addTaskContainer = document.createElement("div");
        addTaskContainer.classList.add("add-task-container");

        const placeHolderAddTask = document.createElement("div");
        const placeholderAddButton = document.createElement("button");

        const addNewTaskDiv = document.createElement("div");
        addNewTaskDiv.classList.add("new-task-div");

        const addNewTaskForm = document.createElement("form");
        addNewTaskForm.id = "add-new-task-form";

        const taskNameInput = document.createElement("input");
        taskNameInput.placeholder = "Task name";
        taskNameInput.classList.add("bold");
        const taskDescriptionInput = document.createElement("input");
        taskDescriptionInput.placeholder = "Description";

        const buttonsContainer = document.createElement("div");
        const dueDateInput = document.createElement("input");
        dueDateInput.type = "datetime-local";
        dueDateInput.id = "due-date";
        dueDateInput.name = "due-date";
        dueDateInput.value = formatISO(new Date()).slice(0, 16);

        const prioritySelect = document.createElement("select");
        [1, 2, 3, 4].forEach(value => {
            const priorityOption = document.createElement("option");
            priorityOption.value = value;
            priorityOption.textContent = `Priority ${value}`;
            prioritySelect.appendChild(priorityOption);
        });

        const submitButtonsContainer = document.createElement("div");
        const cancelButton = document.createElement("button");
        const saveButton = document.createElement("button");

        cancelButton.classList.add("cancel");
        saveButton.classList.add("confirm");

        cancelButton.textContent = "Cancel";
        saveButton.textContent = "Add task";
        saveButton.disabled = true;
        saveButton.type = "submit";

        cancelButton.addEventListener("click", e => {
            e.preventDefault();
            placeHolderAddTask.hidden = false;
            addNewTaskDiv.hidden = true;
        })

        saveButton.addEventListener("click", e => {
            e.preventDefault();
            console.log("Addint new task to project " + this.#_project.name);
        })

        taskNameInput.addEventListener("input", () => {
            if (taskNameInput.value === "") {
                saveButton.disabled = true;
            } else {
                saveButton.disabled = false;
            }
        })

        submitButtonsContainer.appendChild(cancelButton);
        submitButtonsContainer.appendChild(saveButton);

        buttonsContainer.appendChild(dueDateInput);
        buttonsContainer.appendChild(prioritySelect);

        addNewTaskForm.appendChild(taskNameInput);
        addNewTaskForm.appendChild(taskDescriptionInput);
        addNewTaskForm.appendChild(buttonsContainer);
        addNewTaskForm.appendChild(submitButtonsContainer);

        addNewTaskDiv.appendChild(addNewTaskForm);

        addNewTaskDiv.hidden = true;

        placeHolderAddTask.classList.add("add-task-placeholder-div");
        placeholderAddButton.textContent = "+ Add Task";
        placeholderAddButton.addEventListener("click", e => {
            e.preventDefault();
            placeHolderAddTask.hidden = true;
            addNewTaskDiv.hidden = false;
        });

        placeHolderAddTask.appendChild(placeholderAddButton);

        addTaskContainer.appendChild(placeHolderAddTask);
        addTaskContainer.appendChild(addNewTaskDiv);

        return addTaskContainer;
    }

    #createTodoListDiv() {
        const todolistDiv = document.createElement("div");
        todolistDiv.classList.add("todolist-container");
        const todoListUl = document.createElement("ul");
        this.#_project.todolist.forEach(todo => {
            const todoLi = document.createElement("li");
            const titleDiv = document.createElement("div");
            titleDiv.id = todo.id;
            const titleCheckCompleted = document.createElement("input");
            titleCheckCompleted.type = "checkbox";
            titleDiv.appendChild(titleCheckCompleted);
            const titleTextContent = document.createElement("span");
            titleTextContent.textContent = todo.title;
            titleDiv.appendChild(titleTextContent);

            titleCheckCompleted.addEventListener("change", () => {
                if (titleCheckCompleted.checked) {
                    titleTextContent.classList.add("completed");
                    todo.state = TODO_STATE.COMPLETED;
                } else {
                    titleTextContent.classList.remove("completed");
                    todo.state = TODO_STATE.TODO;
                }
            });

            const buttons = document.createElement("div");
            const editButton = document.createElement("button");
            const deleteButton = document.createElement("button");

            editButton.classList.add("confirm");
            deleteButton.classList.add("delete");
            editButton.textContent = "Edit";
            deleteButton.textContent = "Delete";
            buttons.appendChild(editButton);
            buttons.appendChild(deleteButton);

            todoLi.appendChild(titleDiv);
            todoLi.appendChild(buttons);
            todoListUl.appendChild(todoLi);
        });
        todolistDiv.appendChild(todoListUl);
        return todolistDiv;
    }
}