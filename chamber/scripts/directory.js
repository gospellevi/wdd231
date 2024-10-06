document.addEventlistener ('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('.menulinks');

    hamburger.addEventListener('click', () => {
        // hamburger.classList.toggle('active');
        // navMenu.classList.toggle('show');
        // hamburger.classList.toggle('open');
        navMenu.classList.toggle('open');
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
        lastmodified.innerHTML = date;
    }
});