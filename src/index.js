import './style.css';
import ProfileImage from "./images/chick.png";

const profileImageElement = document.querySelector("#profile-image");
profileImageElement.src = ProfileImage;

const sidebar = document.querySelector("aside");
const divProjectAddCollapse = document.querySelector("#div-project-add-collapse");
const sidebarProjectItemsDiv = document.querySelector(".sidebar__project_items");
const btnCollapseProjects = document.querySelector("#projects-collapse");
const btnDisplayDiagNewProject = document.querySelector("#btn-display-diag-new-project");
const btnConfirmNewProject = document.querySelector("#btn-confirm-new-project");
const diagNewProject = document.querySelector("#diag-new-project");
const inputProjectName = document.querySelector("#input-project-name");

sidebar.addEventListener("mouseover", () => divProjectAddCollapse.classList.remove("hidden"));
sidebar.addEventListener("mouseout", () => divProjectAddCollapse.classList.add("hidden"));

btnCollapseProjects.addEventListener("click", () => {
    btnCollapseProjects.firstElementChild.classList.toggle("hidden");
    btnCollapseProjects.lastElementChild.classList.toggle("hidden");
    sidebarProjectItemsDiv.classList.toggle("hidden");
})

btnDisplayDiagNewProject.addEventListener("click", () => {
    diagNewProject.showModal();
});

diagNewProject.addEventListener("close", (e) => {
    if (diagNewProject.returnValue !== "" && diagNewProject.returnValue !== "cancel") {
        // TODO create new project instance and add it to project array
        console.log(diagNewProject.returnValue);
    }
    inputProjectName.value = "";
    btnConfirmNewProject.disabled = true;
})

btnConfirmNewProject.addEventListener("click", (e) => {
    e.preventDefault();
    diagNewProject.close(inputProjectName.value);
})

inputProjectName.addEventListener("input", () => {
    btnConfirmNewProject.disabled = inputProjectName.value === "";
})