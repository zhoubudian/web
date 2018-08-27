(function(){//避免全局变量的污染
    var oImgs = document.getElementById('imgs'),
    oImg = oImgs.getElementsByTagName('img'),
    oLi = document.getElementById('nav').getElementsByTagName('li'),
    oCon = document.getElementById('container'),
    timer = null,
    num = 0,
    oLeft = document.getElementById('left'),
    oRight = document.getElementById('right');

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


function go() {
    timer = setInterval(play, 1000);
}
go();


//鼠标经过li是停止,离开时开始
oCon.onmouseover = function () {
    clearInterval(timer);
}

oCon.onmouseout = function () {
    go();
}


for (var j = 0; j < oLi.length; j++) {
    oLi[j].index = j;
    oLi[j].onmouseover = function () {
        //建立li按钮组与图片组之间一一对应的关系
        num = this.index;
        changeImg(num);

    }
}


//左右按钮控制
oLeft.onclick = oRight.onclick = function () {
    //    console.log(this);
    if (this == oLeft) {//数组下标递减
        num--;
        if (num < 0) num = oLi.length - 1;
        changeImg(num);
    } else {//数组小标递增
        num++;
        if (num == oLi.length) num = 0;
        changeImg(num);
    }
}

})();

