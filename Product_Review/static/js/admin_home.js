document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggle-btn");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    
 
    let isSidebarVisible = false;

    // Set initial aria-expanded attribute for accessibility
    toggleBtn.addEventListener("click", function() {
        if (isSidebarVisible) {
           
            sidebar.style.width = "0";
            mainContent.style.marginLeft = "0";
            toggleBtn.innerHTML = "&#9654;";  // Right arrow
              // Update aria-expanded attribute
            isSidebarVisible = false;
            
        } else {
            sidebar.style.width = "250px";  // Adjust the sidebar width if necessary
            mainContent.style.marginLeft = "250px";
            toggleBtn.innerHTML = "&#9664;";  // Left arrow
              // Update aria-expanded attribute
            isSidebarVisible = true;
        }
    });
    

    // Initial state: sidebar is hidden
    sidebar.style.width = "0";
    mainContent.style.marginLeft = "0";
    toggleBtn.innerHTML = "&#9654;";  // Right arrow

    // ==================== CHARTS ==================== //

    // Sample values, replace these with the Django template context variables
    const totalApplied = window.totalApplied || 0;
    const totalAccepted = window.totalAccepted || 0;
    const totalRejected = window.totalRejected || 0;
    const totalPending = window.totalPending || 0;
    // Applied vs Accepted Chart
    const appliedAcceptedCtx = document.getElementById('appliedAcceptedChart').getContext('2d');
    new Chart(appliedAcceptedCtx, {
        type: 'pie',
        data: {
            labels: ['Total Applied', 'Total Accepted'],
            datasets: [{
                label: 'Applied / Accepted',
                data: [totalApplied, totalAccepted],
                backgroundColor: ['#f1c40f', '#2ecc71']
            }]
        }
    });

    // Accepted vs Rejected Chart
    const acceptedRejectedCtx = document.getElementById('acceptedRejectedChart').getContext('2d');
    new Chart(acceptedRejectedCtx, {
        type: 'bar',
        data: {
            labels: ['Total Accepted', 'Total Rejected'],
            datasets: [{
                label: 'Accepted / Rejected',
                data: [totalAccepted, totalRejected],
                backgroundColor: ['#2ecc71', '#e74c3c']
            }]
        }
    });

    // Pending Projects Chart
    const pendingChartCtx = document.getElementById('pendingChart').getContext('2d');
    new Chart(pendingChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Total Pending'],
            datasets: [{
                label: 'Pending Projects',
                data: [totalPending],
                backgroundColor: ['#3498db']
            }]
        }
    });
});
