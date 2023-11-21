import './style.css';
import ProfileImage from "./images/chick.png";

const profileImageElement = document.querySelector("#profile-image");
profileImageElement.src = ProfileImage;

const sidebar = document.querySelector("aside");
const divProjectAddCollapse = document.querySelector("#div-project-add-collapse");
const sidebarProjectItemsDiv = document.querySelector(".sidebar__project_items");
const btnCollapseProjects = document.querySelector("#projects-collapse");
const btnDisplayDiagNewProject = document.querySelector("#btn-display-diag-new-project");
const btnCloseDiagNewProject = document.querySelector("#btn-close-diag-new-project")
const diagNewProject = document.querySelector("#diag-new-project");

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

btnCloseDiagNewProject.addEventListener("click", () => {
    diagNewProject.close();
})