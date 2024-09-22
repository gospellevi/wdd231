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

    // Hamburger Menu
    // const hamburger = document.createElement('button');
    // hamburger.id = 'hamburger';
    // hamburger.innerHTML = '&#9776;'; // hamburger icon

    // const header = document.querySelector('header');
    // const nav = document.getElementById('navMenu');
    // if (header && nav) {
    //     header.insertBefore(hamburger, nav);

        // Toggle nav visibility when hamburger is clicked
        // hamburger.addEventListener('click', () => {
            // nav.classList.toggle('show'); // Toggle the 'show' class on the nav menu
        //     hamburger.innerHTML = nav.classList.contains('show') ? '&#10006;' : '&#9776;'; // Toggle between hamburger and close icon
        // });
    // }
    
});