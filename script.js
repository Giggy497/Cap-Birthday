// One orchestrated entrance sequence — not scattered per-element animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to('.eyebrow', { opacity: 1, duration: 0.6 })
      .to('h1', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.2')
      .to('.subtitle', { opacity: 1, duration: 0.4, onStart: typeSubtitle }, '-=0.1')
      .to('.btn', { opacity: 1, duration: 0.5 }, '+=1.6')
      .to('.coords', { opacity: 1, duration: 0.6 }, '-=0.2');
});

const subtitleText = "A short log of reasons you're worth celebrating, Captain.";
function typeSubtitle() {
    const el = document.getElementById('typewriter');
    let i = 0;
    const type = () => {
        if (i < subtitleText.length) {
            el.textContent += subtitleText.charAt(i);
            i++;
            setTimeout(type, 28);
        }
    };
    type();
}

document.getElementById('open-log').addEventListener('click', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
            window.location.href = 'log.html';
        }
    });
});
