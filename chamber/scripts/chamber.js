document.addEventListener('DOMContentLoaded', () => {

    // Set Footer Details
    // Current Year and Last Modified
    const currentyear = document.querySelector("#currentyear");
    const lastmodified = document.querySelector("#lastmodified");

    if (currentyear) {
        let today = new Date();
        currentyear.innerHTML = today.getFullYear();
    }
    if (lastmodified) {
        let date = new Date(document.lastModified);
        lastmodified.innerHTML = `Last Updated: ${date}`;
    }

    // Hamburger Menu
    const hamburger = document.createElement('button');
    hamburger.id = 'hamburger';
    hamburger.innerHTML = '&#9776;'; // hamburger icon

    const header = document.querySelector('header');
    const nav = document.getElementById('navMenu');

    if (header && nav) {
        header.insertBefore(hamburger, nav);
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('show');
            hamburger.innerHTML = nav.classList.contains('show') ? '&#10006;' : '&#9776;';
        });
    }

    
});