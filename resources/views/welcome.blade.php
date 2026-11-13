<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invitation</title>
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon/favicon1.ico') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/welcome.css') }}">
</head>
<body>
    <div class="wrapper">
        <!-- Envelope -->
        <div class="envelope-container" id="envelope">
            <img id="envelope-img" src="https://res.cloudinary.com/dd4ldehqo/image/upload/v1753521198/envelope_buqces.jpg" alt="Hogwarts Envelope">
            <div class="flap" id="flap"></div>
        </div>

        <!-- Letter -->
        <div id="letter-container">
            <button id="skip-letter" type="button" aria-controls="letter-text" hidden>Skip typing</button>
            <div id="letter-scroll">
                <p id="letter-text"></p>
            </div>
        </div>
    </div>

    <audio id="themeMusic" src="https://vz-4ff4d85b-386.b-cdn.net/8a44e706-4073-49a2-8b77-6e5a3cf1393c/play_240p.mp4" preload="auto"></audio> // Default theme song
    <audio id="writingSound" src="https://vz-4ff4d85b-386.b-cdn.net/17de5e72-19f1-43d7-9075-c58b00a7affe/play_240p.mp4" preload="auto"></audio> // Writing sound

    <script src="{{ asset('js/welcome.js') }}"></script>
</body>
</html>
