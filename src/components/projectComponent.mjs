import { formatISO } from "date-fns";
import TodoComponent from "./todoComponent.mjs";
import { projects } from "../utils/constants.mjs";

export default class ProjectComponent {
    #_project
    #_node

    constructor(project) {
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
        // projectContainer.appendChild(this.#createNewTaskDiv());
        projectContainer.appendChild(this.#createAddTodoPlaceholder());
        // projectContainer.appendChild();
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
            delete projects[this.project.id];
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

    #createAddTodoPlaceholder() {
        const parentDiv = document.createElement("div");
        const addTodoContainer = document.createElement("div");
        const addTodoButton = document.createElement("button");

        addTodoContainer.classList.add("add-task-placeholder-div");
        addTodoButton.textContent = "+ Add Task";
        addTodoButton.addEventListener("click", e => {
            e.preventDefault();
            addTodoContainer.hidden = true;
            projectTodoContainer.hidden = false;
        });

        addTodoContainer.appendChild(addTodoButton);

        const projectTodoContainer = new TodoComponent().node;
        projectTodoContainer.hidden = true;

        parentDiv.appendChild(addTodoContainer);
        parentDiv.appendChild(projectTodoContainer);
        return parentDiv;
    }

    #createTodoListDiv() {
        const todolistDiv = document.createElement("div");
        todolistDiv.classList.add("todolist-container");
        const todoListUl = document.createElement("ul");
        this.#_project.todolist.forEach(todo => {
            const todoComponent = new TodoComponent(todo);
            const todoComponentWrapper = document.createElement("div");
            todoComponentWrapper.classList.add("todo-container-wrapper");
            todoComponentWrapper.hidden = true;
            const todoLi = document.createElement("li");
            const todoLiFlexWrapper = document.createElement("div");
            const titleDiv = document.createElement("div");
            const titleDivWrapper = document.createElement("div");
            titleDivWrapper.classList.add("title-div-wrapper");
            todoLi.setAttribute("data-id", todo.id);
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
            const detailsButton = document.createElement("button");
            const deleteButton = document.createElement("button");

            detailsButton.classList.add("confirm");
            deleteButton.classList.add("delete");
            detailsButton.textContent = "Details";
            deleteButton.textContent = "Delete";

            detailsButton.addEventListener("click", (e) => {
                e.preventDefault();
                titleDivWrapper.hidden = true;
                todoComponentWrapper.hidden = false;
            })

            buttons.appendChild(detailsButton);
            buttons.appendChild(deleteButton);

            todoLiFlexWrapper.appendChild(titleDiv);
            todoLiFlexWrapper.appendChild(buttons);
            titleDivWrapper.appendChild(todoLiFlexWrapper);
            todoLi.appendChild(titleDivWrapper);
            todoComponentWrapper.appendChild(todoComponent.node);
            todoLi.appendChild(todoComponentWrapper);
            todoListUl.appendChild(todoLi);
        });
        todolistDiv.appendChild(todoListUl);
        return todolistDiv;
    }
}