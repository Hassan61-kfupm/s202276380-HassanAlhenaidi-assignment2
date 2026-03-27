document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const tagline = document.querySelector('.tagline');
    const hour = new Date().getHours();
    
    if (hour < 12) {
        tagline.textContent = 'Good Morning! Building creative web solutions';
    } else if (hour < 18) {
        tagline.textContent = 'Good Afternoon! Building creative web solutions';
    } else {
        tagline.textContent = 'Good Evening! Building creative web solutions';
    }

    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            formMessage.textContent = `Thanks ${name}! I'll get back to you soon.`;
            formMessage.style.backgroundColor = '#d4edda';
            formMessage.style.color = '#155724';
            contactForm.reset();
            
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.style.backgroundColor = 'transparent';
            }, 3000);
        } else {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.backgroundColor = '#f8d7da';
            formMessage.style.color = '#721c24';
        }
    });
});