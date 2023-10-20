const sidebar = document.querySelector(".sidebar");
const btnOpenSidebar = document.querySelector("#btn-open-sidebar");
const btnCloseSidebar = document.querySelector("#btn-close-sidebar");
const main = document.querySelector(".main");

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
    const addNewProjectLi = document.createElement("li");
    const addNewProjectBtn = document.createElement("button");

    addNewProjectBtn.addEventListener("click", createNewProject);
    addNewProjectBtn.setAttribute("id", "btn-create-project");
    addNewProjectBtn.classList.add("btn-create-project");
    addNewProjectBtn.textContent = "+ New Project";
    addNewProjectLi.appendChild(addNewProjectBtn);
    projectList.appendChild(addNewProjectLi);

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
}

function createNewProject() {
    console.log("Creating new project");
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