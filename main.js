// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(section);
});

// Staggered animation for experience items
document.querySelectorAll('.exp-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Staggered animation for skill cards
document.querySelectorAll('.skill-category').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

console.log('Cosmic Gravity Portfolio Loaded');
