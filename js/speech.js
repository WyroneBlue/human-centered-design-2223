const synth = window.speechSynthesis;
let currentVoice;
function loadVoices() {
    currentVoice = synth.getVoices()
    .filter(voice => voice.voiceURI === "Microsoft Frank - Dutch (Netherlands)")[0];
}

// in Google Chrome the voices are not ready on page load
if ("onvoiceschanged" in synth) {
    synth.onvoiceschanged = loadVoices;
} else {
    loadVoices();
}

export function speak(text) {
    speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance();
    speech.voice = currentVoice;
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