// Select the menu toggle button and navigation
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('nav a');

        // Toggle navigation menu when hamburger icon is clicked
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Toggle the active state for the button
        });

        // Close the menu when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active'); // Close the menu
                menuToggle.classList.remove('active'); // Toggle the hamburger icon back
            });
        });