document.addEventListener('DOMContentLoaded', () => {
    // Responsive Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Set the current year
    const currentYearElement = document.getElementById('currentyear');
    const today = new Date();
    currentYearElement.textContent = today.getFullYear();

    // Set the last modified date
    const lastModifiedElement = document.getElementById('lastmodified');
    lastModifiedElement.textContent = `Last Updated: ${document.lastModified}`;

    // Course List Array
    const courses = [
        { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
        { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: false },
        { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
        { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
        { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: false },
        { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
    ];

    const courseListElement = document.getElementById('course-list');
    const totalCreditsElement = document.getElementById('total-credits');

    // Function to display courses based on filter
    function displayCourses(filter) {
        courseListElement.innerHTML = '';  // Clear current course list
        let totalCredits = 0;

        courses.filter(course => filter === 'all' || course.subject === filter)
               .forEach(course => {
            totalCredits += course.credits;
            const courseItem = document.createElement('div');
            courseItem.classList.add('course-item');
            courseItem.innerHTML = `
                <p>${course.subject} ${course.number}: ${course.title}</p>
                <p>Credits: ${course.credits}</p>
            `;
            if (course.completed) {
                courseItem.classList.add('completed');  // Mark completed courses
            }
            courseListElement.appendChild(courseItem);
        });

        totalCreditsElement.textContent = totalCredits;
    }

    // Event listeners for filtering courses
    document.querySelectorAll('.course-filter button').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            displayCourses(filter);
        });
    });

    // Initially display all courses
    displayCourses('all');
});
