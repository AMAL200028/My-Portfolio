document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const darkModeClass = 'dark-mode';

    // Check for saved theme preference in local storage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add(darkModeClass);
        themeToggleButton.textContent = '🌕'; // Change icon to moon
    }

    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle(darkModeClass);

        // Save the user's preference in local storage
        if (document.body.classList.contains(darkModeClass)) {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.textContent = '🌕'; // Change icon to moon
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleButton.textContent = '🌙'; // Change icon to sun
        }
    });

    // Example project data
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            category: 'web',
            description: 'A web development project.',
            image: 'images/project1.jpg'
        },
        {
            id: 2,
            title: 'Project 2',
            category: 'design',
            description: 'A design project.',
            image: 'images/project2.jpg'
        },
        // Add more projects as needed
    ];

    function displayProjects(projects) {
        const projectContainer = document.getElementById('projects');
        projectContainer.innerHTML = '';
        projects.forEach(project => {
            const projectCard = `
                <div class="col-md-4 mb-4 portfolio-card animate__animated animate__fadeIn">
                    <div class="card">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                        </div>
                    </div>
                </div>
            `;
            projectContainer.innerHTML += projectCard;
        });
    }

    function filterProjects(category) {
        if (category === 'all') {
            displayProjects(projects);
        } else {
            const filteredProjects = projects.filter(project => project.category === category);
            displayProjects(filteredProjects);
        }
    }

    // Display all projects initially
    displayProjects(projects);
});
