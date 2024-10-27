document.addEventListener("scroll", function() {
    const projects = document.querySelectorAll(".project-item");
    projects.forEach((project, index) => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const projectPosition = project.getBoundingClientRect().top + window.scrollY;
        
        if (scrollPosition > projectPosition + 100) {
            project.style.transform = "translateY(0)";
            project.style.opacity = "1";
        } else {
            project.style.transform = "translateY(50px)";
            project.style.opacity = "0";
        }
    });
});

// Initialize styles for animations
const projectItems = document.querySelectorAll(".project-item");
projectItems.forEach(item => {
    item.style.transform = "translateY(50px)";
    item.style.opacity = "0";
    item.style.transition = "transform 0.5s ease, opacity 0.5s ease";
});
