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

  const htmlContent = `<div id="project-page">
    <div class="project-header flex justified-between aligned-center gap-10">
      <form class="flex flex-col gap-10">
        <label for="input-project-title" class="project-title ghost rounded-5 px-5 bold"
          id="lbl-project-title"></label>
        <input type="text" class="project-title rounded-5 px-5 bold hidden" id="input-project-title">
        <div class="flex gap-5 hidden">
          <button id="btn-save-project-title" class="bg-red rounded-5 px-5 bold">Save</button>
          <button id="btn-cancel-project-title" class="bg-dark rounded-5 px-5 bold ghost">Cancel</button>
        </div>
      </form>
      <div class="button-group flex gap-5">
        <button class="flex gap-5 ghost aligned-center rounded-5 px-5">
          <iconify-icon icon="mdi:account-plus-outline" flip="horizontal"></iconify-icon>
          <span>Share</span>
        </button>
        <button class="flex gap-5 ghost aligned-center rounded-5 px-5">
          <iconify-icon icon="mdi:view-dashboard-edit-outline"></iconify-icon>
          <span>View</span>
        </button>
        <button class="flex gap-5 ghost aligned-center rounded-5 px-5">
          <iconify-icon icon="mdi:comment-outline"></iconify-icon>
          <span>Comments</span>
        </button>
        <button class="flex gap-5 ghost aligned-center rounded-5 px-5">
          <iconify-icon icon="mdi:dots-horizontal"></iconify-icon>
        </button>
      </div>
    </div>
  </div>`;

  const divProjectPage = document.querySelector("#project-page");
  divProjectPage.replaceChildren();
  divProjectPage.appendChild(new ProjectComponent(project).node);

  // const divProjectPage = document.querySelector("#project-page");
  // // divProjectPage.replaceChildren();
  // // divProjectPage.appendChild(new ProjectComponent(project).node);
  // lblProjectTitle.textContent = project.name;
  // inputProjectTitle.value = project.name;

  // lblProjectTitle.addEventListener("click", () => {
  //     lblProjectTitle.classList.add("hidden");
  //     inputProjectTitle.classList.remove("hidden")
  //     projectHeaderSubmitBtns.classList.remove("hidden");
  // });

  // inputProjectTitle.addEventListener("input", () => {
  //     btnSaveProjectTitle.disabled = inputProjectTitle.value === "";
  // })

  // btnSaveProjectTitle.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     project.name = inputProjectTitle.value;
  //     lblProjectTitle.textContent = project.name;
  //     inputProjectTitle.value = project.name;
  //     const sidebarProjectItem = document.querySelector(`[data-id="${project.id}"]`);
  //     sidebarProjectItem.textContent = project.name;
  //     lblProjectTitle.classList.remove("hidden")
  //     inputProjectTitle.classList.add("hidden");
  //     projectHeaderSubmitBtns.classList.add("hidden");
  // })

  // btnCancelProjectTitle.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     inputProjectTitle.value = project.name;
  //     projectHeaderSubmitBtns.classList.add("hidden");
  //     inputProjectTitle.classList.add("hidden");
  //     lblProjectTitle.classList.remove("hidden");
  // })
}

export { createProjectSidebarItem, loadProjectPage };