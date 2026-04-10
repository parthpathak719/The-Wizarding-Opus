<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Details</title>
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon/favicon4.ico') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/details.css') }}">
</head>
<body style="background: url('{{ $details->background_image }}') no-repeat center top fixed; background-size: contain; margin: 0; padding: 0; background-color: #000;">
    
    
    <div class="content">
        <h1>{{ $details->name }}</h1>

        <div class="info-grid">
            <div class="label">Type:</div>
            <div class="value">{{ $details->type }}</div>

            <div class="label">Wand Core:</div>
            <div class="value">{{ $details->wand }}</div>

            <div class="label">Specialties:</div>
            <div class="value">{{ $details->specialisation }}</div>

            <div class="label">Patronus:</div>
            <div class="value">{{ $details->patronus }}</div>

            <div class="label">Titles:</div>
            <div class="value">{{ $details->title }}</div>
        </div>

        <h2>Bio:</h2>
        <p>{{ $details->bio }}</p>

        @if(!empty($details->quote))
            <h2>Famous Quotes:</h2>
            @foreach (explode("' '",trim($details->quote,"'")) as $q)
                <blockquote>'{{$q}}'</blockquote>
            @endforeach
        @endif


        @if (empty($details->theme_song))
            <audio id="normal-audio" loop muted preload="auto">
                <source src="https://vz-4ff4d85b-386.b-cdn.net/8a44e706-4073-49a2-8b77-6e5a3cf1393c/play_240p.mp4"> // Default theme song
            </audio>
        @else
            @if($details->id == 3)
                <audio id="normal-audio" loop muted preload="auto">
                    <source src="https://vz-4ff4d85b-386.b-cdn.net/d322937d-8072-4754-97a3-d02614adf2ff/play_240p.mp4"> // Dumbledore's theme
                </audio>
            @elseif($details->id == 19)
                <audio id="normal-audio" loop muted preload="auto">
                    <source src="https://vz-4ff4d85b-386.b-cdn.net/2d28bc9e-9978-4b8f-b8d4-0f036a7b59de/play_240p.mp4"> // Harry's theme
                </audio>
            @else
                <audio id="normal-audio" loop muted>
                    <source src="https://vz-4ff4d85b-386.b-cdn.net/3044eb32-1bed-44c2-b954-4f189881fc07/play_240p.mp4"> // Voldermort's theme
                </audio>
            @endif
        @endif
    </div>
    <script src={{ asset('js/details.js') }}></script>
</body>
</html>
