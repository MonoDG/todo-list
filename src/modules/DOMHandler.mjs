import ProjectComponent from "../components/projectComponent.mjs";

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
    divProjectPage.replaceChildren();
    divProjectPage.appendChild(new ProjectComponent(project).node);

}

export { createProjectSidebarItem, loadProjectPage };