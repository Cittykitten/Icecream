// Cursor follower
        document.addEventListener('DOMContentLoaded', function() {
            const cursor = document.querySelector('.cursor-follower');
            
            document.addEventListener('mousemove', function(e) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            
            // Add interactive elements effect
            const interactiveElements = document.querySelectorAll('a, button, .flavor-card');
            
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                    cursor.style.backgroundColor = '#39FF14';
                });
                
                element.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursor.style.backgroundColor = '#E75480';
                });
            });
            
            // Simple animations on scroll
            function animateOnScroll() {
                const elements = document.querySelectorAll('.flavor-card, .about-text, .about-image');
                
                elements.forEach(element => {
                    const position = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if(position < screenPosition) {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    }
                });
            }
            
            // Set initial state for animated elements
            const animatedElements = document.querySelectorAll('.flavor-card, .about-text, .about-image');
            animatedElements.forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(50px)';
                element.style.transition = 'all 0.8s ease';
            });
            
            window.addEventListener('scroll', animateOnScroll);
            // Trigger once on load
            animateOnScroll();
            
            // Add click effect to buttons
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Ripple effect
                    const ripple = document.createElement('span');
                    ripple.classList.add('ripple');
                    this.appendChild(ripple);
                    
                    const x = e.clientX - this.getBoundingClientRect().left;
                    const y = e.clientY - this.getBoundingClientRect().top;
                    
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                    
                    // Scroll to section
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if(targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });
