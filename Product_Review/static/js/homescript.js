document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    let isSidebarVisible = true;

    toggleBtn.addEventListener("click", function() {
        if (isSidebarVisible) {
            sidebar.style.width = "0";
            mainContent.style.marginLeft = "0";
            toggleBtn.innerHTML = "&#9654;";  // Right arrow
            isSidebarVisible = false;
        } else {
            sidebar.style.width = "190px";  // Adjust the sidebar width if necessary
            mainContent.style.marginLeft = "190px";
            toggleBtn.innerHTML = "&#9664;";  // Left arrow
            isSidebarVisible = true;
        }
    });

    // Initial state
    sidebar.style.width = "200px";
    mainContent.style.marginLeft = "200px";
    toggleBtn.innerHTML = "&#9654;";  // Right arrow
});
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var mainContent = document.getElementById("main-content");
    var welcomeContainer = document.querySelector(".welcome-container");
    
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("active");
    welcomeContainer.classList.toggle("active");
}

// Dark Mode Toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.className = 'dark-mode-btn';
darkModeBtn.innerText = 'DarkMode';
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});


