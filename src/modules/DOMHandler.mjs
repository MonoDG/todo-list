function createProjectSidebarItem(project) {
    const button = document.createElement("button");
    button.id = project.id;
    button.classList.add("ghost", "rounded-5", "sidebar__item");
    button.textContent = project.name;


    button.addEventListener("click", () => {
        const allSidebarItems = document.querySelectorAll(".sidebar__item:not(#sidebar-projects-title)");
        allSidebarItems.forEach(item => item.classList.remove("active", "bold"));
        button.classList.add("active", "bold");
    })

    return button;
}

export { createProjectSidebarItem };