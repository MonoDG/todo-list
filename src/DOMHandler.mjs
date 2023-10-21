import Project from './project.mjs';

const sidebar = document.querySelector(".sidebar");
const btnOpenSidebar = document.querySelector("#btn-open-sidebar");
const btnCloseSidebar = document.querySelector("#btn-close-sidebar");
const main = document.querySelector(".main");
const newProjectDialog = document.querySelector("#new-project-dialog");
const closeBtnNewProjectDialog = document.querySelector("#close-new-project-dialog");
const confirmBtnNewProjectDialog = document.querySelector("#confirm-new-project-dialog");

function openSidebar() {
    sidebar.classList.remove("sidebar-collapsed");
}

function closeSidebar() {
    sidebar.classList.add("sidebar-collapsed");
}

function setupSidebar() {
    const sidebarBody = document.querySelector(".sidebar-body");

    const projectList = document.createElement("ul");
    projectList.setAttribute("id", "projects");
    projectList.classList.add("projects");
    sidebarBody.appendChild(projectList);

    // First List Item is to add a new project
    const projectsHeaderLi = document.createElement("li");
    projectsHeaderLi.classList.add("bold");

    const projectHeaderTitle = document.createElement("span");
    const addNewProjectBtn = document.createElement("button");
    const addProjectIcon = document.createElement("span");

    addProjectIcon.classList.add("material-symbols-outlined");
    addProjectIcon.textContent = "add";

    projectHeaderTitle.textContent = "Projects"

    addNewProjectBtn.addEventListener("click", createNewProject);
    addNewProjectBtn.setAttribute("id", "btn-create-project");
    addNewProjectBtn.classList.add("btn");
    addNewProjectBtn.appendChild(addProjectIcon);

    projectsHeaderLi.appendChild(projectHeaderTitle);
    projectsHeaderLi.appendChild(addNewProjectBtn);

    projectList.appendChild(projectsHeaderLi);

}


function DOMHandler() {
    btnOpenSidebar.addEventListener("click", openSidebar);
    btnCloseSidebar.addEventListener("click", closeSidebar);
    main.addEventListener("click", () => {
        if (getComputedStyle(sidebar).position === "relative" &&
            !sidebar.classList.contains("sidebar-collapsed")) {
            closeSidebar();
        }
    });
    setupSidebar();

    newProjectDialog.addEventListener("click", e => {
        if (e.target.id === "new-project-dialog") {
            newProjectDialog.close();
            resetNewProjectDialog();
        }
    })
    closeBtnNewProjectDialog.addEventListener("click", () => {
        newProjectDialog.close();
        resetNewProjectDialog();
    });

    confirmBtnNewProjectDialog.addEventListener("click", () => {
        const newProjectName = document.querySelector("#project-name");
        if (newProjectName.value !== "") {
            const newProject = new Project(newProjectName.value);
            addProject(newProject);
        }
    });
}

function resetNewProjectDialog() {
    const newProjectName = document.querySelector("#project-name");
    newProjectName.value = "";
}

function createNewProject() {
    newProjectDialog.showModal();
}

function addProject(project) {
    const projectList = document.querySelector(".projects");
    const projectListItem = document.createElement("li");
    const projectListItemButton = document.createElement("button");

    projectListItemButton.classList.add("btn");
    projectListItemButton.setAttribute("id", project.id);
    projectListItemButton.textContent = project.name;

    projectListItem.appendChild(projectListItemButton);
    projectList.appendChild(projectListItem);
}

function addTodo(todo) {

}

export { DOMHandler, addProject, addTodo };