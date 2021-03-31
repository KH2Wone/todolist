const body = document.querySelector('body');

const IMG_NUMBER = 3;

function handleImgLoad(image) {
    image.classList.add("bgImage");
    body.prepend(image);
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./img/bg${imgNumber + 1}.jpg`;
    image.addEventListener("load", handleImgLoad(image));
}

// function paintImage(imgNumber) {
//     const image = new Image();
//     image.src = `img/bg${imgNumber + 1}.jpg`;
//     image.classList.add("bgImage");
//     body.prepend(image);
// }

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

Math.random() * IMG_NUMBER
Math.random() * 2
0 부터 2까지 랜덤으로 돌리기
2까지니까 소수점 1.99454 2 전까지 다 랜덤으로 돌려지는 것임
*/