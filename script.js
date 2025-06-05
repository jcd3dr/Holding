'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Menú de Navegación Responsivo (Hamburguesa)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Para animar el icono de hamburguesa
        });

        // Ocultar menú al hacer clic en un enlace (para móviles)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            });
        });
    }

    // Animaciones al hacer Scroll (Intersection Observer)
    const sectionsToAnimate = document.querySelectorAll('.fade-in, .slide-up');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Porcentaje del elemento visible para disparar la animación
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'portafolio') {
                    // La sección principal 'portafolio' ya tiene 'slide-up' que la hace visible.
                    // No necesitamos entry.target.classList.add('animate'); aquí si slide-up ya lo hace.
                    // Si 'slide-up' en la sección es solo para el fondo o título, entonces sí se necesita.
                    // Asumimos que 'slide-up' en la sección '.bg-gradient' ya la hace visible.
                    // Si no, descomentar: entry.target.classList.add('animate');

                    const serviceItems = entry.target.querySelectorAll('.service-item');
                    serviceItems.forEach((item, index) => {
                        item.style.transitionDelay = `${index * 0.1}s`; // Stagger delay
                        item.classList.add('animate-service-item');
                    });
                    // No des-observar entry.target aquí si la animación de los items es manejada por esta entrada.
                    // O sí, si solo queremos que se dispare una vez.
                    observer.unobserve(entry.target);
                } else {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // Dejar de observar una vez que se ha animado
                }
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // Efecto Parallax Básico (opcional y más avanzado)
    // Este es un ejemplo simple, para efectos más complejos se recomienda una librería.
    // const heroSection = document.querySelector('.hero');
    // if (heroSection) {
    //     window.addEventListener('scroll', () => {
    //         let scrollY = window.pageYOffset;
    //         // heroSection.style.backgroundPositionY = -scrollY * 0.3 + 'px'; // Ajusta la velocidad aquí
    //         heroSection.style.setProperty('--parallax-offset', -scrollY * 0.3 + 'px');
    //     });
    // }

    // Ejemplo de formulario de contacto (sólo frontend)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            // Aquí es donde normalmente enviarías los datos a un servidor (backend)
            contactForm.reset(); // Limpia el formulario
        });
    }

    // Scroll-to-Top Button Logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollThreshold = 300; // Show button after scrolling 300px

    if (scrollToTopBtn) { // Check if the button exists
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
