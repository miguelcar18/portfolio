/* =========================================================
    PROJECT DATA
========================================================= */

const projects = [
    {
        title: "Top10Books",
        description:
            "Aplicación e integración orientada a la gestión de productos, pedidos y comunicación entre diferentes sistemas.",
        tags: ["PHP", "Laravel", "MySQL", "API"],
        categories: ["php", "laravel", "database", "api"],
        code: "#",
        preview: "#"
    },

    {
        title: "Integración Qubia",
        description:
            "Integración de productos y datos de Magento con una plataforma externa, incluyendo reglas de sincronización y procesos automatizados.",
        tags: ["PHP", "Laravel", "Magento", "API"],
        categories: ["php", "laravel", "api"],
        code: "#",
        preview: "#"
    },

    {
        title: "Sistema de soporte interno",
        description:
            "Aplicación web para gestionar información, procesos internos y operaciones relacionadas con clientes y sistemas.",
        tags: ["PHP", "Laravel", "MySQL"],
        categories: ["php", "laravel", "database"],
        code: "#",
        preview: "#"
    },

    {
        title: "Integración de APIs",
        description:
            "Middleware desarrollado para obtener información desde diferentes servicios y centralizarla en una aplicación Laravel.",
        tags: ["PHP", "Laravel", "Guzzle", "API"],
        categories: ["php", "laravel", "api"],
        code: "#",
        preview: "#"
    },

    {
        title: "Entorno Laravel",
        description:
            "Configuración y mantenimiento de entornos de desarrollo utilizando Docker, Laravel y diferentes servicios auxiliares.",
        tags: ["Laravel", "Docker", "Linux"],
        categories: ["laravel", "docker"],
        code: "#",
        preview: "#"
    },

    {
        title: "Gestión de datos",
        description:
            "Procesamiento, actualización y sincronización de grandes cantidades de registros utilizando Laravel y bases de datos SQL.",
        tags: ["Laravel", "MySQL", "SQL"],
        categories: ["laravel", "database"],
        code: "#",
        preview: "#"
    },

    {
        title: "Dashboard de APIs",
        description:
            "Interfaz para visualizar información obtenida desde diferentes servicios y APIs externas.",
        tags: ["PHP", "Laravel", "JavaScript", "API"],
        categories: ["php", "laravel", "javascript", "api"],
        code: "#",
        preview: "#"
    },

    {
        title: "Panel administrativo",
        description:
            "Panel web para administrar información y procesos internos mediante una aplicación basada en Laravel.",
        tags: ["PHP", "Laravel", "JavaScript"],
        categories: ["php", "laravel", "javascript"],
        code: "#",
        preview: "#"
    },

    {
        title: "Development Stack",
        description:
            "Entorno de desarrollo basado en Linux y Docker para trabajar con aplicaciones PHP y servicios relacionados.",
        tags: ["Docker", "Linux", "PHP"],
        categories: ["docker", "php"],
        code: "#",
        preview: "#"
    },

    {
        title: "Sincronización de productos",
        description:
            "Proceso automatizado para sincronizar productos y atributos entre aplicaciones y plataformas externas.",
        tags: ["PHP", "Laravel", "MySQL", "API"],
        categories: ["php", "laravel", "database", "api"],
        code: "#",
        preview: "#"
    },

    {
        title: "Procesamiento de pedidos",
        description:
            "Sistema para procesar información de pedidos y comunicar cambios entre diferentes plataformas.",
        tags: ["PHP", "Laravel", "API"],
        categories: ["php", "laravel", "api"],
        code: "#",
        preview: "#"
    },

    {
        title: "Herramientas internas",
        description:
            "Conjunto de herramientas desarrolladas para facilitar tareas administrativas y operaciones internas.",
        tags: ["PHP", "Laravel", "JavaScript"],
        categories: ["php", "laravel", "javascript"],
        code: "#",
        preview: "#"
    }
];


/* =========================================================
    TRANSLATIONS
========================================================= */

const translations = {

    es: {

        "nav.about": "Sobre mí",
        "nav.technologies": "Tecnologías",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",

        "hero.name": "Miguel Carmona",
        "hero.descriptionLead": "Ingeniero en Sistemas especializado en desarrollo web",
        "hero.descriptionBody": ", enfocado en construir, mantener y mejorar aplicaciones,",
        "hero.descriptionHighlight": "APIs e integraciones con bases de datos y servicios externos.",
        "hero.projectsButton":
            "Ver mis proyectos",

        "hero.contactButton":
            "Contactarme",

        "about.kicker":
            "Sobre mí",

        "about.title":
            "Desarrollo soluciones, no solo código.",

        "about.description":
            "Mi experiencia está principalmente enfocada en aplicaciones web existentes, mantenimiento, resolución de problemas e integración de sistemas.",

        "about.highlight":
            "Durante los últimos años he trabajado principalmente con PHP y Laravel, participando en aplicaciones que necesitan conectarse con APIs externas, marketplaces, bases de datos y otros sistemas.",

        "about.cardTitle":
            "Mi enfoque",

        "about.p1":
            "Me siento especialmente cómodo trabajando sobre aplicaciones existentes: entender cómo funcionan, encontrar errores, corregirlos y realizar cambios sin romper funcionalidades que ya están en producción.",

        "about.p2":
            "También tengo experiencia trabajando con bases de datos, APIs REST, integraciones externas, procesos programados y herramientas de desarrollo.",

        "tech.kicker":
            "Tecnologías",

        "tech.title":
            "Herramientas con las que trabajo",

        "tech.description":
            "Un resumen de las principales tecnologías y herramientas que forman parte de mi experiencia.",

        "tech.languages":
            "Lenguajes",

        "tech.backend":
            "Backend & Frameworks",

        "tech.database":
            "Bases de datos",

        "tech.devops":
            "DevOps & Herramientas",

        "tech.ecommerce":
            "E-commerce & Integraciones",

        "tech.tools":
            "Herramientas",

        "experience.kicker":
            "Experiencia laboral",

        "experience.title":
            "Mi historia trabajando con tecnología",

        "experience.description":
            "Una visión resumida de mi evolución profesional.",

        "experience.item1.title":
            "El comienzo",

        "experience.item1.text":
            "Inicio de mi etapa profesional trabajando en desarrollo web y soporte técnico, participando en el mantenimiento de aplicaciones y sitios web.",

        "experience.item2.title":
            "Más desarrollo, menos soporte",

        "experience.item2.text":
            "Mayor participación en desarrollo y mantenimiento de aplicaciones PHP, trabajando con bases de datos y resolución de problemas en sistemas existentes.",

        "experience.item3.title":
            "Integraciones y APIs",

        "experience.item3.text":
            "Trabajo con Laravel, APIs externas, marketplaces, procesos de sincronización e integración entre diferentes sistemas.",

        "experience.item4.title":
            "Especialización en Laravel",

        "experience.item4.text":
            "Enfoque cada vez mayor en Laravel, mantenimiento de aplicaciones existentes, APIs, Eloquent, bases de datos, jobs, procesos programados e integraciones.",

        "projects.kicker":
            "Proyectos",

        "projects.title":
            "Algunos proyectos en los que he trabajado",

        "projects.description":
            "Una selección de aplicaciones, integraciones, APIs y herramientas desarrolladas o mantenidas.",

        "filters.all":
            "Todos",

        "filters.database":
            "Base de datos",

        "projects.loadMore":
            "Ver más",

        "projects.reset":
            "Restablecer",

        "projects.code":
            "Código",

        "projects.preview":
            "Vista previa",

        "services.kicker":
            "Servicios",

        "services.title":
            "En qué puedo ayudarte",

        "services.item1.title":
            "Desarrollo PHP / Laravel",

        "services.item1.text":
            "Desarrollo y mantenimiento de aplicaciones web utilizando PHP y Laravel.",

        "services.item2.title":
            "Mantenimiento y debugging",

        "services.item2.text":
            "Análisis de errores, resolución de problemas y mejoras sobre aplicaciones existentes.",

        "services.item3.title":
            "APIs e integraciones",

        "services.item3.text":
            "Integración con APIs externas y comunicación entre diferentes sistemas.",

        "contact.title":
            "¿Tienes un proyecto o una oportunidad?",

        "contact.description":
            "Si buscas alguien que pueda trabajar sobre una aplicación existente, resolver problemas o desarrollar nuevas funcionalidades con PHP y Laravel, podemos hablar.",

        "contact.button":
            "Hablemos",

        "footer.rights":
            "Todos los derechos reservados.",

        "footer.home":
            "Inicio",

        "footer.projects":
            "Proyectos",

        "footer.contact":
            "Contacto"
    },


    en: {

        "nav.about":
            "About me",

        "nav.technologies":
            "Technologies",

        "nav.experience":
            "Experience",

        "nav.projects":
            "Projects",

        "nav.contact":
            "Contact",

        "hero.name": "Miguel Carmona",
        "hero.descriptionLead": "Systems Engineer specialized in web development",
        "hero.descriptionBody": ", focused on building, maintaining and improving applications,",
        "hero.descriptionHighlight": "APIs and integrations with databases and external services.",

        "hero.projectsButton":
            "View my projects",

        "hero.contactButton":
            "Contact me",

        "about.kicker":
            "About me",

        "about.title":
            "I build solutions, not just code.",

        "about.description":
            "My experience is mainly focused on existing web applications, maintenance, troubleshooting and system integrations.",

        "about.highlight":
            "Over the last few years I have mainly worked with PHP and Laravel, participating in applications that connect with external APIs, marketplaces, databases and other systems.",

        "about.cardTitle":
            "My approach",

        "about.p1":
            "I feel especially comfortable working on existing applications: understanding how they work, finding issues, fixing them and making changes without breaking functionality already in production.",

        "about.p2":
            "I also have experience working with databases, REST APIs, external integrations, scheduled processes and development tools.",

        "tech.kicker":
            "Technologies",

        "tech.title":
            "Tools I work with",

        "tech.description":
            "A summary of the main technologies and tools that are part of my experience.",

        "tech.languages":
            "Languages",

        "tech.backend":
            "Backend & Frameworks",

        "tech.database":
            "Databases",

        "tech.devops":
            "DevOps & Tools",

        "tech.ecommerce":
            "E-commerce & Integrations",

        "tech.tools":
            "Tools",

        "experience.kicker":
            "Work experience",

        "experience.title":
            "My journey working with technology",

        "experience.description":
            "A brief overview of my professional evolution.",

        "experience.item1.title":
            "The beginning",

        "experience.item1.text":
            "The beginning of my professional career working in web development and technical support, participating in application and website maintenance.",

        "experience.item2.title":
            "More development, less support",

        "experience.item2.text":
            "Greater involvement in PHP application development and maintenance, working with databases and troubleshooting existing systems.",

        "experience.item3.title":
            "Integrations and APIs",

        "experience.item3.text":
            "Working with Laravel, external APIs, marketplaces, synchronization processes and integrations between different systems.",

        "experience.item4.title":
            "Laravel specialization",

        "experience.item4.text":
            "Increasing focus on Laravel, maintenance of existing applications, APIs, Eloquent, databases, jobs, scheduled processes and integrations.",

        "projects.kicker":
            "Projects",

        "projects.title":
            "Some projects I've worked on",

        "projects.description":
            "A selection of applications, integrations, APIs and tools developed or maintained.",

        "filters.all":
            "All",

        "filters.database":
            "Database",

        "projects.loadMore":
            "View more",

        "projects.reset":
            "Reset",

        "projects.code":
            "Code",

        "projects.preview":
            "Preview",

        "services.kicker":
            "Services",

        "services.title":
            "How I can help",

        "services.item1.title":
            "PHP / Laravel Development",

        "services.item1.text":
            "Development and maintenance of web applications using PHP and Laravel.",

        "services.item2.title":
            "Maintenance & debugging",

        "services.item2.text":
            "Issue analysis, troubleshooting and improvements to existing applications.",

        "services.item3.title":
            "APIs & integrations",

        "services.item3.text":
            "Integration with external APIs and communication between different systems.",

        "contact.title":
            "Have a project or an opportunity?",

        "contact.description":
            "If you are looking for someone who can work on an existing application, solve problems or develop new functionality with PHP and Laravel, let's talk.",

        "contact.button":
            "Let's talk",

        "footer.rights":
            "All rights reserved.",

        "footer.home":
            "Home",

        "footer.projects":
            "Projects",

        "footer.contact":
            "Contact"
    }
};


/* =========================================================
    THEME
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");

const mediaQuery =
    window.matchMedia(
        "(prefers-color-scheme: dark)"
    );

function isDark() {
    return document.documentElement.classList.contains(
        "dark"
    );
}

function updateTheme() {
    const dark = isDark();

    document.documentElement.classList.toggle(
        "dark",
        dark
    );
}

themeToggle.addEventListener(
    "click",
    () => {
        const dark = !isDark();

        document.documentElement.classList.toggle(
            "dark",
            dark
        );

        localStorage.setItem(
            "theme",
            dark ? "dark" : "light"
        );
    }
);

mediaQuery.addEventListener(
    "change",
    (event) => {
        if (!localStorage.getItem("theme")) {
            document.documentElement.classList.toggle(
                "dark",
                event.matches
            );
        }
    }
);


/* =========================================================
    LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem("language") || "es";

const languageToggle =
    document.getElementById("languageToggle");

function applyTranslations() {
    const dictionary =
        translations[currentLanguage];

    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {
            const key =
                element.getAttribute("data-i18n");

            if (dictionary[key]) {
                element.textContent =
                    dictionary[key];
            }
        });

    languageToggle.textContent =
        currentLanguage === "es"
            ? "EN"
            : "ES";

    document.documentElement.lang =
        currentLanguage;
}

languageToggle.addEventListener(
    "click",
    () => {
        currentLanguage =
            currentLanguage === "es"
                ? "en"
                : "es";

        localStorage.setItem(
            "language",
            currentLanguage
        );

        applyTranslations();

        renderProjects();
    }
);


/* =========================================================
    PROJECTS
========================================================= */

const projectsList =
    document.getElementById(
        "projectsList"
    );

const loadMoreButton =
    document.getElementById(
        "loadMore"
    );

const resetProjectsButton =
    document.getElementById(
        "resetProjects"
    );

let activeFilter = "all";

let visibleCount = 2;

function getFilteredProjects() {
    if (activeFilter === "all") {
        return projects;
    }

    return projects.filter(
        (project) =>
            project.categories.includes(
                activeFilter
            )
    );
}


function projectPreview() {
    return `
        <div class="project-preview">

          <div class="preview-browser">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="preview-content">

            <div class="line"></div>
            <div class="line small"></div>

            <div class="blocks">
              <div></div>
              <div></div>
              <div></div>
            </div>

          </div>

        </div>
      `;
}


function renderProjects() {

    const dictionary =
        translations[currentLanguage];

    const filtered =
        getFilteredProjects();

    const visible =
        filtered.slice(
            0,
            visibleCount
        );

    projectsList.innerHTML = "";

    visible.forEach(
        (project) => {

            const article =
                document.createElement(
                    "article"
                );

            article.className =
                "project-card";

            article.innerHTML = `

            <div class="project-image">

              <div class="project-image-placeholder">
                ${projectPreview()}
              </div>

            </div>

            <div class="project-content">

              <h3 class="project-title">
                ${project.title}
              </h3>

              <p class="project-description">
                ${project.description}
              </p>

              <div class="project-tags">

                ${project.tags
                    .map(
                        (tag) =>
                            `<span class="project-tag">${tag}</span>`
                    )
                    .join("")}

              </div>

              <div class="project-footer">

                ${project.code &&
                    project.code !== "#"
                    ? `
                      <a
                        href="${project.code}"
                        target="_blank"
                        rel="noopener"
                        class="project-link"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m8 9-3 3 3 3"></path>
                          <path d="m16 9 3 3-3 3"></path>
                          <path d="m14 5-4 14"></path>
                        </svg>

                        ${dictionary["projects.code"]}
                      </a>
                    `
                    : `
                      <a
                        href="#"
                        class="project-link"
                        onclick="return false;"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m8 9-3 3 3 3"></path>
                          <path d="m16 9 3 3-3 3"></path>
                          <path d="m14 5-4 14"></path>
                        </svg>

                        ${dictionary["projects.code"]}
                      </a>
                    `
                }

                ${project.preview &&
                    project.preview !== "#"
                    ? `
                      <a
                        href="${project.preview}"
                        target="_blank"
                        rel="noopener"
                        class="project-link primary"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M14 3h7v7"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                        </svg>

                        ${dictionary["projects.preview"]}
                      </a>
                    `
                    : `
                      <a
                        href="#"
                        class="project-link primary"
                        onclick="return false;"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M14 3h7v7"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                        </svg>

                        ${dictionary["projects.preview"]}
                      </a>
                    `
                }

              </div>

            </div>
          `;

            projectsList.appendChild(
                article
            );
        }
    );


    const remaining =
        filtered.length -
        visibleCount;

    if (remaining > 0) {
        loadMoreButton.style.display =
            "inline-flex";
    } else {
        loadMoreButton.style.display =
            "none";
    }

    if (
        filtered.length <= 2 &&
        visibleCount <= 2
    ) {
        resetProjectsButton.style.display =
            activeFilter === "all"
                ? "none"
                : "inline-flex";
    } else {
        resetProjectsButton.style.display =
            "inline-flex";
    }
}


loadMoreButton.addEventListener(
    "click",
    () => {
        visibleCount += 2;

        renderProjects();
    }
);


resetProjectsButton.addEventListener(
    "click",
    () => {

        activeFilter = "all";

        visibleCount = 2;

        document
            .querySelectorAll(
                ".filter-button"
            )
            .forEach(
                (button) =>
                    button.classList.toggle(
                        "active",
                        button.dataset.filter ===
                        "all"
                    )
            );

        renderProjects();
    }
);


document
    .querySelectorAll(
        ".filter-button"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                activeFilter =
                    button.dataset.filter;

                visibleCount = 2;

                document
                    .querySelectorAll(
                        ".filter-button"
                    )
                    .forEach(
                        (item) =>
                            item.classList.toggle(
                                "active",
                                item === button
                            )
                    );

                renderProjects();
            }
        );

    });


/* =========================================================
    ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-links a[data-section]"
    );

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(
                            (link) => {

                                link.classList.toggle(
                                    "active",
                                    link.dataset.section ===
                                    entry.target.id
                                );

                            }
                        );

                    }

                }
            );

        },
        {
            rootMargin:
                "-25% 0px -65% 0px",
            threshold: 0
        }
    );

sections.forEach(
    (section) =>
        observer.observe(section)
);


/* =========================================================
   HERO PARTICLES
========================================================= */

const particleCanvas = document.getElementById("heroParticles");
const particleContext = particleCanvas.getContext("2d");
let particles = [];
let particleAnimationFrame;

function resizeParticleCanvas() {
    const rect = particleCanvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    particleCanvas.width = Math.round(rect.width * ratio);
    particleCanvas.height = Math.round(rect.height * ratio);
    particleContext.setTransform(ratio, 0, 0, ratio, 0, 0);

    const amount = Math.min(85, Math.max(34, Math.round((rect.width * rect.height) / 18000)));

    particles = Array.from({ length: amount }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        radius: Math.random() * 2.2 + 1.1,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        alpha: Math.random() * 0.35 + 0.55
    }));
}

function drawParticles() {
    const rect = particleCanvas.getBoundingClientRect();
    particleContext.clearRect(0, 0, rect.width, rect.height);

    particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -10) particle.x = rect.width + 10;
        if (particle.x > rect.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = rect.height + 10;
        if (particle.y > rect.height + 10) particle.y = -10;

        particleContext.beginPath();
        particleContext.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        particleContext.fillStyle = `rgba(37, 99, 235, ${particle.alpha})`;
        particleContext.shadowColor = "rgba(37, 99, 235, 0.8)";
        particleContext.shadowBlur = 7;
        particleContext.fill();
        particleContext.shadowBlur = 0;
    });

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 105) {
                const opacity = (1 - distance / 105) * 0.38;
                particleContext.beginPath();
                particleContext.moveTo(particles[i].x, particles[i].y);
                particleContext.lineTo(particles[j].x, particles[j].y);
                particleContext.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
                particleContext.lineWidth = 1;
                particleContext.stroke();
            }
        }
    }

    particleAnimationFrame = requestAnimationFrame(drawParticles);
}

resizeParticleCanvas();
drawParticles();
window.addEventListener("resize", resizeParticleCanvas, { passive: true });

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cancelAnimationFrame(particleAnimationFrame);
    particles.forEach((particle) => { particle.vx = 0; particle.vy = 0; });
    drawParticles();
    cancelAnimationFrame(particleAnimationFrame);
}


/* =========================================================
   SCROLL TOP
========================================================= */

const scrollTopButton =
    document.getElementById(
        "scrollTop"
    );

function updateScrollButton() {

    scrollTopButton.classList.toggle(
        "visible",
        window.scrollY > 450
    );

}

window.addEventListener(
    "scroll",
    updateScrollButton,
    { passive: true }
);

scrollTopButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
    NAV CLICK
========================================================= */

navLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                navLinks.forEach(
                    (item) =>
                        item.classList.remove(
                            "active"
                        )
                );

                link.classList.add(
                    "active"
                );

            }
        );

    }
);


/* =========================================================
    INITIALIZATION
========================================================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();

applyTranslations();

renderProjects();

updateTheme();

updateScrollButton();