import { speak } from "./speech.js";

const messages = [
    'Hey, ben je er nog?',
    'Als je geen keuze maakt, krijg je geen mooie outfit hè',
    'Je hebt nog geen actie ondernomen',
    'Je verspilt batterij door mij open te laten staan',
    'Ik ben hier nog steeds',
    'Hey, laat je me niet in de steek?',
    'scroll door de pagina om een optie te kiezen',
    'Joehoe, ik ben hier nog',
    'Ben je er nog?',
];

const idleMessage = () => {
    const random = Math.floor(Math.random() * messages.length);
    const message = messages[random];
    speak(message);
}

const idleCheck = setInterval(idleMessage, 10000);
export const startIdleCheck = () => idleCheck;
export const stopIdleCheck = () => clearInterval(idleCheck);
