document.addEventListener('DOMContentLoaded', () => {
// --- Configuración de WhatsApp ---
const whatsappPhoneNumber = '573013303933'; // Reemplaza con tu número de teléfono
const whatsappMessage = encodeURIComponent('Hola, me gustaría solicitar un presupuesto. He visitado su sitio web y me interesa saber más sobre sus servicios.');
const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${whatsappMessage}`;

const whatsappLinks = document.querySelectorAll('#whatsapp-link, #whatsapp-button-cta');
whatsappLinks.forEach(link => {
    link.href = whatsappUrl;
});
    // --- Intersection Observer para Animaciones ---
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in, .animate-pulse, .animate-bounce-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(el => observer.observe(el));

    // --- Carrusel de Proyectos ---
    const projectsCarousel = document.querySelector('.projects-carousel');
    const prevProjectBtn = document.querySelector('.projects-carousel-container .prev-btn');
    const nextProjectBtn = document.querySelector('.projects-carousel-container .next-btn');
    const projectItems = document.querySelectorAll('.projects-carousel .gallery-item');

    if (projectsCarousel) {
        let isProjectsDragging = false;
        let startProjectsX;
        let scrollProjectsLeft;

        projectsCarousel.addEventListener('mousedown', (e) => {
            isProjectsDragging = true;
            projectsCarousel.classList.add('grabbing');
            startProjectsX = e.pageX - projectsCarousel.offsetLeft;
            scrollProjectsLeft = projectsCarousel.scrollLeft;
        });

        projectsCarousel.addEventListener('mouseleave', () => {
            isProjectsDragging = false;
            projectsCarousel.classList.remove('grabbing');
        });

        projectsCarousel.addEventListener('mouseup', () => {
            isProjectsDragging = false;
            projectsCarousel.classList.remove('grabbing');
        });

        projectsCarousel.addEventListener('mousemove', (e) => {
            if (!isProjectsDragging) return;
            e.preventDefault();
            const x = e.pageX - projectsCarousel.offsetLeft;
            const walk = (x - startProjectsX) * 2; // Velocidad de arrastre
            projectsCarousel.scrollLeft = scrollProjectsLeft - walk;
        });

        const updateProjectsBtns = () => {
            prevProjectBtn.style.display = projectsCarousel.scrollLeft > 0 ? 'block' : 'none';
            nextProjectBtn.style.display = projectsCarousel.scrollWidth > projectsCarousel.clientWidth + projectsCarousel.scrollLeft ? 'block' : 'none';
        };

        const scrollCarousel = (carousel, direction) => {
            const itemWidth = carousel.querySelector('.gallery-item').offsetWidth + 32; // Ancho del item + margin
            carousel.scrollBy({
                left: direction * itemWidth,
                behavior: 'smooth'
            });
        };

        prevProjectBtn.addEventListener('click', () => scrollCarousel(projectsCarousel, -1));
        nextProjectBtn.addEventListener('click', () => scrollCarousel(projectsCarousel, 1));

        projectsCarousel.addEventListener('scroll', updateProjectsBtns);
        window.addEventListener('resize', updateProjectsBtns);
        updateProjectsBtns();
    }

    // --- Carrusel de Testimonios ---
    const testimonialsCarousel = document.querySelector('.testimonials-carousel');
    const prevTestimonialBtn = document.querySelector('.testimonials-carousel-container .prev-btn');
    const nextTestimonialBtn = document.querySelector('.testimonials-carousel-container .next-btn');
    const testimonialItems = document.querySelectorAll('.testimonials-carousel .testimonial-card');

    if (testimonialsCarousel) {
        let isTestimonialsDragging = false;
        let startTestimonialsX;
        let scrollTestimonialsLeft;

        testimonialsCarousel.addEventListener('mousedown', (e) => {
            isTestimonialsDragging = true;
            testimonialsCarousel.classList.add('grabbing');
            startTestimonialsX = e.pageX - testimonialsCarousel.offsetLeft;
            scrollTestimonialsLeft = testimonialsCarousel.scrollLeft;
        });

        testimonialsCarousel.addEventListener('mouseleave', () => {
            isTestimonialsDragging = false;
            testimonialsCarousel.classList.remove('grabbing');
        });

        testimonialsCarousel.addEventListener('mouseup', () => {
            isTestimonialsDragging = false;
            testimonialsCarousel.classList.remove('grabbing');
        });

        testimonialsCarousel.addEventListener('mousemove', (e) => {
            if (!isTestimonialsDragging) return;
            e.preventDefault();
            const x = e.pageX - testimonialsCarousel.offsetLeft;
            const walk = (x - startTestimonialsX) * 2;
            testimonialsCarousel.scrollLeft = scrollTestimonialsLeft - walk;
        });

        const updateTestimonialBtns = () => {
            prevTestimonialBtn.style.display = testimonialsCarousel.scrollLeft > 0 ? 'block' : 'none';
            nextTestimonialBtn.style.display = testimonialsCarousel.scrollWidth > testimonialsCarousel.clientWidth + testimonialsCarousel.scrollLeft ? 'block' : 'none';
        };

        const scrollTestimonialCarousel = (carousel, direction) => {
            const itemWidth = carousel.querySelector('.testimonial-card').offsetWidth + 32;
            carousel.scrollBy({
                left: direction * itemWidth,
                behavior: 'smooth'
            });
        };

        prevTestimonialBtn.addEventListener('click', () => scrollTestimonialCarousel(testimonialsCarousel, -1));
        nextTestimonialBtn.addEventListener('click', () => scrollTestimonialCarousel(testimonialsCarousel, 1));

        testimonialsCarousel.addEventListener('scroll', updateTestimonialBtns);
        window.addEventListener('resize', updateTestimonialBtns);
        updateTestimonialBtns();
    }


    // --- Menú de Navegación Responsivo ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // --- Scroll para cambiar la barra de navegación ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});