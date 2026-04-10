const modal1 = document.getElementById('id08');
const close1 = document.getElementById('close8');
const modal2 = document.getElementById('id09');
const close2 = document.getElementById('close9');
const castle = document.getElementById('castle');
const enterCastle = document.querySelector('.enter-castle');
const sound1 = document.getElementById('normal-audio');
const sound2 = new Audio('https://vz-4ff4d85b-386.b-cdn.net/c6883ca8-8f58-4f3c-8e0a-0f4d4e051b6a/play_240p.mp4'); // Lumos sound
const sound3 = new Audio('https://vz-4ff4d85b-386.b-cdn.net/dead3ca5-0355-4f0f-b7ec-7ec9d61703df/play_240p.mp4'); // Sorting hat sound
const hall = document.getElementById('hall');
const enterHouses = document.querySelector('.enter-houses');
const spell = document.querySelector('.spell');
const wand = document.getElementById('wand');

hall.style.display = 'none';
spell.style.display = 'none';

window.addEventListener('load', () => {
    sound1.play();
    sound1.muted = false;
    castle.play();
    castle.muted = false;

    // Show first modal after 5s
    setTimeout(() => {
        modal1.style.display = 'block';
        castle.pause();
        castle.muted = true;
    }, 5000);
});

// Close modal -> resume castle
close1.addEventListener('click', () => {
    modal1.style.display = 'none';
    castle.play();
    castle.muted = false;
    sound1.play();
    sound1.muted = false;
});

// Castle finished -> show Enter Castle
castle.addEventListener('ended', () => {
    enterCastle.style.display = 'block';
});

// Enter Castle -> switch to hall + wand
enterCastle.addEventListener('click', () => {
    castle.style.display = 'none';
    enterCastle.style.display = 'none';
    hall.style.display = 'block';
    spell.style.display = 'flex'; 
});

// Wand click -> play lumos, start hall
spell.addEventListener('click', () => {
    sound2.play();
    spell.style.display = 'none';

    setTimeout(() => {
        hall.play();
        hall.muted = false;

        // After ~5.3s -> show second modal
        setTimeout(() => {
            modal2.style.display = 'block';
            hall.pause();
            hall.muted = true;
        }, 5300);
    }, 2000);
});

// Close modal -> resume hall
close2.addEventListener('click', () => {
    modal2.style.display = 'none';
    hall.play();
    hall.muted = false;
});

// Hall finished -> show Enter Houses
hall.addEventListener('ended', () => {
    enterHouses.style.display = 'block';
});

// Go to Houses
enterHouses.addEventListener('click', () => {
    sound3.play();
    enterHouses.style.display = 'none';
    setTimeout(() => {
        window.location.href = '/houses';
    }, 1000);
});