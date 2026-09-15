<!DOCTYPE html>
<html lang="es">
    @include('partials.head')
    <body>
        @include('partials.header')
        <main>
            @include('partials.hero')
            {{-- @include('partials.about-me') --}}
            @include('partials.skills')
            @include('partials.work-experience')
            @include('partials.projects')
            @include('partials.services')
            {{-- @include('partials.contact') --}}
        </main>
        @include('partials.footer')

        <!-- =======================================================
            JAVASCRIPT
        ======================================================== -->
        <script src="{{ asset('js/scripts.js') }}"></script>
    </body>
</html>