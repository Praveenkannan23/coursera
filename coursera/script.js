// Add smooth scrolling to "View My Work" button
document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
});
// Add smooth scrolling to "Download Resume" button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
});
// You can add JavaScript to animate the skill icons on scroll, if needed
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-item');
    skills.forEach(skill => {
        const skillPos = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.3;

        if (skillPos < windowHeight) {
            skill.style.transform = 'scale(1.1)';
        } else {
            skill.style.transform = 'scale(1)';
        }
    });
});
// Add animation effect on scroll for project cards
window.addEventListener('scroll', () => {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        const projectPos = project.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.3;

        if (projectPos < windowHeight) {
            project.style.transform = 'scale(1.05)';
        } else {
            project.style.transform = 'scale(1)';
        }
    });
});
// Add animation effect on scroll for resume cards
window.addEventListener('scroll', () => {
    const resumeItems = document.querySelectorAll('.resume-item');
    resumeItems.forEach(item => {
        const itemPos = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight / 1.3;

        if (itemPos < windowHeight) {
            item.style.transform = 'scale(1.05)';
        } else {
            item.style.transform = 'scale(1)';
        }
    });
});
// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending data (in actual production, you'd integrate with a backend or service)
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear form fields after submission
    document.getElementById('contactForm').reset();
});
