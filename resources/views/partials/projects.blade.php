<!-- =====================================================
        PROYECTOS
====================================================== -->

<section id="proyectos" class="section">
    <div class="container">
        <div class="section-heading">
            <div class="section-kicker">
                <span class="section-kicker-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m8 6-5 6 5 6" />
                        <path d="m16 6 5 6-5 6" />
                        <path d="m14 4-4 16" />
                    </svg>
                </span>
                <span class="section-kicker-text" data-i18n="projects.kicker">Proyectos</span>
            </div>
            <h2 class="section-title" data-i18n="projects.title">Algunos proyectos en los que he trabajado</h2>
            <p class="section-description" data-i18n="projects.description"> Una selección de aplicaciones, integraciones, APIs y herramientas desarrolladas o mantenidas.</p>
        </div>

        <!-- Filtros -->
        <div class="project-filters" id="projectFilters">
            <button class="filter-button active" data-filter="all" data-i18n="filters.all">Todos</button>
            <button class="filter-button" data-filter="php">PHP</button>
            <button class="filter-button" data-filter="laravel">Laravel</button>
            <button class="filter-button" data-filter="javascript">JavaScript</button>
            <button class="filter-button" data-filter="database" data-i18n="filters.database">Base de datos</button>
            <button class="filter-button" data-filter="api">APIs</button>
            <button class="filter-button" data-filter="docker">Docker</button>
        </div>
        <div id="projectsList" class="projects-list"></div>
        <div class="projects-actions" id="projectsActions">
            <button id="loadMore" class="button button-primary" data-i18n="projects.loadMore">Ver más</button>
            <button id="resetProjects" class="button button-secondary" data-i18n="projects.reset">Restablecer</button>
        </div>
    </div>
</section>