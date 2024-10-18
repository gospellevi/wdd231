// On page load, populate the timestamp field
document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toLocaleString();
    }

    // Modal functionality
    const openModalLinks = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    openModalLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetModalId = link.getAttribute('href').substring(1); // Remove the '#' symbol
            const targetModal = document.getElementById(targetModalId);
            if (targetModal) {
                targetModal.style.display = 'block';
            }
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Thank You page data population
    if (window.location.pathname.includes("thankyou.html")) {
        const urlParams = new URLSearchParams(window.location.search);

        // Fill in the confirmation details
        document.getElementById("first-name-display").textContent = urlParams.get("first-name");
        document.getElementById("last-name-display").textContent = urlParams.get("last-name");
        document.getElementById("email-display").textContent = urlParams.get("email");
        document.getElementById("phone-display").textContent = urlParams.get("phone");
        document.getElementById("business-name-display").textContent = urlParams.get("business-name");
        document.getElementById("timestamp-display").textContent = urlParams.get("timestamp");
    }
});
