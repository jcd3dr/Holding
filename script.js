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
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Dejar de observar una vez que se ha animado
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // Efecto Parallax Básico (opcional y más avanzado)
    // Este es un ejemplo simple, para efectos más complejos se recomienda una librería.
//    const heroSection = document.querySelector('.hero');
  //  if (heroSection) {
    //    window.addEventListener('scroll', () => {
     //       let scrollY = window.pageYOffset;
      //      heroSection.style.backgroundPositionY = -scrollY * 0.3 + 'px'; // Ajusta la velocidad aquí
   //     });
  //  }

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
});

// Botón de "volver arriba"
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
