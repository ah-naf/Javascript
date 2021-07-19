const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
let color = "";
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    let color = "";
    for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * 16);
        color += hex[rand];
    }
    document.querySelector('main').style.backgroundColor = '#' + color;
    document.querySelector('span').innerHTML = '#' + color;
});