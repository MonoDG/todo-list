import { format, parseISO } from "date-fns";
import Todo from '../modules/todo.mjs';
import { DATE_FORMAT } from "../utils/constants.mjs";

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
        const projectContainer = document.querySelector("#project-page");
        projectContainer.appendChild(this.#createHeader());
        projectContainer.appendChild(this.#createAddTodoSection());
        projectContainer.appendChild(this.#createTodosDiv());
        this.#_node = projectContainer;
    }

    #createHeader() {
        const header = document.createElement("div");
        header.classList.add("project-header", "flex", "justified-between", "aligned-center", "gap-10");

        const form = document.createElement("form");
        form.classList.add("flex", "flex-col", "gap-10");

        const labelProjectTitle = document.createElement("label");
        labelProjectTitle.classList.add("project-title", "ghost", "rounded-5", "px-5", "bold");
        labelProjectTitle.id = "lbl-project-title";
        labelProjectTitle.setAttribute("for", "input-project-title");
        labelProjectTitle.textContent = this.#_project.name;

        const inputProjectTitle = document.createElement("input");
        inputProjectTitle.classList.add("project-title", "rounded-5", "px-5", "bold", "hidden");
        inputProjectTitle.id = "input-project-title";
        inputProjectTitle.setAttribute("type", "text");
        inputProjectTitle.value = this.#_project.name;

        const divFormButtons = document.createElement("div");
        divFormButtons.classList.add("flex", "gap-5", "hidden");

        const btnSaveProject = document.createElement("button");
        btnSaveProject.id = "btn-save-project-title";
        btnSaveProject.classList.add("bg-red", "rounded-5", "px-5", "bold");
        btnSaveProject.textContent = "Save";

        const btnCancelProject = document.createElement("button");
        btnCancelProject.id = "btn-cancel-project-title";
        btnCancelProject.classList.add("ghost", "rounded-5", "px-5", "bold");
        btnCancelProject.textContent = "Cancel";

        divFormButtons.appendChild(btnSaveProject);
        divFormButtons.appendChild(btnCancelProject);

        form.appendChild(labelProjectTitle);
        form.appendChild(inputProjectTitle);
        form.appendChild(divFormButtons);

        const divOtherButtons = document.createElement("div");
        divOtherButtons.classList.add("button-group", "flex", "gap-5");

        const btnShare = document.createElement("button");
        btnShare.classList.add("flex", "gap-5", "ghost", "aligned-center", "rounded-5", "px-5");

        const iconShare = document.createElement("iconify-icon");
        iconShare.setAttribute("icon", "mdi:account-plus-outline");
        iconShare.setAttribute("flip", "horizontal");

        const iconShareSpan = document.createElement("span");
        iconShareSpan.textContent = "Share";
        btnShare.appendChild(iconShare);
        btnShare.appendChild(iconShareSpan);

        const btnView = document.createElement("button");
        btnView.classList.add("flex", "gap-5", "ghost", "aligned-center", "rounded-5", "px-5");

        const iconView = document.createElement("iconify-icon");
        iconView.setAttribute("icon", "mdi:view-dashboard-edit-outline");

        const iconViewSpan = document.createElement("span");
        iconViewSpan.textContent = "View";

        btnView.appendChild(iconView);
        btnView.appendChild(iconViewSpan);

        const btnComments = document.createElement("button");
        btnComments.classList.add("flex", "gap-5", "ghost", "aligned-center", "rounded-5", "px-5");

        const iconComments = document.createElement("iconify-icon");
        iconComments.setAttribute("icon", "mdi:comment-outline");

        const iconCommentsSpan = document.createElement("span");
        iconCommentsSpan.textContent = "Comments";

        btnComments.appendChild(iconComments);
        btnComments.appendChild(iconCommentsSpan);

        const btnDots = document.createElement("button");
        btnDots.classList.add("flex", "ghost", "aligned-center", "rounded-5", "px-5");

        const iconDots = document.createElement("iconify-icon");
        iconDots.setAttribute("icon", "mdi:dots-horizontal");

        const iconDotsSpan = document.createElement("span");

        btnDots.appendChild(iconDots);
        btnDots.appendChild(iconDotsSpan);

        divOtherButtons.appendChild(btnShare);
        divOtherButtons.appendChild(btnView);
        divOtherButtons.appendChild(btnComments);
        divOtherButtons.appendChild(btnDots);

        header.appendChild(form);
        header.appendChild(divOtherButtons);

        // Add event listeners
        labelProjectTitle.addEventListener("click", () => {
            labelProjectTitle.classList.add("hidden");
            inputProjectTitle.classList.remove("hidden")
            divFormButtons.classList.remove("hidden");
        });

        inputProjectTitle.addEventListener("input", () => {
            btnSaveProject.disabled = inputProjectTitle.value === "";
        })

        btnSaveProject.addEventListener("click", (e) => {
            e.preventDefault();
            this.#_project.name = inputProjectTitle.value;
            labelProjectTitle.textContent = this.#_project.name;
            inputProjectTitle.value = this.#_project.name;
            const sidebarProjectItem = document.querySelector(`[data-id="${this.#_project.id}"]`);
            sidebarProjectItem.textContent = this.#_project.name;
            labelProjectTitle.classList.remove("hidden")
            inputProjectTitle.classList.add("hidden");
            divFormButtons.classList.add("hidden");
        })

        btnCancelProject.addEventListener("click", (e) => {
            e.preventDefault();
            inputProjectTitle.value = this.#_project.name;
            divFormButtons.classList.add("hidden");
            inputProjectTitle.classList.add("hidden");
            labelProjectTitle.classList.remove("hidden");
        })

        return header;
    }

    #createAddTodoSection() {
        const todoSection = document.createElement("div");
        todoSection.classList.add("add-todo-section");
        const buttonDisplayForm = document.createElement("button");
        buttonDisplayForm.classList.add("flex", "ghost", "hover-red", "aligned-center", "rounded-5", "px-5");
        const iconPlus = document.createElement("iconify-icon");
        iconPlus.setAttribute("icon", "material-symbols-light:add")
        buttonDisplayForm.appendChild(iconPlus);
        const spanText = document.createElement("span");
        spanText.textContent = "Add Todo";
        buttonDisplayForm.appendChild(spanText);
        const formAddTodo = document.createElement("form");
        formAddTodo.classList.add("add-todo-form", "hidden", "border-light", "rounded-5");
        // input
        const inputTodoTitle = document.createElement("input");
        inputTodoTitle.setAttribute("type", "text");
        inputTodoTitle.classList.add("project-title", "px-5", "rounded-5", "bold");
        inputTodoTitle.placeholder = "Todo title";
        inputTodoTitle.id = "inputNewTodoTitle";
        inputTodoTitle.required = true;
        // textarea
        const textAreaTodoDescription = document.createElement("textarea");
        textAreaTodoDescription.placeholder = "Description";
        textAreaTodoDescription.id = "txtAreaTodoDescription";
        // div with 4 butons left aligned
        const divOtherButtons = document.createElement("div");
        divOtherButtons.classList.add("flex", "aligned-center", "gap-5");
        const inputDueDate = document.createElement("input");
        inputDueDate.setAttribute("type", "date");
        inputDueDate.classList.add("px-5");
        inputDueDate.id = "input-due-date";
        inputDueDate.value = format(new Date(), "yyyy-MM-dd");
        divOtherButtons.appendChild(inputDueDate);

        const selectPriority = document.createElement("select");
        selectPriority.classList.add("px-5");
        selectPriority.id = "select-priority";
        for (let i = 0; i < 4; i++) {
            const priority = document.createElement("option");
            priority.value = i + 1;
            priority.textContent = `Priority ${i + 1}`;
            selectPriority.appendChild(priority);
        }
        divOtherButtons.appendChild(selectPriority);
        // div with 3 buttons 1 left aligned, 2 right aligned
        const divSumbitButtons = document.createElement("div");
        divSumbitButtons.classList.add("flex", "aligned-center", "justified-end", "border-top", "gap-10", "px-5", "py-5");

        const btnCancelAddTodo = document.createElement("button");
        btnCancelAddTodo.classList.add("ghost", "rounded-5", "px-5", "bold");
        btnCancelAddTodo.textContent = "Cancel";

        const btnAddTodo = document.createElement("button");
        btnAddTodo.classList.add("bg-red", "light", "rounded-5", "px-5", "bold");
        btnAddTodo.textContent = "Add todo";
        btnAddTodo.disabled = true;

        divSumbitButtons.appendChild(btnCancelAddTodo);
        divSumbitButtons.appendChild(btnAddTodo);

        formAddTodo.appendChild(inputTodoTitle);
        formAddTodo.appendChild(textAreaTodoDescription);
        formAddTodo.appendChild(divOtherButtons);
        formAddTodo.appendChild(divSumbitButtons);

        buttonDisplayForm.addEventListener("click", () => {
            buttonDisplayForm.classList.add("hidden");
            formAddTodo.classList.remove("hidden");
        });

        btnCancelAddTodo.addEventListener("click", (e) => {
            e.preventDefault();
            buttonDisplayForm.classList.remove("hidden");
            formAddTodo.classList.add("hidden");
            inputTodoTitle.value = "";
            textAreaTodoDescription.value = "";
            inputDueDate.value = format(new Date(), "yyyy-MM-dd");
            selectPriority.value = 1;
            btnAddTodo.disabled = true;
        })

        inputTodoTitle.addEventListener("input", () => {
            btnAddTodo.disabled = inputTodoTitle.value === "";

        })

        btnAddTodo.addEventListener("click", (e) => {
            let isFormValid = formAddTodo.checkValidity();
            if (!isFormValid) {
                formAddTodo.reportValidity();
            } else {
                e.preventDefault();
                let newTodo = new Todo(this.#_project.id, inputTodoTitle.value, textAreaTodoDescription.value, format(parseISO(inputDueDate.value), DATE_FORMAT), selectPriority.value);
                this.#_project.todolist.push(newTodo);
                btnCancelAddTodo.click();
                const todosDiv = document.querySelector(".project-todos");
                this.#appendTodo(todosDiv, newTodo);
            }
        })

        todoSection.appendChild(buttonDisplayForm);
        todoSection.appendChild(formAddTodo);
        return todoSection;
    }

    #createTodosDiv() {
        const todosDiv = document.createElement("div");
        todosDiv.classList.add("project-todos", "flex", "flex-col");

        this.#_project.todolist.forEach(todo => {
            this.#appendTodo(todosDiv, todo);
        });

        return todosDiv;
    }

    #appendTodo(parent, todo) {
        // parent.classList.add("border-light", "rounded-5");
        let todoItem = document.createElement("details");
        todoItem.setAttribute("data-id", todo.id);
        todoItem.classList.add("todo-item", "flex", "justified-between", "aligned-center", "gap-10", "bold", "border-jet-black", "rounded-5");
        let todoSummary = document.createElement("summary");
        todoSummary.classList.add("flex", "justified-between", "aligned-center");
        let todoSummaryContent = document.createElement("span");
        todoSummaryContent.textContent = todo.title;
        todoSummary.appendChild(todoSummaryContent);
        // Edit Todo Form
        const formEditTodo = document.createElement("form");
        formEditTodo.classList.add("edit-todo-form");
        // input
        const inputTodoTitle = document.createElement("input");
        inputTodoTitle.setAttribute("type", "text");
        inputTodoTitle.classList.add("project-title", "px-5", "rounded-5", "bold");
        inputTodoTitle.placeholder = "Todo title";
        inputTodoTitle.id = "inputEditTodoTitle";
        inputTodoTitle.required = true;
        inputTodoTitle.value = todo.title;
        inputTodoTitle.setAttribute("readonly", true);
        // textarea
        const textAreaTodoDescription = document.createElement("textarea");
        textAreaTodoDescription.placeholder = "Description";
        textAreaTodoDescription.id = "txtAreaEditTodoDescription";
        textAreaTodoDescription.value = todo.description;
        textAreaTodoDescription.setAttribute("readonly", true);
        // div with 4 butons left aligned
        const divOtherButtons = document.createElement("div");
        divOtherButtons.classList.add("flex", "aligned-center", "gap-5");
        const inputDueDate = document.createElement("input");
        inputDueDate.setAttribute("type", "date");
        inputDueDate.classList.add("px-5");
        inputDueDate.id = "edit-input-due-date";
        inputDueDate.value = todo.dueDate;
        inputDueDate.setAttribute("readonly", true);
        divOtherButtons.appendChild(inputDueDate);

        const selectPriority = document.createElement("select");
        selectPriority.classList.add("px-5");
        selectPriority.id = "edit-select-priority";
        for (let i = 0; i < 4; i++) {
            const priority = document.createElement("option");
            priority.value = i + 1;
            priority.textContent = `Priority ${i + 1}`;
            selectPriority.appendChild(priority);
        }
        selectPriority.value = todo.priority;
        selectPriority.disabled = true;
        divOtherButtons.appendChild(selectPriority);
        // div with 3 buttons 1 left aligned, 2 right aligned
        const divSumbitButtons = document.createElement("div");
        divSumbitButtons.classList.add("flex", "aligned-center", "hidden", "justified-end", "border-top", "gap-10", "px-5", "py-5");

        const btnCancelEditTodo = document.createElement("button");
        btnCancelEditTodo.classList.add("ghost", "rounded-5", "px-5", "bold");
        btnCancelEditTodo.textContent = "Cancel";

        const btnEditTodo = document.createElement("button");
        btnEditTodo.classList.add("bg-blue", "light", "rounded-5", "px-5", "bold");
        btnEditTodo.textContent = "Edit todo";

        divSumbitButtons.appendChild(btnCancelEditTodo);
        divSumbitButtons.appendChild(btnEditTodo);

        formEditTodo.appendChild(inputTodoTitle);
        formEditTodo.appendChild(textAreaTodoDescription);
        formEditTodo.appendChild(divOtherButtons);
        formEditTodo.appendChild(divSumbitButtons);

        btnCancelEditTodo.addEventListener("click", (e) => {
            e.preventDefault();
            inputTodoTitle.value = todo.title;
            textAreaTodoDescription.value = todo.description;
            inputDueDate.value = todo.dueDate;
            selectPriority.value = todo.priority;
            inputTodoTitle.setAttribute("readonly", true);
            textAreaTodoDescription.setAttribute("readonly", true);
            inputDueDate.setAttribute("readonly", true);
            selectPriority.disabled = true;
            divSumbitButtons.classList.add("hidden");
        })

        inputTodoTitle.addEventListener("input", () => {
            btnEditTodo.disabled = inputTodoTitle.value === "";
        })

        btnEditTodo.addEventListener("click", (e) => {
            let isFormValid = formEditTodo.checkValidity();
            if (!isFormValid) {
                formEditTodo.reportValidity();
            } else {
                e.preventDefault();
                // let newTodo = new Todo(this.#_project.id, inputTodoTitle.value, textAreaTodoDescription.value, format(parseISO(inputDueDate.value), DATE_FORMAT), selectPriority.value);
                // this.#_project.todolist.push(newTodo);
                // btnCancelAddTodo.click();
                // const todosDiv = document.querySelector(".project-todos");
                // this.#appendTodo(todosDiv, newTodo);

                // TODO edit actual todo instance with modified content
                todo.title = inputTodoTitle.value;
                todo.description = textAreaTodoDescription.value;
                todo.dueDate = format(parseISO(inputDueDate.value), DATE_FORMAT);
                todo.priority = selectPriority.value;
                todoSummaryContent.textContent = todo.title;
                inputTodoTitle.setAttribute("readonly", true);
                textAreaTodoDescription.setAttribute("readonly", true);
                inputDueDate.setAttribute("readonly", true);
                selectPriority.disabled = true;
                todoItem.open = false;
            }
        })
        // End Edit Todo Form

        let todoSummaryButtons = document.createElement("div");
        todoSummaryButtons.classList.add("flex", "gap-5");

        let btnDisplayEditTodo = document.createElement("button");
        btnDisplayEditTodo.classList.add("bg-blue", "light", "bold", "rounded-5", "px-5", "py-5");
        btnDisplayEditTodo.textContent = "Edit";
        todoSummaryButtons.appendChild(btnDisplayEditTodo);

        btnDisplayEditTodo.addEventListener("click", () => {
            todoItem.open = true;
            formEditTodo.classList.remove("hidden");
            inputTodoTitle.removeAttribute("readonly");
            textAreaTodoDescription.removeAttribute("readonly");
            inputDueDate.removeAttribute("readonly");
            selectPriority.disabled = false;
            divSumbitButtons.classList.remove("hidden");
        })

        let btnDeleteTodo = document.createElement("button");
        btnDeleteTodo.classList.add("bg-red", "light", "bold", "rounded-5", "px-5", "py-5");
        btnDeleteTodo.textContent = "Delete";

        btnDeleteTodo.addEventListener("click", () => {
            this.#_project.removeTodo(todo.id)
            parent.removeChild(todoItem);
            // if (this.#_project.todolist.length === 0) {
            //     parent.classList.remove("border-light", "rounded-5");
            // }
        })

        todoSummaryButtons.appendChild(btnDeleteTodo);

        let todoDetails = document.createElement("div");
        todoDetails.appendChild(formEditTodo);

        todoSummary.appendChild(todoSummaryButtons);
        todoItem.appendChild(todoSummary);
        todoItem.appendChild(todoDetails);
        parent.appendChild(todoItem);
    }

    // #createNameSection() {
    //     const nameSection = document.createElement("div");
    //     const nameInput = document.createElement("input");
    //     const nameButtonsHideableSection = document.createElement("div");
    //     const nameButtonsSubSection = document.createElement("div");
    //     const saveButton = document.createElement("button");
    //     const cancelButton = document.createElement("button");

    //     nameSection.classList.add("project-name-container");
    //     saveButton.classList.add("confirm");
    //     cancelButton.classList.add("cancel");

    //     nameInput.value = this.#_project.name;
    //     nameInput.addEventListener("click", () => {
    //         nameInput.classList.add("editable");
    //         nameButtonsHideableSection.hidden = false;
    //     })
    //     nameSection.appendChild(nameInput);

    //     saveButton.textContent = "Save";
    //     cancelButton.textContent = "Cancel";

    //     saveButton.addEventListener("click", () => {
    //         const sidebarProjectButton = document.querySelector(`button[data-id="${this.#_project.id}"]`);
    //         this.#_project.name = nameInput.value.trim();
    //         nameInput.value = this.#_project.name;
    //         sidebarProjectButton.textContent = this.#_project.name;
    //         nameButtonsHideableSection.hidden = true;
    //         nameInput.classList.remove("editable");
    //     });

    //     cancelButton.addEventListener("click", () => {
    //         nameInput.value = this.#_project.name;
    //         nameButtonsHideableSection.hidden = true;
    //         nameInput.classList.remove("editable");
    //     })

    //     nameButtonsHideableSection.hidden = true;
    //     nameButtonsSubSection.appendChild(saveButton);
    //     nameButtonsSubSection.appendChild(cancelButton);

    //     nameButtonsHideableSection.appendChild(nameButtonsSubSection);
    //     nameSection.appendChild(nameButtonsHideableSection);
    //     return nameSection;
    // }

    // #createOptionsSection() {
    //     // For the moment, just the option to delete the project
    //     const optionsSection = document.createElement("div");
    //     const deleteButton = document.createElement("button");

    //     optionsSection.classList.add("project-options-container");
    //     deleteButton.classList.add("delete");
    //     deleteButton.textContent = "Delete";
    //     deleteButton.addEventListener("click", () => {
    //         const projectList = document.querySelector(".projects");
    //         const projectToRemove = document.querySelector(`button[data-id="${this.#_project.id}"]`).parentElement;
    //         projectList.removeChild(projectToRemove);
    //         // TODO remove from local storage project list when implemented
    //         delete projects[this.project.id];
    //         // TODO change to project list overview instead
    //         document.querySelector(".main").replaceChildren();
    //     });

    //     optionsSection.appendChild(deleteButton);
    //     return optionsSection;
    // }

    // #createNewTaskDiv() {
    //     const addTaskContainer = document.createElement("div");
    //     addTaskContainer.classList.add("add-task-container");

    //     const placeHolderAddTask = document.createElement("div");
    //     const placeholderAddButton = document.createElement("button");

    //     const addNewTaskDiv = document.createElement("div");
    //     addNewTaskDiv.classList.add("new-task-div");

    //     const addNewTaskForm = document.createElement("form");
    //     addNewTaskForm.id = "add-new-task-form";

    //     const taskNameInput = document.createElement("input");
    //     taskNameInput.placeholder = "Task name";
    //     taskNameInput.classList.add("bold");
    //     const taskDescriptionInput = document.createElement("input");
    //     taskDescriptionInput.placeholder = "Description";

    //     const buttonsContainer = document.createElement("div");
    //     const dueDateInput = document.createElement("input");
    //     dueDateInput.type = "datetime-local";
    //     dueDateInput.id = "due-date";
    //     dueDateInput.name = "due-date";
    //     dueDateInput.value = formatISO(new Date()).slice(0, 16);

    //     const prioritySelect = document.createElement("select");
    //     [1, 2, 3, 4].forEach(value => {
    //         const priorityOption = document.createElement("option");
    //         priorityOption.value = value;
    //         priorityOption.textContent = `Priority ${value}`;
    //         prioritySelect.appendChild(priorityOption);
    //     });

    //     const submitButtonsContainer = document.createElement("div");
    //     const cancelButton = document.createElement("button");
    //     const saveButton = document.createElement("button");

    //     cancelButton.classList.add("cancel");
    //     saveButton.classList.add("confirm");

    //     cancelButton.textContent = "Cancel";
    //     saveButton.textContent = "Add task";
    //     saveButton.disabled = true;
    //     saveButton.type = "submit";

    //     cancelButton.addEventListener("click", e => {
    //         e.preventDefault();
    //         placeHolderAddTask.hidden = false;
    //         addNewTaskDiv.hidden = true;
    //     })

    //     saveButton.addEventListener("click", e => {
    //         e.preventDefault();
    //         console.log("Addint new task to project " + this.#_project.name);
    //     })

    //     taskNameInput.addEventListener("input", () => {
    //         if (taskNameInput.value === "") {
    //             saveButton.disabled = true;
    //         } else {
    //             saveButton.disabled = false;
    //         }
    //     })

    //     submitButtonsContainer.appendChild(cancelButton);
    //     submitButtonsContainer.appendChild(saveButton);

    //     buttonsContainer.appendChild(dueDateInput);
    //     buttonsContainer.appendChild(prioritySelect);

    //     addNewTaskForm.appendChild(taskNameInput);
    //     addNewTaskForm.appendChild(taskDescriptionInput);
    //     addNewTaskForm.appendChild(buttonsContainer);
    //     addNewTaskForm.appendChild(submitButtonsContainer);

    //     addNewTaskDiv.appendChild(addNewTaskForm);

    //     addNewTaskDiv.hidden = true;

    //     placeHolderAddTask.classList.add("add-task-placeholder-div");
    //     placeholderAddButton.textContent = "+ Add Task";
    //     placeholderAddButton.addEventListener("click", e => {
    //         e.preventDefault();
    //         placeHolderAddTask.hidden = true;
    //         addNewTaskDiv.hidden = false;
    //     });

    //     placeHolderAddTask.appendChild(placeholderAddButton);

    //     addTaskContainer.appendChild(placeHolderAddTask);
    //     addTaskContainer.appendChild(addNewTaskDiv);

    //     return addTaskContainer;
    // }

    // #createAddTodoPlaceholder() {
    //     const parentDiv = document.createElement("div");
    //     const addTodoContainer = document.createElement("div");
    //     const addTodoButton = document.createElement("button");

    //     addTodoContainer.classList.add("add-task-placeholder-div");
    //     addTodoButton.textContent = "+ Add Task";
    //     addTodoButton.addEventListener("click", e => {
    //         e.preventDefault();
    //         addTodoContainer.hidden = true;
    //         projectTodoContainer.hidden = false;
    //     });

    //     addTodoContainer.appendChild(addTodoButton);

    //     const projectTodoContainer = new TodoComponent().node;
    //     projectTodoContainer.hidden = true;

    //     parentDiv.appendChild(addTodoContainer);
    //     parentDiv.appendChild(projectTodoContainer);
    //     return parentDiv;
    // }

    // #createTodoListDiv() {
    //     const todolistDiv = document.createElement("div");
    //     todolistDiv.classList.add("todolist-container");
    //     const todoListUl = document.createElement("ul");
    //     this.#_project.todolist.forEach(todo => {
    //         const todoComponent = new TodoComponent(todo);
    //         const todoComponentWrapper = document.createElement("div");
    //         todoComponentWrapper.classList.add("todo-container-wrapper");
    //         todoComponentWrapper.hidden = true;
    //         const todoLi = document.createElement("li");
    //         const todoLiFlexWrapper = document.createElement("div");
    //         const titleDiv = document.createElement("div");
    //         const titleDivWrapper = document.createElement("div");
    //         titleDivWrapper.classList.add("title-div-wrapper");
    //         todoLi.setAttribute("data-id", todo.id);
    //         const titleCheckCompleted = document.createElement("input");
    //         titleCheckCompleted.type = "checkbox";
    //         titleDiv.appendChild(titleCheckCompleted);
    //         const titleTextContent = document.createElement("span");
    //         titleTextContent.textContent = todo.title;
    //         titleDiv.appendChild(titleTextContent);

    //         titleCheckCompleted.addEventListener("change", () => {
    //             if (titleCheckCompleted.checked) {
    //                 titleTextContent.classList.add("completed");
    //                 todo.state = TODO_STATE.COMPLETED;
    //             } else {
    //                 titleTextContent.classList.remove("completed");
    //                 todo.state = TODO_STATE.TODO;
    //             }
    //         });

    //         const buttons = document.createElement("div");
    //         const detailsButton = document.createElement("button");
    //         const deleteButton = document.createElement("button");

    //         detailsButton.classList.add("confirm");
    //         deleteButton.classList.add("delete");
    //         detailsButton.textContent = "Details";
    //         deleteButton.textContent = "Delete";

    //         detailsButton.addEventListener("click", (e) => {
    //             e.preventDefault();
    //             titleDivWrapper.hidden = true;
    //             todoComponentWrapper.hidden = false;
    //         })

    //         buttons.appendChild(detailsButton);
    //         buttons.appendChild(deleteButton);

    //         todoLiFlexWrapper.appendChild(titleDiv);
    //         todoLiFlexWrapper.appendChild(buttons);
    //         titleDivWrapper.appendChild(todoLiFlexWrapper);
    //         todoLi.appendChild(titleDivWrapper);
    //         todoComponentWrapper.appendChild(todoComponent.node);
    //         todoLi.appendChild(todoComponentWrapper);
    //         todoListUl.appendChild(todoLi);
    //     });
    //     todolistDiv.appendChild(todoListUl);
    //     return todolistDiv;
    // }
}