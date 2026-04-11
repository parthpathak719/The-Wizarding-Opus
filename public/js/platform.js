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

    // Bunny Stream provides thumbnails at this URL — no CORS issue
    const videoId = 'd46f4e5b-7743-40dd-99ed-14f661bff17d';
    const thumbnailUrl = `https://vz-4ff4d85b-386.b-cdn.net/${videoId}/thumbnail.jpg`;

    const zoomDiv = document.createElement('div');
    zoomDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: url(${thumbnailUrl}) center center / contain no-repeat;
        background-color: black;
        z-index: 999;
        transform: scale(1);
        transform-origin: center center;
        animation: zoomRun 2.2s ease-in forwards;
    `;

    document.body.appendChild(zoomDiv);
    wallVideo.style.display = 'none';

    setTimeout(() => {
        blackout.classList.add('show');
    }, 1900);

    setTimeout(() => {
        window.location.href = "/kingcross";
    }, 2300);
});