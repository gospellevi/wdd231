document.addEventListener('DOMContentLoaded', () => {

    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
            technology: [
                'HTML',
                'CSS'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: [
                'C#'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: false
        }
    ]

    const courseList = document.getElementById('course-list');
    const showTotalCredits = document.getElementById('total-credits');
    
    // Filter buttons
    const filterAllBtn = document.getElementById('filter-all');
    const filterCseBtn = document.getElementById('filter-cse');
    const filterWddBtn = document.getElementById('filter-wdd');

    // Function to render courses dynamically
    const renderCourses = (filter = 'all') => {
        // Clear existing courses
        courseList.innerHTML = '';

        // Filter courses based on the filter passed
        const filteredCourses = courses.filter(course => filter === 'all' || course.subject === filter);

        // Create course cards dynamically
        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            courseCard.style.backgroundColor = course.completed ? 'rgb(158, 5, 5)' : 'var(--secondary-color)';

            // Initial course card content (title only)
            courseCard.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;

            // -------------------------------------------------------------
            // Create a div for the additional details (hidden initially)
            const details = document.createElement('div');
            details.classList.add('course-details');
            details.style.display = 'none'; // Hidden initially

            // Add course details to the div
            details.innerHTML = `
                <h4>${course.title}</h4>
                <p><strong>Credits:</strong> ${course.credits}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
                <p><strong>Status:</strong> ${course.completed ? 'Completed' : 'In Progress'}</p>
            `;

            // Append the details to the card
            courseCard.appendChild(details);

            // Add event listener to toggle visibility of details
            courseCard.addEventListener('click', () => {
                // Hide all other open course details
                document.querySelectorAll('.course-details').forEach(detail => {
                    if (detail !== details) {
                        detail.style.display = 'none';
                    }
                });
                // Toggle the clicked course's details
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
            });
            // ----------------------------------------------------------------

            courseList.appendChild(courseCard);
        });


        // Calculate total credits dynamically
        const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
        showTotalCredits.textContent = `Total Credits: ${totalCredits}`;
    };

    // Filter event listeners
    filterAllBtn.addEventListener('click', () => renderCourses('all'));
    filterCseBtn.addEventListener('click', () => renderCourses('CSE'));
    filterWddBtn.addEventListener('click', () => renderCourses('WDD'));

    // Initial render
    renderCourses();


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