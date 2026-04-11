const bgVideo = document.getElementById('bg-video');
const modal = document.getElementById('id06');
const close = document.getElementById('close6');
const wallVideo = document.getElementById('wall-video');
const sound = new Audio('https://vz-4ff4d85b-386.b-cdn.net/317bf6c2-a18b-4b0f-8c36-25c5a60ee391/play_240p.mp4'); // Zoom sound
const ticket = document.getElementById('ticket');
const gothrough = document.querySelector('.go-through');
const blackout = document.getElementById('blackout');

wallVideo.style.display = 'none';

window.addEventListener('load', () => {
    modal.style.display = 'block';
    bgVideo.play();
    bgVideo.muted = false;
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
    bgVideo.play();
    bgVideo.muted = false;
    setTimeout(() => {
        ticket.style.display = 'block';
        document.querySelector('.arrow-label').style.display = 'block';
    }, 5000);
});

// Click ticket
ticket.addEventListener('click', function() {
    wallVideo.style.display = 'flex';
    wallVideo.muted = false;
    wallVideo.currentTime = 0;
    wallVideo.play().catch(err => console.warn("Autoplay with sound blocked:", err));

    ticket.style.display = 'none';
    document.querySelector('.arrow-label').style.display = 'none';
    bgVideo.style.display = 'none';
    bgVideo.muted = true;
});

wallVideo.addEventListener('timeupdate', function() {
    if (wallVideo.currentTime >= wallVideo.duration) {
        wallVideo.pause();
        gothrough.style.display = 'block';
    }
});

// Click gothrough to run animation
gothrough.addEventListener('click', function() {
    sound.play();
    gothrough.style.display = 'none';

    // Force GPU compositing layer before animation
    wallVideo.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
    wallVideo.getBoundingClientRect(); // flush reflow

    wallVideo.classList.add('run-to-wall');

    setTimeout(() => {
        blackout.classList.add('show');
    }, 1900);

    setTimeout(() => {
        window.location.href = "/kingcross";
    }, 2300);
});