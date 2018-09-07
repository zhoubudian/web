var oList = document.getElementById('list'),
    oBtn = document.getElementsByTagName('button'),
    oBox = document.getElementById('box'),
    timer = null,
    chang = -5;//step 步长值

var oLi = oList.children;

function move(step) {
    if (oList.offsetLeft < -oList.offsetWidth / 2) {
        oList.style.left = "0";
    }
    if (oList.offsetLeft > 0) {
        oList.style.left = -oList.offsetWidth / 2 + 'px';
    }
    oList.style.left = oList.offsetLeft + step + 'px';
}

move(chang);
timer = setInterval(function () { move(chang) }, 50);
/* oBtn[0].onclick = function () {
    chang = -5;
}
oBtn[1].onclick = function () {
    chang = 5;
} */


oBtn[0].onclick=oBtn[1].onclick=function(){
    if(this==oBtn[0]){
        chang = -5;
    }else{
        chang = 5;
    }
}