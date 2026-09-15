function detectMobile() {
    return window.innerWidth <= 800;
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    const dropdown = document.querySelector('.dropdown a');

    if (detectMobile()) {
        dropdown.addEventListener('click', function() {
            const content = document.querySelector('.dropdown-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            event.preventDefault();
            event.stopPropagation();
        });
    }
    hamburger.addEventListener('click', function() {
        navContainer.classList.toggle('active');
    });
    navContainer.addEventListener('click', function(e) {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        }
    });
});
