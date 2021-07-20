let h = document.querySelector('.ham');
h.addEventListener('click', () => {
    h.classList.toggle('rotate');
    document.querySelector('ul').classList.toggle('move');
})