// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scrambled text effect
function scrambleText(element) {
    const originalText = element.dataset.text;
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let iterations = 0;

    element.classList.add('scrambling');

    const interval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');

        if (iterations >= originalText.length) {
            element.classList.remove('scrambling');
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 80);
}

// Trigger scramble effect on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.scramble').forEach(element => {
            scrambleText(element);
        });
    }, 0); // Delay of 1 second after page loads
});