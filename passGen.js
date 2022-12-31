const button = document.querySelector('.button');
const display = document.querySelector('.display');

const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

button.addEventListener('click', genFunc);
function genFunc() {
    let lI1 = Math.floor(Math.random() * lettersArr.length);
    let lI2 = Math.floor(Math.random() * lettersArr.length);
    let lI3 = Math.floor(Math.random() * lettersArr.length);
    let nI1 = Math.floor(Math.random() * numsArr.length);
    let nI2 = Math.floor(Math.random() * numsArr.length);
    let nI3 = Math.floor(Math.random() * numsArr.length);
    let sI1 = Math.floor(Math.random() * symArr.length);
    let sI2 = Math.floor(Math.random() * symArr.length);
    let sI3 = Math.floor(Math.random() * symArr.length);
    display.innerHTML = `${lettersArr[lI1]}${numsArr[nI2]}${symArr[sI2]}${lettersArr[lI3].toUpperCase()}${lettersArr[lI2]}${symArr[sI3]}${numsArr[nI3]}${numsArr[nI1]}`;
}

button.addEventListener('mousedown', scaleUp);
function scaleUp() {
    button.style.scale = '1.02';
}

button.addEventListener('mouseup', scaleDown);
function scaleDown() {
    button.style.scale = '1';
}