document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    let isSidebarVisible = false;

    // Set initial aria-expanded attribute for accessibility
    toggleBtn.setAttribute("aria-expanded", "false");

    toggleBtn.addEventListener("click", function() {
        if (isSidebarVisible) {
            sidebar.style.width = "0";
            mainContent.style.marginLeft = "0";
            toggleBtn.innerHTML = "&#9654;";  // Right arrow
            toggleBtn.setAttribute("aria-expanded", "false");  // Update aria-expanded attribute
            isSidebarVisible = false;
        } else {
            sidebar.style.width = "250px";  // Adjust the sidebar width if necessary
            mainContent.style.marginLeft = "250px";
            toggleBtn.innerHTML = "&#9664;";  // Left arrow
            toggleBtn.setAttribute("aria-expanded", "true");  // Update aria-expanded attribute
            isSidebarVisible = true;
        }
    });

    // Initial state: sidebar is hidden
    sidebar.style.width = "0";
    mainContent.style.marginLeft = "0";
    toggleBtn.innerHTML = "&#9654;";  // Right arrow

    // Optional: Close the sidebar if clicking outside of it
    document.addEventListener("click", function(event) {
        if (isSidebarVisible && !sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            sidebar.style.width = "0";
            mainContent.style.marginLeft = "0";
            toggleBtn.innerHTML = "&#9654;";  // Right arrow
            toggleBtn.setAttribute("aria-expanded", "false");  // Update aria-expanded attribute
            isSidebarVisible = false;
        }
    });
});
