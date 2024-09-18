document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', function() {
        sidebar.classList.add('show'); // Show the sidebar
    });

    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('show'); // Hide the sidebar
    });
});
