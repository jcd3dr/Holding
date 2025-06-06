let currentLang;

const translations = {
    es: {
        nav_about: "Acerca",
        nav_portfolio: "Portafolio",
        nav_contact: "Contacto",
        hero_title: "Estructura, Control y Expansión",
        hero_subtitle: "Una holding moderna e inteligente que centraliza propiedad intelectual, contabilidad y arquitectura interempresarial—asegurando eficiencia, privacidad y control operacional en todo su propio ecosistema de negocios.",
        hero_button: "Conócenos",
        about_section_title: "Acerca de Cruz Bizz Hld LLC",
        about_p1: "Cruz Bizz Hld LLC es una compañía de cartera (holding) de propiedad privada, organizada en el estado de Wyoming, Estados Unidos.",
        about_p2: "Constituida el 5 de marzo de 2024 y liderada por su fundador, Cruz Bizz Hld LLC funciona como el eje estratégico, legal y financiero de un ecosistema empresarial que integra subsidiarias en distintas jurisdicciones, principalmente en el estado de Florida.",
        about_p3: "Nuestro modelo operativo se fundamenta en principios de legalidad, privacidad y organización estructural. Las operaciones de la holding preservan la separación entre lo empresarial y lo individual, asegurando una gestión eficiente y la protección de activos.",
        portfolio_section_title: "Áreas Estratégicas",
        portfolio_item1_title: "Comercio Electrónico y Marketplaces Digitales",
        portfolio_item1_desc: "Enfoque en la expansión y optimización de plataformas de venta online.",
        portfolio_item2_title: "Servicios de Consultoría y Educación Online",
        portfolio_item2_desc: "Fomento del conocimiento y la capacitación en entornos digitales.",
        portfolio_item3_title: "Marketing Digital y Gestión de Activos Web",
        portfolio_item3_desc: "Estrategias avanzadas para potenciar la presencia y visibilidad online.",
        portfolio_item4_title: "Software, Automatización e Inteligencia Artificial",
        portfolio_item4_desc: "Desarrollo y aplicación de soluciones tecnológicas innovadoras.",
        portfolio_item5_title: "Bienes Raíces para Renta Pasiva",
        portfolio_item5_desc: "Inversión y gestión de propiedades con enfoque en la rentabilidad.",
        portfolio_item6_title: "Logística, Importación y Exportación",
        portfolio_item6_desc: "Optimización de cadenas de suministro y flujos de comercio global.",
        portfolio_item7_title: "Franquicias y Estructuras de Licenciamiento",
        portfolio_item7_desc: "Estrategias de expansión y formalización de modelos de negocio.",
        contact_section_title: "Contacto General",
        contact_p1: "Para consultas generales o asuntos administrativos, por favor contáctenos a través de la siguiente dirección de correo electrónico.",
        footer_copyright: "Cruz Bizz Hld LLC | Sheridan, WY, USA | © 2024.",
        footer_privacy: "Política de Privacidad",
        page_title: "Cruz Bizz Hld LLC - Eje Estratégico y Financiero",
        page_description: "Holding moderna que centraliza propiedad intelectual, contabilidad y arquitectura interempresarial para eficiencia y control."
    },
    // English translations (Machine-generated, please review for accuracy and context)
    en: {
        nav_about: "About",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        hero_title: "Structure, Control and Expansion",
        hero_subtitle: "A modern and intelligent holding company that centralizes intellectual property, accounting, and intercompany architecture—ensuring efficiency, privacy, and operational control across its own business ecosystem.",
        hero_button: "Learn More",
        about_section_title: "About Cruz Bizz Hld LLC",
        about_p1: "Cruz Bizz Hld LLC is a privately owned holding company organized in the state of Wyoming, USA.",
        about_p2: "Established on March 5, 2024, and led by its founder, Cruz Bizz Hld LLC serves as the strategic, legal, and financial axis of a business ecosystem that integrates subsidiaries in different jurisdictions, primarily in the state of Florida.",
        about_p3: "Our operational model is based on principles of legality, privacy, and structural organization. The holding's operations preserve the separation between business and individual affairs, ensuring efficient management and asset protection.",
        portfolio_section_title: "Strategic Areas",
        portfolio_item1_title: "E-commerce and Digital Marketplaces",
        portfolio_item1_desc: "Focus on the expansion and optimization of online sales platforms.",
        portfolio_item2_title: "Consulting Services and Online Education",
        portfolio_item2_desc: "Promotion of knowledge and training in digital environments.",
        portfolio_item3_title: "Digital Marketing and Web Asset Management",
        portfolio_item3_desc: "Advanced strategies to enhance online presence and visibility.",
        portfolio_item4_title: "Software, Automation, and Artificial Intelligence",
        portfolio_item4_desc: "Development and application of innovative technological solutions.",
        portfolio_item5_title: "Real Estate for Passive Income",
        portfolio_item5_desc: "Investment and management of properties focused on profitability.",
        portfolio_item6_title: "Logistics, Import, and Export",
        portfolio_item6_desc: "Optimization of supply chains and global trade flows.",
        portfolio_item7_title: "Franquicias and Licensing Structures",
        portfolio_item7_desc: "Expansion strategies and formalization of business models.",
        contact_section_title: "General Contact",
        contact_p1: "For general inquiries or administrative matters, please contact us at the following email address.",
        footer_copyright: "Cruz Bizz Hld LLC | Sheridan, WY, USA | © 2024.",
        footer_privacy: "Privacy Policy",
        page_title: "Cruz Bizz Hld LLC - Strategic and Financial Axis",
        page_description: "Modern holding company centralizing intellectual property, accounting, and intercompany architecture for efficiency and control."
    }
};

function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language "${lang}" not found in translations. Defaulting to 'es'.`);
        lang = 'es'; // Fallback to Spanish if the selected lang isn't in translations
    }

    document.documentElement.lang = lang; // Update HTML lang attribute
    localStorage.setItem('preferredLang', lang);
    currentLang = lang; 

    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            console.warn(`Translation key "${key}" not found for language "${lang}".`);
        }
    });

    // Update page title
    if (translations[lang] && translations[lang]['page_title']) {
        document.title = translations[lang]['page_title'];
    } else {
        console.warn(`Translation key "page_title" not found for language "${lang}".`);
    }

    // Update meta description
    const metaDescriptionTag = document.getElementById('meta-description');
    if (metaDescriptionTag) {
        if (translations[lang] && translations[lang]['page_description']) {
            metaDescriptionTag.setAttribute('content', translations[lang]['page_description']);
        } else {
            console.warn(`Translation key "page_description" not found for language "${lang}".`);
        }
    } else {
        console.warn('Meta description tag with id "meta-description" not found.');
    }
}

function getInitialLanguage() {
    const preferredLang = localStorage.getItem('preferredLang');
    if (preferredLang && (preferredLang === 'es' || preferredLang === 'en')) {
        return preferredLang;
    }

    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang) {
        if (browserLang.toLowerCase().startsWith('en')) {
            return 'en';
        }
        if (browserLang.toLowerCase().startsWith('es')) {
            return 'es';
        }
    }
    
    return 'es'; // Default to Spanish
}

document.addEventListener('DOMContentLoaded', () => {
    // Menú de Navegación Responsivo (Hamburguesa)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active'); 
        });

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
        root: null, 
        rootMargin: '0px',
        threshold: 0.2 
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // Initialize language
    const initialLang = getInitialLanguage();
    setLanguage(initialLang); // This sets currentLang

    // Language Selector Logic
    const langOptions = document.querySelectorAll('.lang-option');

    function updateLangSelectorUI(selectedLang) { 
        langOptions.forEach(opt => {
            if (opt.getAttribute('data-lang-switch') === selectedLang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });
    }

    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const newLang = this.getAttribute('data-lang-switch');
            if (newLang !== currentLang) { 
                setLanguage(newLang);
                updateLangSelectorUI(newLang); 
            }
        });
    });

    // Initialize the language selector UI based on the current language
    updateLangSelectorUI(currentLang);
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
