let rBin = document.querySelector('.recycleBin_btn');
let listContent = document.querySelectorAll('.js-toDoList li');
//     rBinImg = rBin.querySelector('img');
// let controlBin = document.querySelectorAll('button.del_btn');

rBin.addEventListener('click', function () {
    if(window.confirm('모두 삭제하시겠습니까?')) {
        for(let i=0; i<listContent.length; i++) {
            listContent[i].remove();
        }
    }
    else {location.reload();}
});


// 여닫는 휴지통 버튼
    // // 휴지통 열렸을때 아이콘 바뀌고 to do list 오른쪽에 delete 버튼 생성
    // // 휴지통 닫혀있을땐 닫힘 아이콘으로 바뀌고 delete 버튼 숨기기
    // if(rBinImg.getAttribute('src') === '../img/icon_recycleBin_close.svg') {
    // // 닫혀있을때 클릭하면
    //     rBinImg.src = '../img/icon_recycleBin_open.svg';
    //     for(let i=0; i<controlBin.length; i++) {
    //         controlBin[i].style.visibility = 'visible';
    //     }
    // }
    // else {
    // // 열려있을때 클릭하면
    //     rBinImg.src = '../img/icon_recycleBin_close.svg';
    //     for(let i=0; i<controlBin.length; i++) {
    //         controlBin[i].style.visibility = 'hidden';
    //     }
    // }