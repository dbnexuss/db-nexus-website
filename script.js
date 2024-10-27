document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".project-item");

    function reveal() {
        const scrollPosition = window.scrollY + window.innerHeight;
        projectItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top + window.scrollY;
            if (scrollPosition > itemPosition + 100) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check for items already in view
});
