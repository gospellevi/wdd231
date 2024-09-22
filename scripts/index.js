document.addEventListener('DOMContentLoaded', () => {
    // Current Year and Last Modified
    const currentyear = document.querySelector("#currentyear");
    const lastmodified = document.querySelector("#lastmodified");

    if (currentyear) {
        let today = new Date();
        currentyear.innerHTML = today.getFullYear();
    }
    if (lastmodified) {
        let date = new Date(document.lastModified);
        lastmodified.innerHTML = date;

        const p = document.createElement('p');
        p.innerHTML = 'Last Updated:';
        lastmodified.parentElement.insertBefore(p, lastmodified);
    }

    // Hamburger Menu
    const hamburger = document.createElement('button');
    hamburger.id = 'hamburger';
    hamburger.innerHTML = '&#9776;'; // hamburger icon

    const header = document.querySelector('header');
    const nav = document.getElementById('navMenu');
    if (header && nav) {
        header.insertBefore(hamburger, nav);

        // Toggle nav visibility when hamburger is clicked
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('show'); // Toggle the 'show' class on the nav menu
            hamburger.innerHTML = nav.classList.contains('show') ? '&#10006;' : '&#9776;'; // Toggle between hamburger and close icon
        });
    }
    
});