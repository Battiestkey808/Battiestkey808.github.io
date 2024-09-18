document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', function() {
        sidebar.style.left = '0'; // Show the sidebar
    });

    closeBtn.addEventListener('click', function() {
        sidebar.style.left = '-250px'; // Hide the sidebar
    });
});
