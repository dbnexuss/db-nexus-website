// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Skeleton Screen Effect (Example)
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton';
    section.appendChild(skeleton);

    // Remove skeleton after 1 second (simulate loading)
    setTimeout(() => {
        skeleton.remove();
    }, 1000);
});
