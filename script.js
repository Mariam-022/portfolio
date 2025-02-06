document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Optional offset for navbar height
                    behavior: "smooth"
                });
            }
        });
    });

    // IntersectionObserver for adding 'visible' class when sections come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });

    // Observe all sections with the 'section' class
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
