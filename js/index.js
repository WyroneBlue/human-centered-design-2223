console.log('Wagwan from app.js');
import { speak, srSpeak } from './speech.js';
import { startIdleCheck, stopIdleCheck } from './idle-check.js';
const main = document.querySelector('main');
const options = [
    document.querySelector('button[aria-label="kleren bekijken"]'),
    document.querySelector('button[aria-label="kleren toevoegen"]'),
    document.querySelector('button[aria-label="setjes bekijken"]'),
    document.querySelector('button[aria-label="setjes toevoegen"]'),
]

if(navigator.vibrate) {
    console.log('Vibration is supported');
} else {
    console.log('Vibration is not supported');
}

options.forEach(option => {
    option.addEventListener('click', (e) => {
        const target = e.target;
        console.log(target.getAttribute('aria-label'));
        window.location.href = target.getAttribute('data-href');
    });

    option.addEventListener('focus', (e) => {
        const target = e.target;
        console.log(target.getAttribute('aria-label'));
        const label = target.getAttribute('aria-label');
        speak(label);
    });
});

startIdleCheck();
window.addEventListener('click', () => {
    console.log('window loaded');
    stopIdleCheck();
});