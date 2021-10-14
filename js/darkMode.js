const darkModeBtn = document.querySelector('.darkMode_btn');


darkModeBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark');
});