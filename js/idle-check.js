import { speak } from "./speech.js";

const messages = [
    'Hey, ben je er nog?',
    'Hallo, ben je er nog?',
    'Je hebt nog geen actie ondernomen',
    'Ben je er nog?',
    'Je verspilt batterij door mij open te laten staan',
    'Ik ben hier nog steeds',
    'scroll door de pagina om een optie te kiezen',
];

const idleMessage = () => {
    const random = Math.floor(Math.random() * messages.length);
    const message = messages[random];
    speak(message);
}

const idleCheck = setInterval(idleMessage, 10000);
export const startIdleCheck = () => idleCheck;
export const stopIdleCheck = () => clearInterval(idleCheck);
