// Log entries — edit the text and swap in a real photo whenever you're ready
const entries = [
    {
        time: "08/07/2026",
        text: "It started with little touches, lingering looks, and a feeling neither of us was ready to name.",
        photo: "photos/entry1.jpg"
    },
    {
        time: "08/14/2026",
        text: "Somewhere between the flirting and the teasing, you became someone I simply wanted beside me.",
        photo: "photos/entry2.jpg"
    },
    {
        time: "08/19/2026",
        text: "We started learning the little things | how we love, how we care, and what makes each other feel at home.",
        photo: "photos/entry3.jpg"
    },
    {
        time: "09/15/2026",
        text: "And now, after all the little moments in between, I'm still finding new reasons to choose you, Captain.",
        photo: "photos/entry4.jpg"
    }
];

let index = 0;
const entriesContainer = document.getElementById('entries');
const signal = document.getElementById('signal');
const decodeBtn = document.getElementById('decode-btn');

function addEntry() {
    if (index >= entries.length) return;

    const e = entries[index];
    const card = document.createElement('div');
    card.className = 'entry';
    card.innerHTML = `
        <div class="entry-body">
            <div class="entry-time">LOG ${String(index + 1).padStart(2, '0')} // ${e.time}</div>
            <div class="entry-text">${e.text}</div>
        </div>
        <div class="entry-photo"><img src="${e.photo}" alt="Log ${index + 1} photo"></div>
    `;
    entriesContainer.appendChild(card);

    gsap.from(card, {
        opacity: 0,
        y: 24,
        duration: 0.5,
        ease: 'power2.out'
    });

    index++;
    signal.textContent = `SIGNAL // ${index} OF ${entries.length} DECODED`;

    if (index === entries.length) {
        decodeBtn.textContent = 'Decode Final Transmission →';
        decodeBtn.classList.add('final');
    }
}

decodeBtn.addEventListener('click', () => {
    if (index < entries.length) {
        addEntry();
    } else {
        gsap.to('body', {
            opacity: 0,
            duration: 0.6,
            onComplete: () => {
                window.location.href = 'debrief.html';
            }
        });
    }
});

// Reveal the first entry automatically
window.addEventListener('load', addEntry);
