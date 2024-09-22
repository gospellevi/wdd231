document.addEventListener('DOMContentLoaded', () => {
    // Create the menu toggle button dynamically
    const menuToggleButton = document.createElement('button');
    menuToggleButton.id = 'menuToggle';
    menuToggleButton.textContent = '☰';

    // Append the button to the header
    const header = document.querySelector('header');
    header.appendChild(menuToggleButton);

    // Responsive Menu Toggle
    const navMenu = document.getElementById('navMenu');
    menuToggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('show');

        // Toggle the button text between "☰ Menu" and "X"
        if (navMenu.classList.contains('show')) {
            menuToggleButton.textContent = 'X';  // Change to "X" when menu is shown
        } else {
            menuToggleButton.textContent = '☰';  // Change back to "☰ Menu" when menu is hidden
        }

       
    });


    // Current Year and Last Modified
    const currentyear = document.querySelector("#currentyear");
    const lastmodified = document.querySelector("#lastmodified");

    if (currentyear) {
        let today = new Date();
        currentyear.innerHTML = today.getFullYear();
    }

    if (lastmodified) {
        let date = new Date(document.lastModified);
        lastmodified.innerHTML = `Last Updated: ${document.lastModified}`;
    }

});