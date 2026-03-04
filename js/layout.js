document.addEventListener('DOMContentLoaded', () => {
    // Simple function to highlight the active link in the navigation
    const setActiveLink = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.add('text-primary');
                link.classList.remove('text-slate-900', 'dark:text-slate-100');
            }
        });
    };

    // Initialize UI interactions
    setActiveLink();
});
