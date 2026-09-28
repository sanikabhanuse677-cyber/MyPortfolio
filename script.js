// Smooth scroll for anchor links (if any)
document.querySelectorAll('a href^="#"').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
 e.preventDefault();
 const target = document.querySelector(this.getAttribute('href'));
 if (target) {
 target.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 });
});

// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
 const currentPage = window.location.pathname.split('/').pop() || 'index.html';
 const navLinks = document.querySelectorAll('.nav-links a');

 navLinks.forEach(link => {
 const linkPage = link.getAttribute('href');
 if (linkPage === currentPage) {
 link.classList.add('active');
 } else {
 link.classList.remove('active');
 }
 });
});

// Optional: Add a fade-in animation when cards come into view
const observerOptions = {
 threshold: 0.1,
 rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 entry.target.style.opacity = '1';
 entry.target.style.transform = 'translateY(0)';
 }
 });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
 const cards = document.querySelectorAll('.card,.info-box,.contact-card');
 cards.forEach(card => {
 card.style.opacity = '0';
 card.style.transform = 'translateY(30px)';
 card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
 observer.observe(card);
 });
});