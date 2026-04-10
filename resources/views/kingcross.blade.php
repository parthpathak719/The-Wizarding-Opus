<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>King Cross</title>
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon/favicon8.ico') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/kingcross.css') }}">
</head>
<body>
    <div class="modal7" id="id07">
        <div id="modal-content7">
            <span id="close7">&times;</span>
            <h1>Welcome To King Cross Station!!</h1>
            <p>Board The Hogwarts Train!!</p>
        </div>
    </div>

    <!-- Background video -->
    <video id="bg-video" muted preload="auto">
        <source src="https://vz-4ff4d85b-386.b-cdn.net/ae44d97d-5405-4ab4-bf80-b51509d66578/play_1080p.mp4" type="video/mp4">
    </video>

    <div class="board">
        <p>Boarding Here</p>
        <div class="arrow-down"></div>
    </div>

    <video id="train" muted preload="auto">
        <source src="https://vz-4ff4d85b-386.b-cdn.net/ea21b2c0-f65f-428f-aa7f-5b4dfd4d4717/play_1080p.mp4" type="video/mp4">
    </video>

    <script src="{{ asset('js/kingcross.js') }}"></script>
</body>
</html>
