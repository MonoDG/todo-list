import { formatISO } from "date-fns";

export default class TodoComponent {
    #_todo
    #_node

    constructor(todo) {
        this.#_todo = todo;
        this.#setupNode();
    }

    get todo() { return this.#_todo; };
    get node() { return this.#_node; };

    set todo(value) { this.#_todo = value; };
    set node(value) { this.#_node = value; };

    #setupNode() {
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo-container");

        const todoForm = document.createElement("form");

        const todoTitle = document.createElement("input");
        if (this.#_todo) {
            todoTitle.value = this.#_todo.title;
        } else {
            todoTitle.placeholder = "Task title";
        }
        todoTitle.classList.add("bold");

        const todoDescription = document.createElement("input");
        if (this.#_todo) {
            todoDescription.value = this.#_todo.description;
        } else {
            todoDescription.placeholder = "Description";
        }

        const otherInputsContainer = document.createElement("div");
        const dueDate = document.createElement("input");
        dueDate.type = "datetime-local";
        dueDate.name = "due-date";
        dueDate.value = formatISO(new Date()).slice(0, 16);

        const priority = document.createElement("select");
        [1, 2, 3, 4].forEach(value => {
            const option = document.createElement("option");
            option.value = value;
            option.textContent = `Priority ${value}`;
            priority.appendChild(option);
        });

        const bottomContainer = document.createElement("div");
        const cancelButton = document.createElement("button");
        const saveButton = document.createElement("button");

        cancelButton.classList.add("cancel");
        saveButton.classList.add("confirm");

        cancelButton.textContent = "Cancel";
        if (this.#_todo) {
            saveButton.textContent = "Save";
            saveButton.disabled = false;
        } else {
            saveButton.textContent = "Add task";
            saveButton.disabled = true;
        }
        saveButton.type = "submit";

        cancelButton.addEventListener("click", e => {
            e.preventDefault();
            todoContainer.hidden = true;
            if (this.#_todo) {
                document.querySelector(`li[data-id="${this.#_todo.id}"] .title-div-wrapper`).hidden = false;
                document.querySelector(`li[data-id="${this.#_todo.id}"] .todo-container-wrapper`).hidden = true;
            } else {
                document.querySelector(".add-task-placeholder-div").hidden = false;
            }
        });

        saveButton.addEventListener("click", e => {
            e.preventDefault();
            console.log("Save modifications to Todo");
        });

        todoTitle.addEventListener("input", () => {
            if (todoTitle.value === "") {
                saveButton.disabled = true;
            } else {
                saveButton.disabled = false;
            }
        });

        bottomContainer.appendChild(cancelButton);
        bottomContainer.appendChild(saveButton);

        otherInputsContainer.appendChild(dueDate);
        otherInputsContainer.appendChild(priority);

        todoForm.appendChild(todoTitle);
        todoForm.appendChild(todoDescription);
        todoForm.appendChild(otherInputsContainer);
        todoForm.appendChild(bottomContainer);

        todoContainer.appendChild(todoForm);

        this.#_node = todoContainer;
    }
}