const bgVideo = document.getElementById('bg-video');
const modal = document.getElementById('id06');
const close = document.getElementById('close6');
const wallVideo = document.getElementById('wall-video');
const sound = new Audio('https://vz-4ff4d85b-386.b-cdn.net/317bf6c2-a18b-4b0f-8c36-25c5a60ee391/play_240p.mp4'); // Zoom sound
const ticket = document.getElementById('ticket');
const gothrough = document.querySelector('.go-through');
const blackout = document.getElementById('blackout');
const wallZoom = document.getElementById('wall-zoom');
const wallFrame = document.createElement('canvas');
let wallFrameReady = false;

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
    bgVideo.pause();
});

wallVideo.addEventListener('ended', function() {
    prepareWallFrame();
    gothrough.style.display = 'block';
});

function prepareWallFrame() {
    if (!wallVideo.videoWidth || !wallVideo.videoHeight) return;

    // Keep both drawing surfaces within 1080p, even on a large/high-DPI screen.
    const resolution = Math.min(1, 1920 / window.innerWidth, 1080 / window.innerHeight);
    wallFrame.width = wallZoom.width = Math.round(window.innerWidth * resolution);
    wallFrame.height = wallZoom.height = Math.round(window.innerHeight * resolution);
    const context = wallFrame.getContext('2d', { alpha: false });
    const zoomContext = wallZoom.getContext('2d', { alpha: false });
    if (!context || !zoomContext) return;

    const fit = Math.min(wallFrame.width / wallVideo.videoWidth, wallFrame.height / wallVideo.videoHeight);
    const width = wallVideo.videoWidth * fit;
    const height = wallVideo.videoHeight * fit;
    context.fillStyle = 'black';
    context.fillRect(0, 0, wallFrame.width, wallFrame.height);
    // Drawing is allowed for CDN videos; no pixel readback or export is needed.
    context.drawImage(wallVideo, (wallFrame.width - width) / 2, (wallFrame.height - height) / 2, width, height);
    zoomContext.drawImage(wallFrame, 0, 0);
    wallFrameReady = true;
}

// Match the existing CSS ease-in curve: cubic-bezier(0.42, 0, 1, 1).
function wallZoomEase(progress) {
    let low = 0;
    let high = 1;
    for (let i = 0; i < 16; i++) {
        const t = (low + high) / 2;
        const x = 3 * (1 - t) ** 2 * t * 0.42 + 3 * (1 - t) * t ** 2 + t ** 3;
        if (x < progress) low = t;
        else high = t;
    }
    const t = (low + high) / 2;
    return 3 * (1 - t) * t ** 2 + t ** 3;
}

function zoomThroughWall() {
    if (!wallFrameReady) {
        wallVideo.classList.add('run-to-wall');
        return;
    }

    wallZoom.style.display = 'block';
    wallVideo.style.display = 'none';
    const context = wallZoom.getContext('2d');
    const started = performance.now();
    function draw(now) {
        const progress = Math.min((now - started) / 2200, 1);
        const scale = 1 + 14 * wallZoomEase(progress);
        const width = wallZoom.width * scale;
        const height = wallZoom.height * scale;
        // Crop into a fixed-size canvas instead of creating a 15x video layer.
        context.drawImage(wallFrame, (wallZoom.width - width) / 2, (wallZoom.height - height) / 2, width, height);
        if (progress < 1) requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
}

// Click gothrough to run animation
gothrough.addEventListener('click', function() {
    sound.play();
    gothrough.style.display = 'none';

    zoomThroughWall();

    setTimeout(() => {
        blackout.classList.add('show');
    }, 1900);

    setTimeout(() => {
        window.location.href = "/kingcross";
    }, 2300);
}, { once: true });
