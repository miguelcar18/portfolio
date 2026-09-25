<!DOCTYPE html>
<html lang="{{ request()->route('lang') ?? 'es' }}">
    @include('partials.head')
    <body>
        <a class="skip-link" href="#main-content">Saltar al contenido principal</a>
        @include('partials.header')
        <main>
            @include('partials.hero')
            {{-- @include('partials.about-me') --}}
            @include('partials.skills')
            @include('partials.work-experience')
            {{-- @include('partials.projects') --}}
            @include('partials.services')
            @include('partials.useful-sites')
            {{-- @include('partials.contact') --}}
        </main>
        @include('partials.footer')

        <!-- =======================================================
            JAVASCRIPT
        ======================================================== -->
        <script src="{{ asset('js/scripts.js') }}"></script>
    </body>
</html>
