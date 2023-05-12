const header = document.querySelector('header');
const back = document.querySelector('header button');

back.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target.getAttribute('aria-label'));
    window.location.href = target.getAttribute('data-href');
});
