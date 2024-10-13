// Initialize
document.addEventListener('DOMContentLoaded', () => {

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


    fetchMembers();
    toggleViewBtn.textContent = 'Switch to List View'; // Initial button text
});
