<x-layout>
    <x-slot name="head">
        <title>Cast</title>
        <link rel="icon" type="image/x-icon" href="{{ asset('favicon/favicon6.ico') }}">
    </x-slot>

    <div class="modal5" id="id05">
        <div id="modal-content5">
            <span id="close5">&times;</span>
                <h1>Welcome To Cast!!</h1>
                <p>Meet The Magical Cast Of Harry Potter From The Movies!!</p>
        </div>
    </div>

    <video id="bg-video" loop muted preload="auto">
        <source src="https://vz-4ff4d85b-386.b-cdn.net/7e3020a3-398d-4ec7-b903-6339b6a452db/play_720p.mp4" type="video/mp4">
    </video>

    <script src="{{ asset('js/cast.js') }}"></script>
</x-layout>