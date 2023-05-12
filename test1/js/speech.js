export function speak(text) {
    speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "nl-NL";
    speech.rate = 2;
    speech.volume = .8;
    speech.text = `${text}`;

    console.log(speech);
    speechSynthesis.speak(speech);
}

export const srSpeak = (target, priority = 'assertive') => {
    speechSynthesis.cancel();

    const text = target.getAttribute('aria-label');
    target.setAttribute('aria-live', priority);
    target.textContent = text;
};