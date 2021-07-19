const colorText = document.querySelector('.color');
const button = document.getElementById('btn');

const getRandom = () => {
    return Math.floor(Math.random() * 255);
}

button.addEventListener('click', () => {
    let r = getRandom();
    let g = getRandom();
    let b = getRandom();
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    // console.log(color);
    document.querySelector('main').style.backgroundColor = color;
    document.querySelector('span').innerHTML = color;
});