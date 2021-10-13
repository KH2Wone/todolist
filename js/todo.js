const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];
let idNumbers = 1;

// 텍스트 지우기 x 버튼
let xBtn = document.querySelector('.x_btn');
xBtn.addEventListener('click', function () {
    toDoInput.value = '';
})


function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // JSON.stringify() => object를 string으로 바꿔준다
}

function paintToDo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');

    const newId = idNumbers++;
    // const newId = toDos.length + 1
    delBtn.classList.add('del_btn');

    delBtn.addEventListener('click', deleteToDo);

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    if(currentValue !== '') {
        paintToDo(currentValue);
        toDoInput.value = "";
    }
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();