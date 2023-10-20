const sidebar = document.querySelector(".sidebar");
const btnCollapseSidebar = document.querySelector("#btn-collapse-sidebar");
const main = document.querySelector(".main");

function toggleSidebar() {
    if (sidebar.classList.contains("sidebar-collapsed")) {
        sidebar.classList.remove("sidebar-collapsed");
        setSidebarIconInMobileDisplay("close");
    } else {
        sidebar.classList.add("sidebar-collapsed");
        setSidebarIconInMobileDisplay("menu");
    }
}

// If mobile display only, toggle hamburguer icon for an X icon
function setSidebarIconInMobileDisplay(icon) {
    if (getComputedStyle(sidebar).position === "relative") {
        btnCollapseSidebar.firstChild.textContent = icon;
    }
}

function setupSidebar() {
    const projectList = document.createElement("ul");
    projectList.setAttribute("id", "projects");
    projectList.classList.add("projects");
    sidebar.appendChild(projectList);

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
    btnCollapseSidebar.addEventListener("click", toggleSidebar);
    main.addEventListener("click", () => {
        if (getComputedStyle(sidebar).position === "relative" &&
            !sidebar.classList.contains("sidebar-collapsed")) {
            toggleSidebar();
        }
    });
    setupSidebar();
    toggleSidebar();
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