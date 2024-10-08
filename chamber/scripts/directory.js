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

// DOM Elements
const directoryList = document.getElementById('directory-list');
const toggleViewBtn = document.getElementById('toggleViewBtn');

// State
let isGridView = true; // Default view

// Fetch and Display Members
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Failed to fetch members:', error);
        directoryList.innerHTML = '<p>Unable to load members at this time.</p>';
    }
}

// Display Members
function displayMembers(members) {
    directoryList.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        // memberCard.classList.add(isGridView ? 'grid-view' : 'list-view');

        memberCard.innerHTML = `
            <img src="images/${member.icon}" alt="${member.name} Logo" class="member-icon" loading="lazy">
            <div class="member-details">
                <h2>${member.name}</h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
                <p>${member.description}</p>
            </div>
        `;

        directoryList.appendChild(memberCard);
    });

    // Adjust layout based on current view
    if (isGridView) {
        directoryList.classList.add('grid-container');
        directoryList.classList.remove('list-container');
    } else {
        directoryList.classList.add('list-container');
        directoryList.classList.remove('grid-container');
    }
}

// Convert membership level number to a label
function getMembershipLevel(level) {
    switch(level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

// Toggle View
toggleViewBtn.addEventListener('click', () => {
    isGridView = !isGridView;
    fetchMembers(); // Re-render members with the new view
    toggleViewBtn.textContent = isGridView ? 'Switch to List View' : 'Switch to Grid View';
    toggleViewBtn.setAttribute('aria-pressed', isGridView);
});

// Hamburger Menu Toggle
// hamburger.addEventListener('click', () => {
//     navMenu.classList.toggle('show');
// });

// Close navigation when clicking outside (optional)
// window.addEventListener('click', (e) => {
//     if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
//         navMenu.classList.remove('show');
//     }
// });


// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    toggleViewBtn.textContent = 'Switch to List View'; // Initial button text
});
