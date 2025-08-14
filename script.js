document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if (!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                }
            }
        });
    });

    const projectSlides = document.querySelectorAll('.project-slide');
    if (projectSlides.length > 1) {
        let currentProjectIndex = 0;
        const slideInterval = 2500;

        function nextProject() {
            projectSlides[currentProjectIndex].classList.add('hidden');
            currentProjectIndex++;
            if (currentProjectIndex >= projectSlides.length) {
                currentProjectIndex = 0; 
            }
            projectSlides[currentProjectIndex].classList.remove('hidden');
        }
        projectSlides[currentProjectIndex].classList.remove('hidden');
        setInterval(nextProject, slideInterval);
    }
});