'use strict'
{

//ハンバーガーメニュー
function humburgerOn(){
    document.querySelector('.fv__nav').classList.toggle('fv__nav--on');
}

document.querySelector('.fv__humTarget').addEventListener('click',()=>{
    humburgerOn();
})

function humburgerOff(){
    document.querySelector('.fv__nav').classList.toggle('fv__nav--on');
}

document.querySelector('.fv__spMenu').addEventListener('click',()=>{
    humburgerOff();
})

}
