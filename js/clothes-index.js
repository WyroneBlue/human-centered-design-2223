console.log('kleding kiezen');

const buttons = document.querySelectorAll('menu button');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id);
        const id = e.target.dataset.id;
        window.location.href = `clothes-details.html?id=${id}`;
    });
});
