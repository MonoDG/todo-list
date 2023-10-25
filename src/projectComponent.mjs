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
        projectContainer.appendChild(this.#createNewTaskDiv());
        projectContainer.appendChild(this.#createTodoListDiv());
        this.#_node = projectContainer;
    }

    #createNodeHeader() {
        const projectHeader = document.createElement("div");
        const nameSection = document.createElement("div");
        const nameInput = document.createElement("input");
        const nameButtonsHideableSection = document.createElement("div");
        const nameButtonsSubSection = document.createElement("div");
        const saveButton = document.createElement("button");
        const cancelButton = document.createElement("button");
        const optionsSection = document.createElement("div");

        projectHeader.classList.add("project-header");
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
            this.#_project.name = nameInput.value;
            sidebarProjectButton.textContent = nameInput.value;
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

        projectHeader.appendChild(nameSection);
        projectHeader.appendChild(optionsSection);
        return projectHeader;
    }

    #createNewTaskDiv() {
        const addNewTaskDiv = document.createElement("div");
        return addNewTaskDiv;
    }

    #createTodoListDiv() {
        const todolistDiv = document.createElement("div");
        return todolistDiv;
    }
}