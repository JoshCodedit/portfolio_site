document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Content Loaded"); // Debug log

    // Testimonials functionality
    const testimonial1 = document.querySelector('.testimonial-1');
    const testimonial2 = document.querySelector('.testimonial-2');
    const testimonial3 = document.querySelector('.testimonial-3');
    const testimonial4 = document.querySelector('.testimonial-4');
    const nextPage = document.querySelector('#togglePage1');
    const nextPage2 = document.querySelector('#togglePage2');
    const prevPage = document.querySelector('#togglePage3');
    const prevPage2 = document.querySelector('#togglePage4');

    // Only run testimonials code if elements exist
    if (testimonial1 && testimonial2 && testimonial3 && testimonial4) {
        testimonial3.style.display = 'none';
        testimonial4.style.display = 'none';
        prevPage.style.display = 'none';
        prevPage2.style.display = 'none';

        nextPage.addEventListener('click', function () {
            testimonial1.style.display = 'none';
            testimonial3.style.display = '';
            nextPage.style.display = 'none';
            prevPage.style.display = '';
        });
        prevPage.addEventListener('click', function () {
            testimonial1.style.display = '';
            testimonial3.style.display = 'none';
            nextPage.style.display = '';
            prevPage.style.display = 'none';
        });

        nextPage2.addEventListener('click', function () {
            testimonial2.style.display = 'none';
            testimonial4.style.display = '';
            nextPage2.style.display = 'none';
            prevPage2.style.display = '';
        });
        prevPage2.addEventListener('click', function () {
            testimonial2.style.display = '';
            testimonial4.style.display = 'none';
            nextPage2.style.display = '';
            prevPage2.style.display = 'none';
        });
    }

    // Burger Menu Functionality
    const burgerMenu = document.querySelector('#burger-menu');
    const mobileNav = document.querySelector('#mobile-nav');
    
    console.log("Burger Menu:", burgerMenu); // Debug log
    console.log("Mobile Nav:", mobileNav); // Debug log
    
    if (burgerMenu && mobileNav) {
        burgerMenu.addEventListener('click', function(e) {
            console.log('Burger clicked'); // Debug log
            e.stopPropagation();
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-nav a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!burgerMenu.contains(e.target) && !mobileNav.contains(e.target)) {
                burgerMenu.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    }
});
