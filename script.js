
document.addEventListener("DOMContentLoaded", function () {

    const testimonial1 = document.querySelector('.testimonial-1');
    const testimonial2 = document.querySelector('.testimonial-2');
    const testimonial3 = document.querySelector('.testimonial-3');
    const testimonial4 = document.querySelector('.testimonial-4');
    const nextPage = document.querySelector('#togglePage1');
    const nextPage2 = document.querySelector('#togglePage2');
    const prevPage = document.querySelector('#togglePage3');
    const prevPage2 = document.querySelector('#togglePage4')


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
});
