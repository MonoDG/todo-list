const sidebar = document.querySelector(".sidebar");
const btnOpenSidebar = document.querySelector("#btn-open-sidebar");
const btnCloseSidebar = document.querySelector("#btn-close-sidebar");
const main = document.querySelector(".main");
const newProjectDialog = document.querySelector("#new-project-dialog");
const closeBtnNewProjectDialog = document.querySelector("#new-project-dialog button");

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
        }
    })
    closeBtnNewProjectDialog.addEventListener("click", () => newProjectDialog.close());
}

function createNewProject() {
    console.log("Creating new project");
    newProjectDialog.showModal();
}

function addProject(project) {
    const projectList = document.querySelector(".projects");
    const projectListItem = document.createElement("li");
    projectListItem.setAttribute("id", project.id);
    projectListItem.textContent = project.name;
    projectList.appendChild(projectListItem);
}

function addTodo(todo) {

}

export { DOMHandler, addProject, addTodo };