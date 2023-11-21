function createProjectSidebarItem(project) {
    const button = document.createElement("button");
    button.id = project.id;
    button.classList.add("ghost", "rounded-5", "sidebar__item");
    button.textContent = project.name;
    return button;
}

export { createProjectSidebarItem };