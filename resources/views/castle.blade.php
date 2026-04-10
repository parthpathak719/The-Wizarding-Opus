<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hogwarts</title>
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon/favicon9.ico') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/castle.css') }}">
</head>
<body>
    
    <!-- Background audio -->
    <audio id="normal-audio" loop muted preload="auto">
        <source src="https://vz-4ff4d85b-386.b-cdn.net/faa217a9-ab83-4777-a5ab-d24f7e4626a2/play_240p.mp4"> // Song2
    </audio>

    <!-- Background video -->
    <video id="castle" muted preload="auto">
        <source src="https://vz-4ff4d85b-386.b-cdn.net/7c260f29-93c5-4308-9cd7-151e3b5522d2/play_1080p.mp4" type="video/mp4">
    </video>

    <!-- First Modal -->
    <div class="modal8" id="id08">
        <div id="modal-content8">
            <span id="close8">&times;</span>
            <h1>Welcome To "Hogwarts Archives Of Magic"!!</h1>
            <p>Enter The Castle!!</p>
        </div>
    </div>

    <!-- Enter Castle -->
    <div class="enter-castle">
        <p>Enter Castle</p>
        <div class="arrow-down"></div>
    </div>

    <!-- Wand Interaction -->
    <div class="spell">
        <img id="wand" src="https://res.cloudinary.com/dd4ldehqo/image/upload/v1759047279/wand_j8hy1y.png" alt="Magic Wand">
        <div class="arrow-up"></div>
        <p>Use Your Wand</p>
    </div>

    <!-- Hall video -->
    <video id="hall" muted preload="auto">
        <source src="https://vz-4ff4d85b-386.b-cdn.net/6a9e9e6a-6f13-44c7-8921-ba8b1c21ba42/play_1080p.mp4" type="video/mp4">
    </video>

    <!-- Second Modal -->
    <div class="modal9" id="id09">
        <div id="modal-content9">
            <span id="close9">&times;</span>
            <h1>Welcome To THE WIZARDING ARCHIVES</h1>
            <p>The Sorting Hat Will Guide You To The "Houses"!!</p>
        </div>
    </div>

    <!-- Go to Houses -->
    <div class="enter-houses">
        <p>Go To Houses</p>
        <div class="arrow-down"></div>
    </div>

    <!-- External JS -->
    <script src="{{ asset('js/castle.js') }}"></script>
</body>
</html>
