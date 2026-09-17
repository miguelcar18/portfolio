{{-- PROYECTOS --}}

<section id="projects" class="section">
    <div class="container">
        <div class="section-heading">
            <h2 class="section-kicker">
                <span class="section-kicker-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                        <path d="m8 6-5 6 5 6" />
                        <path d="m16 6 5 6-5 6" />
                        <path d="m14 4-4 16" />
                    </svg>
                </span>
                <span class="section-kicker-text" data-i18n="projects.kicker">Proyectos</span>
            </h2>
        </div>

        {{-- Filtros --}}
        <div class="project-filters" id="projectFilters">
            <button class="filter-button active" title="Mostrar todos los proyectos" data-filter="all" data-i18n="filters.all">Todos</button>
            <button class="filter-button" title="Filtrar proyectos por PHP" data-filter="php">PHP</button>
            <button class="filter-button" title="Filtrar proyectos por Laravel" data-filter="laravel">Laravel</button>
            <button class="filter-button" title="Filtrar proyectos por JavaScript" data-filter="javascript">JavaScript</button>
            <button class="filter-button" title="Filtrar proyectos por bases de datos" data-filter="database" data-i18n="filters.database">Base de datos</button>
            <button class="filter-button" title="Filtrar proyectos por APIs" data-filter="api">APIs</button>
            <button class="filter-button" title="Filtrar proyectos por Docker" data-filter="docker">Docker</button>
        </div>
        <div id="projectsList" class="projects-list"></div>
        <div class="projects-actions" id="projectsActions">
            <button id="loadMore" type="button" class="button button-primary" title="Mostrar más proyectos" data-i18n="projects.loadMore">Ver más</button>
            <button id="resetProjects" type="button" class="button button-secondary" title="Restablecer filtros de proyectos" data-i18n="projects.reset">Restablecer</button>
        </div>
    </div>
</section>
