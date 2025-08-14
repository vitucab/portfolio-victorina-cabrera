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
const heroSection = document.getElementById('inicio');
if (heroSection) {
  const bubbleCount = 40; // Cantidad de burbujas
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    heroSection.appendChild(bubble);
  }
}