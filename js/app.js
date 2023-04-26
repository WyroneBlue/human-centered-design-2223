console.log('Wagwan from app.js')

import { checkInViewport, closestToZero } from "./helper.js";
import { doubleTap } from "./doubleTap.js";
import { speak, srSpeak } from "./speech.js";

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

const handleScroll = (e) => {

    // check if the top of the element is closets to 0
    const mappedItems = options.map(option => checkInViewport(option).top);
    const activeItem = options[mappedItems.indexOf(closestToZero(mappedItems))];

    speak(activeItem.getAttribute('aria-label'));

    // navigator.vibrate(100);
};

let fired = false;
document.addEventListener('scroll', function (e) {

    if (fired) return;
    fired = true;
    setTimeout(function () {
        console.log("scrolling");
        handleScroll();
        fired = false;
    }, 700);
}, true);

options.forEach(option => {

    option.addEventListener('click', (e) => {
        const target = e.target;
        console.log(target.getAttribute('aria-label'));
        srSpeak(target);
    });

    option.addEventListener('dblclick', (e) => {
        const target = e.target;
        console.log(target.getAttribute('aria-label'));
        window.location.href = target.getAttribute('data-href');
    });

    doubleTap(option, 500, 40);
});