export default function DOMHandler() {
    const sidebar = document.querySelector(".sidebar");
    const btnCollapseSidebar = document.querySelector("#btn-collapse-sidebar");
    btnCollapseSidebar.addEventListener("click", toggleSidebar);

    function toggleSidebar(e) {
        if (sidebar.classList.contains("sidebar-collapsed")) {
            sidebar.classList.remove("sidebar-collapsed");
        } else {
            sidebar.classList.add("sidebar-collapsed");
        }
    }
};