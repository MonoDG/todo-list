import ProjectComponent from "../components/projectComponent.mjs";

const lblProjectTitle = document.querySelector("#lbl-project-title");
const inputProjectTitle = document.querySelector("#input-project-title");
const projectHeaderSubmitBtns = document.querySelector(".project-header form>div");
const btnSaveProjectTitle = document.querySelector("#btn-save-project-title");
const btnCancelProjectTitle = document.querySelector("#btn-cancel-project-title");


function createProjectSidebarItem(project) {
    const button = document.createElement("button");
    button.setAttribute("data-id", project.id);
    button.classList.add("ghost", "rounded-5", "sidebar__item");
    button.textContent = project.name;


    button.addEventListener("click", () => {
        const allSidebarItems = document.querySelectorAll(".sidebar__item:not(#sidebar-projects-title)");
        allSidebarItems.forEach(item => item.classList.remove("active", "bold"));
        // Load project page
        loadProjectPage(project);
    })

    return button;
}

function loadProjectPage(project) {
    const sidebarProjectItem = document.querySelector(`[data-id="${project.id}"]`)
    sidebarProjectItem.classList.add("active", "bold");
    const divProjectPage = document.querySelector("#project-page");
    // divProjectPage.replaceChildren();
    // divProjectPage.appendChild(new ProjectComponent(project).node);
    lblProjectTitle.textContent = project.name;
    inputProjectTitle.value = project.name;

    lblProjectTitle.addEventListener("click", () => {
        lblProjectTitle.classList.add("hidden");
        inputProjectTitle.classList.remove("hidden")
        projectHeaderSubmitBtns.classList.remove("hidden");
    });

    inputProjectTitle.addEventListener("input", () => {
        btnSaveProjectTitle.disabled = inputProjectTitle.value === "";
    })

    btnSaveProjectTitle.addEventListener("click", (e) => {
        e.preventDefault();
        project.name = inputProjectTitle.value;
        lblProjectTitle.textContent = project.name;
        inputProjectTitle.value = project.name;
        const sidebarProjectItem = document.querySelector(`[data-id="${project.id}"]`);
        sidebarProjectItem.textContent = project.name;
        lblProjectTitle.classList.remove("hidden")
        inputProjectTitle.classList.add("hidden");
        projectHeaderSubmitBtns.classList.add("hidden");
    })

    btnCancelProjectTitle.addEventListener("click", (e) => {
        e.preventDefault();
        inputProjectTitle.value = project.name;
        projectHeaderSubmitBtns.classList.add("hidden");
        inputProjectTitle.classList.add("hidden");
        lblProjectTitle.classList.remove("hidden");
    })
}

export { createProjectSidebarItem, loadProjectPage };