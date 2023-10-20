export default function DOMHandler() {
    const sidebar = document.querySelector(".sidebar");
    const btnCollapseSidebar = document.querySelector("#btn-collapse-sidebar");
    btnCollapseSidebar.addEventListener("click", toggleSidebar);

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

    toggleSidebar();
};