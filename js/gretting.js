const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

    let info = document.querySelector('.privacy_info');
    const hide_toDoForm = document.querySelector('.js-toDoForm');

const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {

    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    info.style.display = 'none';
}

function askForName() {
    form.classList.add(SHOWING_CN);
    hide_toDoForm.style.display = 'none';
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `안녕하세요, ${text}님!`;
    hide_toDoForm.style.display = 'block';
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        // she is not
        askForName();
    } else {
        // she is
        paintGreeting(currentUser);
        info.style.display = 'none';
    }

}

function init() {
    loadName();
}

init();