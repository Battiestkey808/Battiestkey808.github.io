document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked'); // Debugging
        sidebar.classList.add('show'); // Show the sidebar
    });

    closeBtn.addEventListener('click', function() {
        console.log('Close button clicked'); // Debugging
        sidebar.classList.remove('show'); // Hide the sidebar
    });
});
