const body = document.querySelector('body');

const IMG_NUMBER = 3;

function handleImgLoad() {
    
}

function paintImage(imgNumber) {
    const image = new Image();
    // new Image(); === document.querySelector('img');
    image.src = `./images/bg${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.addEventListener('loadend', handleImgLoad);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();


/*
Math.ceil();
0.95 => 1
-0.95 => 0
음수는 소수점을 잘라버린다
ceil = 천장

Math.floor();
0.95 => 0
-0.95 => -1
양수는 소수점을 잘라버린다
floor = 바닥

3.7 강의 10:36
*/