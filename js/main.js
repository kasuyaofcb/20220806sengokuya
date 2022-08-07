'use strict'
{

//ハンバーガーメニュー
function hamburger(){
    document.querySelector('.header__navSp').classList.toggle('header__navSp--on');
}

document.querySelector('.header__navSpTarget').addEventListener('click',()=>{
    hamburger();
})

}
