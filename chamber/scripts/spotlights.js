document.addEventListener('DOMContentLoaded', () => {
    const spotlightsContainer = document.getElementById('spotlights');

    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const members = await response.json();
            displaySpotlights(members);
        } catch (error) {
            console.error('Failed to fetch members:', error);
            spotlightsContainer.innerHTML = '<p>Unable to load spotlights at this time.</p>';
        }
    }

    function displaySpotlights(members) {
        const eligibleMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
        const selectedMembers = getRandomElements(eligibleMembers, 3);

        spotlightsContainer.innerHTML = selectedMembers.map(member => `
            <div class="spotlight">
                <img src="images/${member.icon}" alt="${member.name} Logo" class="spotlight-icon" width="80" height="auto" loading="lazy">
                <div class="spotlight-details">
                    <h3>${member.name}</h3>
                    <p>${member.description}</p>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.website}</a></p>
                    <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membershipLevel)}</p>
                </div>
            </div>
        `).join('');
    }

    function getRandomElements(arr, count) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function getMembershipLevel(level) {
        switch(level) {
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Unknown';
        }
    }

    fetchMembers();
});
