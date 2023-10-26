import Project from './project.mjs';
import Todo from './todo.mjs';
import ProjectComponent from './projectComponent.mjs';

const sidebar = document.querySelector(".sidebar");
const btnOpenSidebar = document.querySelector("#btn-open-sidebar");
const btnCloseSidebar = document.querySelector("#btn-close-sidebar");
const main = document.querySelector(".main");
const newProjectDialog = document.querySelector("#new-project-dialog");
const editProjectDialog = document.querySelector("#edit-project-dialog");
const closeBtnNewProjectDialog = document.querySelector("#close-new-project-dialog");
const confirmBtnNewProjectDialog = document.querySelector("#confirm-new-project-dialog");
const closeBtnEditProjectDialog = document.querySelector("#close-edit-project-dialog");
const confirmBtnEditProjectDialog = document.querySelector("#confirm-edit-project-dialog");

const projects = {};

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
    });

    editProjectDialog.addEventListener("click", e => {
        if (e.target.id === "edit-project-dialog") {
            editProjectDialog.close();
            resetEditProjectDialog();
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

    closeBtnEditProjectDialog.addEventListener("click", () => {
        editProjectDialog.close();
        resetEditProjectDialog();
    });

    confirmBtnEditProjectDialog.addEventListener("click", () => {
        const editProjectName = document.querySelector("#edit-project-name");
        const editProjectId = document.querySelector("#edit-project-id");
        if (editProjectName.value !== "") {
            const project = projects[editProjectId.value];
            project.name = editProjectName.value;

            const btnProject = document.querySelector(`button[data-id="${project.id}"]`);
            btnProject.textContent = project.name;
        }
    });

    const myDefaultProject = new Project("Default");
    myDefaultProject.addTodos([new Todo(myDefaultProject.id, "Title 1", "Description 1", "Tomorrow", 1), new Todo(myDefaultProject.id, "Title 2", "Description 2", "Today", 2)]);
    addProject(myDefaultProject);
    const addedProjectItem = document.querySelector(`button[data-id="${myDefaultProject.id}"]`);
    showProjectDetails(addedProjectItem);
}

function resetNewProjectDialog() {
    const newProjectName = document.querySelector("#project-name");
    newProjectName.value = "";
}

function resetEditProjectDialog() {
    const editProjectName = document.querySelector("#edit-project-name");
    const editProjectId = document.querySelector("#edit-project-id");
    editProjectName.value = "";
    editProjectId.value = "";
}

function createNewProject() {
    newProjectDialog.showModal();
}

function addProject(project) {
    const projectList = document.querySelector(".projects");
    const projectListItem = document.createElement("li");
    const projectListItemButton = document.createElement("button");

    projectListItemButton.classList.add("btn");
    projectListItemButton.setAttribute("data-id", project.id);
    projectListItemButton.textContent = project.name;

    // Add button event handler to see project details
    projectListItemButton.addEventListener("click", e => showProjectDetails(e.target));

    const editIcon = document.createElement("span");
    editIcon.classList.add("material-symbols-outlined");
    editIcon.textContent = "edit";

    projectListItem.appendChild(projectListItemButton);
    projectList.appendChild(projectListItem);

    projects[project.id] = project;
}

function addTodo(todo) {

}

function showEditProjectDialog(e) {
    const currentProject = projects[e.currentTarget.getAttribute("data-id")]
    const editProjectName = document.querySelector("#edit-project-name");
    const editProjectId = document.querySelector("#edit-project-id");
    editProjectName.value = currentProject.name;
    editProjectId.value = currentProject.id;
    editProjectDialog.showModal();
}

function showProjectDetails(node) {
    // Clear project details section
    clearMainSection();
    // Remove active class from other project list items
    const projectItemButtons = document.querySelectorAll("button[data-id]");
    projectItemButtons.forEach(button => button.classList.remove("active"));
    // Add active class
    node.classList.add("active");
    // Create project details with current project
    main.appendChild(new ProjectComponent(projects, projects[node.getAttribute("data-id")]).node);
}

function clearMainSection() {
    main.replaceChildren();
}

export { DOMHandler, addProject, addTodo };