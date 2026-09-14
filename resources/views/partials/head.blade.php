<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Miguel Carmona | Ingeniero en Sistemas</title>
    <meta name="description" content="Portafolio de Miguel Carmona, Ingeniero en Sistemas especializado en PHP, Laravel, APIs, bases de datos e integraciones."/>

    <!-- Evita, en lo posible, el flash de tema incorrecto -->
    <script>
        (
            () => {
                const savedTheme = localStorage.getItem("theme");

                if (savedTheme === "dark" || (!savedTheme && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                    document.documentElement.classList.add("dark");
                }
            }
        )();
    </script>
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/styles.css') }}">
</head>