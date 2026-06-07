document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. SPOTLIGHT HOVER EFFECT (Card Glow)
    // ==========================================================================
    const cards = document.querySelectorAll('.bento-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ==========================================================================
    // 2. TYPING EFFECT
    // ==========================================================================
    const typingText = document.getElementById('typing-text');
    const professions = [
        'Creative Developer',
        'UI/UX Designer',
        'Frontend Specialist',
        'Problem Solver'
    ];
    
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeDelay = 100;
    
    function typeEffect() {
        const currentProfession = professions[professionIndex];
        
        if (isDeleting) {
            typingText.textContent = currentProfession.substring(0, charIndex - 1);
            charIndex--;
            typeDelay = 50; // Deleting is faster
        } else {
            typingText.textContent = currentProfession.substring(0, charIndex + 1);
            charIndex++;
            typeDelay = 120; // Normal typing speed
        }
        
        if (!isDeleting && charIndex === currentProfession.length) {
            typeDelay = 2000; // Pause at the end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
            typeDelay = 500; // Pause before typing next word
        }
        
        setTimeout(typeEffect, typeDelay);
    }
    
    if (typingText) {
        typeEffect();
    }

    // ==========================================================================
    // 3. STATS COUNT-UP ANIMATION (Intersection Observer)
    // ==========================================================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCount = (element) => {
        const target = parseInt(element.getAttribute('data-target'), 10);
        const duration = 2000; // 2 seconds
        let startTime = null;
        
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function: easeOutQuad
            const easedProgress = percentage * (2 - percentage);
            
            const current = Math.floor(easedProgress * target);
            element.textContent = target > 10 ? `${current}+` : `${current}+`;
            
            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = `${target}+`;
            }
        };
        
        window.requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, {
        threshold: 0.5
    });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ==========================================================================
    // 4. COPY TO CLIPBOARD & TOAST
    // ==========================================================================
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('toast');
    
    if (copyEmailBtn && toast) {
        copyEmailBtn.addEventListener('click', () => {
            const email = copyEmailBtn.getAttribute('data-email');
            
            navigator.clipboard.writeText(email)
                .then(() => {
                    // Update CTA badge content on hover state temporarily if desired
                    const copyText = copyEmailBtn.querySelector('.copy-text');
                    const copyIcon = copyEmailBtn.querySelector('.copy-icon');
                    
                    if (copyText && copyIcon) {
                        copyText.textContent = 'Đã chép!';
                        copyIcon.setAttribute('data-lucide', 'check');
                        if (window.lucide) window.lucide.createIcons();
                        
                        setTimeout(() => {
                            copyText.textContent = 'Sao chép';
                            copyIcon.setAttribute('data-lucide', 'copy');
                            if (window.lucide) window.lucide.createIcons();
                        }, 2000);
                    }
                    
                    // Show Toast
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 3000);
                })
                .catch(err => {
                    console.error('Không thể sao chép email: ', err);
                });
        });
    }
});
