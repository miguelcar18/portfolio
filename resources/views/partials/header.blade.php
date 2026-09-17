{{-- HEADER --}}
<header class="header">
    <div class="container header-inner">
        <a href="#home" class="logo" aria-label="Ir al inicio — Miguel Carmona" title="Ir al inicio">
            <span class="logo-mark">
                <img src="{{ asset('images/logo.png') }}" alt="Logo de Miguel Carmona" title="Logo de Miguel Carmona">
            </span>
            <span>Miguel Carmona</span>
        </a>

        <nav class="nav" aria-label="Navegación principal">
            <div class="nav-links">
                <a href="#technologies" title="Ver stack técnico" data-section="technologies" data-i18n="nav.technologies">Stack técnico</a>
                <a href="#experience" title="Ver experiencia" data-section="experience" data-i18n="nav.experience">Experiencia</a>
                <a href="#projects" title="Ver proyectos" data-section="projects" data-i18n="nav.projects">Proyectos</a>
                <a href="#useful-sites" title="Ver sitios útiles" data-section="useful-sites" data-i18n="nav.usefulSites">Sitios útiles</a>
                <a href="mailto:miguelcar18@gmail.com" title="Contactar" data-section="contact" data-i18n="nav.contact" target="_blank">Contacto</a>
            </div>
        </nav>

        <div class="header-actions">
            <button id="languageToggle" type="button" class="language-button" aria-label="Cambiar idioma" title="Cambiar idioma">EN</button>
            <button id="themeToggle" type="button" class="icon-button" aria-label="Cambiar tema" title="Cambiar tema claro u oscuro">
                <!-- Sol -->
                <svg aria-hidden="true" focusable="false" id="sunIcon" class="theme-icon" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="4" fill="#fbbf24" stroke="#f97316" stroke-width="1.5"/>
                    <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" stroke="#f97316" stroke-width="1.8" stroke-linecap="round"/>
                </svg>

                <!-- Luna -->
                <svg aria-hidden="true" focusable="false" id="moonIcon" class="theme-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M20.5 15.2A8.7 8.7 0 0 1 8.8 3.5 8.7 8.7 0 1 0 20.5 15.2Z" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/>
                    <path d="M18.3 4.5v2M17.3 5.5h2M6.3 17v1.6M5.5 17.8h1.6" stroke="#fbbf24" stroke-width="1.4"stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    </div>
</header>
