const sidebarIcon = document.getElementById("hamburger-sidebar");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.getElementById("close-sidebar");

// Toggle sidebar with hamburger icon
sidebarIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Close sidebar with close button
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
