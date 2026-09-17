<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Miguel Carmona | Ingeniero en Sistemas</title>
    <meta name="description" content="Portafolio de Miguel Carmona, Ingeniero en Sistemas especializado en PHP, Laravel, APIs, bases de datos e integraciones." />
    <link rel="icon" type="image/png" href="{{ asset('images/logo.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('images/logo.png') }}">
    <meta name="author" content="Miguel Carmona" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="theme-color" content="#f0eee9" />
    <link rel="canonical" href="https://miguelcarmona.dev/" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:site_name" content="Miguel Carmona" />
    <meta property="og:title" content="Miguel Carmona | Ingeniero en Sistemas" />
    <meta property="og:description" content="Portafolio de Miguel Carmona, Ingeniero en Sistemas especializado en PHP, Laravel, APIs, bases de datos e integraciones." />
    <meta property="og:url" content="https://miguelcarmona.dev/" />
    <meta property="og:image" content="{{ asset('images/favicon.png') }}" />
    <meta property="og:image:alt" content="Logo de Miguel Carmona" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Miguel Carmona | Ingeniero en Sistemas" />
    <meta name="twitter:description" content="Portafolio de Miguel Carmona, Ingeniero en Sistemas especializado en PHP, Laravel, APIs, bases de datos e integraciones." />
    <meta name="twitter:image" content="{{ asset('images/favicon.png') }}" />
    <meta name="twitter:image:alt" content="Logo de Miguel Carmona" />

    <!-- Datos estructurados para buscadores y sistemas que interpretan contenido web. -->
    {{--
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "ProfilePage",
                    "@id": "https://miguelcarmona.dev/#home",
                    "url": "https://miguelcarmona.dev/",
                    "name": "Miguel Carmona | Ingeniero en Sistemas",
                    "isPartOf": { "@id": "https://miguelcarmona.dev/#home" },
                    "mainEntity": { "@id": "https://miguelcarmona.dev/#home" },
                    "inLanguage": "es"
                },
                {
                    "@type": "WebSite",
                    "@id": "https://miguelcarmona.dev/#home",
                    "url": "https://miguelcarmona.dev/",
                    "name": "Miguel Carmona",
                    "inLanguage": "es"
                },
                {
                    "@type": "Person",
                    "@id": "https://miguelcarmona.dev/#home",
                    "name": "Miguel Carmona",
                    "url": "https://miguelcarmona.dev/",
                    "jobTitle": "Ingeniero en Sistemas | Web Developer",
                    "description": "Portafolio de Miguel Carmona, Ingeniero en Sistemas especializado en PHP, Laravel, APIs, bases de datos e integraciones.",
                    "knowsAbout": [
                        "PHP", "Laravel", "JavaScript", "MySQL", "PostgreSQL", "REST APIs", "Docker", "Linux", "Git"
                    ]
                },
                {
                    "@type": "ItemList",
                    "@id": "https://miguelcarmona.dev/#projects",
                    "name": "Proyectos de Miguel Carmona",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Top10Books",
                                "description": "Aplicación e integración orientada a la gestión de productos, pedidos y comunicación entre diferentes sistemas.",
                                "keywords": ["PHP", "Laravel", "MySQL", "API"]
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Integración Qubia",
                                "description": "Integración de productos y datos de Magento con una plataforma externa, incluyendo reglas de sincronización y procesos automatizados.",
                                "keywords": ["PHP", "Laravel", "Magento", "API"]
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Panel administrativo",
                                "description": "Panel web para administrar información y procesos internos mediante una aplicación basada en Laravel.",
                                "keywords": ["PHP", "Laravel", "JavaScript"]
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 4,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Development Stack",
                                "description": "Entorno de desarrollo basado en Linux y Docker para trabajar con aplicaciones PHP y servicios relacionados.",
                                "keywords": ["Docker", "Linux", "PHP"]
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 5,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Sincronización de productos",
                                "description": "Proceso automatizado para sincronizar productos y atributos entre aplicaciones y plataformas externas.",
                                "keywords": ["PHP", "Laravel", "MySQL", "API"]
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 6,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Procesamiento de pedidos",
                                "description": "Sistema para procesar información de pedidos y comunicar cambios entre diferentes plataformas.",
                                "keywords": ["PHP", "Laravel", "API"]
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 7,
                            "item": {
                                "@type": "CreativeWork",
                                "name": "Herramientas internas",
                                "description": "Conjunto de herramientas desarrolladas para facilitar tareas administrativas y operaciones internas.",
                                "keywords": ["PHP", "Laravel", "JavaScript"]
                            }
                        }
                    ]
                }
            ]
        }
    </script>
    --}}
    <script>
        (() => {
            const savedTheme = localStorage.getItem("theme");

            if (savedTheme === "dark" || (!savedTheme && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                document.documentElement.classList.add("dark");
            }
        })();
    </script>
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/styles.css') }}">
</head>
