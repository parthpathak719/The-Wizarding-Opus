const envelope = document.getElementById('envelope');
const flap = document.getElementById('flap');
const letterContainer = document.getElementById('letter-container');
const letterText = document.getElementById('letter-text');
const music = document.getElementById('themeMusic');
const skipLetter = document.getElementById('skip-letter');
const writingSound = document.getElementById('writingSound');
let typingTimer;

const message = `
<h1 style='text-align:center;'><b>Welcome To "The Wizarding Opus"!!</b></h1>
Dear Student,<br>
We are pleased to inform you that you have been granted access to the <strong>Wizarding Archives</strong>, 
a collection of enchanted records, ancient spells, and hidden histories preserved through centuries of magical tradition.
<br>
Located within the depths of <strong>Hogwarts Archives Of Magic</strong> these Archives are documents long protected by the Ministry of Magic and Hogwarts' own Historians Circle —
tomes that whisper when opened, portraits that remember, and maps that shift with the tides of time.
<br>
You are now among a select few trusted to explore this knowledge.
<br>
Use what you uncover with <b>wisdom</b>, <b>curiosity</b>, and <b>care</b>. The past is alive here — and it watches.
<br>
<i>Your journey begins now.</i>
<br>
With great respect,<br>
<strong>Parth Pathak</strong><br>
<i>Keeper of the Scrolls</i><br>
<i>Hogwarts Archives of Magic</i><br><br>
<div style="text-align:center;"><a href="/platform">Go To Platform</a></div>
`;

envelope.addEventListener('click', () => {
    envelope.classList.add('unfolding');
    setTimeout(() => {
        envelope.style.display = 'none';
        letterContainer.style.display = 'flex';
        letterContainer.classList.add('show');
        music.play().catch(() => {});
        skipLetter.hidden = false;
        typeMessage(message);
    }, 1000); // match duration with animation
}, { once: true });

function finishLetter() {
    clearTimeout(typingTimer);
    letterText.innerHTML = message;
    writingSound.pause();
    writingSound.currentTime = 0;
    skipLetter.hidden = true;
}

skipLetter.addEventListener('click', () => {
    finishLetter();
    letterText.querySelector('a').focus();
});

function typeMessage(text) {
    let i = 0;
    let buffer = '';
    const speed = 30;

    writingSound.loop=true;
    writingSound.play().catch(() => {});
    writingSound.currentTime=0;
            
    function type() {
        if (i >= text.length) {
            finishLetter();
            return;
        }
        // If it's an HTML tag, read full tag and append to buffer
        if (text[i] === '<') {
            let tag = '';
            while (i < text.length && text[i] !== '>') {
                tag += text[i];
                i++;
            }
            tag += '>';
            i++;
            buffer += tag;
        } else {
            buffer += text[i];
            i++;
        }
                
        letterText.innerHTML = buffer;
        typingTimer = setTimeout(type, speed);
    }
    type();
}
