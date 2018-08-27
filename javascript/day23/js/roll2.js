var oImgs = document.getElementById('imgs'),
    oImg = oImgs.getElementsByTagName('img'),
    oLi = document.getElementById('nav').getElementsByTagName('li'),
    timer = null,
    num = 0;

function play() {
    num++;
    if (num == oImg.length) num = 0;
    changeImg(num);
}
function changeImg(n) {
    for (var i = 0; i < oImg.length; i++) {
        oImg[i].className = '';
        oLi[i].className = '';
    }
    oImg[n].className = 'on';
    oLi[n].className = 'on';
}
timer = setInterval(play, 1000);