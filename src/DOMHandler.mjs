const sidebar = document.querySelector(".sidebar");
const btnCollapseSidebar = document.querySelector("#btn-collapse-sidebar");

function toggleSidebar() {
    if (sidebar.classList.contains("sidebar-collapsed")) {
        sidebar.classList.remove("sidebar-collapsed");
        // If mobile display only, toggle hamburguer icon for an X icon
        if (getComputedStyle(sidebar).position === "relative") {
            btnCollapseSidebar.firstChild.textContent = "close";
        }
    } else {
        sidebar.classList.add("sidebar-collapsed");
        // If mobile display only, toggle hamburguer icon for an X icon
        if (getComputedStyle(sidebar).position === "relative") {
            btnCollapseSidebar.firstChild.textContent = "menu";
        }
    }
}

function setupSidebar() {
    const projectList = document.createElement("ul");
    projectList.setAttribute("id", "projects");
    projectList.classList.add("projects");
    sidebar.appendChild(projectList);
}


function DOMHandler() {
    btnCollapseSidebar.addEventListener("click", toggleSidebar);
    setupSidebar();
    toggleSidebar();
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