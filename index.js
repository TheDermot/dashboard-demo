const sidebarIcon = document.getElementById("hamburger-sidebar");
const sidebar = document.querySelector(".sidebar");
sidebarIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
