<x-layout>
    <x-slot name="head">
        <title>Result</title>
        <link rel="icon" type="image/x-icon" href="{{ asset('favicon/favicon7.ico') }}">
    </x-slot>
    <body style="background: url('https://images-cdn.ubuy.co.in/634269fb462eba2a6d01d3b6-harry-potter-movie-collage-1000-piece.jpg') no-repeat center top fixed; background-size: contain; background-attachment: fixed; margin: 0; padding: 0; box-sizing: border-box; background-color: #000; font-family: Georgia, serif;">
        
        <audio id="normal-audio" loop muted preload="auto">
            <source src="https://vz-4ff4d85b-386.b-cdn.net/8a44e706-4073-49a2-8b77-6e5a3cf1393c/play_240p.mp4"> // Default theme song
        </audio>

        <div id="quiz-form">
            <h1 id="quiz-title">Your Score: {{ $score }}/{{ $total }}</h1>

            @foreach ($results as $r)
                <div class="question-block">
                    <p class="question-text">&nbsp;&nbsp;Q{{ $loop->iteration }}. {{ $r['question'] }}</p>
                    <p class="answer-text"><strong>You selected:</strong> {{ $r['selected'] }}</p>
                    <p class="answer-text"><strong>Result:</strong> {{ $r['correct'] }}</p>
                    <p class="answer-text"><strong>Correct Answer:</strong> {{ $r['correct_answer'] }}</p>
                </div>
            @endforeach
        </div>
        <script src="{{ asset('js/quizAction.js') }}"></script>
    </body>
</x-layout>
