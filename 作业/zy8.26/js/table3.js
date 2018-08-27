var oLi = document.getElementById('table').getElementsByTagName('li'),
    oDiv = document.getElementById('box').getElementsByClassName('d'),
    oAdd = document.getElementsByClassName('right'),
    oMinus = document.getElementsByClassName('left'),
    oPho = document.getElementsByClassName('pho'),
    oP = document.getElementsByClassName('xx');
var num = 0;

var oArr = [['百鲲齐聚,竟是因为此事...', '堡垒配火箭筒,吃鸡新玩法', '免下载吃鸡,已有98/100人加入'], ['大型某日逃生游戏,你能走多远', '全新经典传奇回归', '师傅有个藏书图,天下武功尽在其中'], ['萌宠不萌,坚决不玩!', '这款游戏救活了多家网吧 来看看', '无需下载 给你超越端游体验'], ['植物大战僵尸无敌版', '奥特曼专区最全奥特曼', '爸爸去哪原版大冒险']];




for (var i = 0; i < oLi.length; i++) {
    oLi[i].index = i;
    oLi[i].onmouseover = function () {
        empty();
        oLi[this.index].className = "emp";
        oDiv[this.index].style.display = 'block';
    }
}

function empty() {
    for (var j = 0; j < oLi.length; j++) {
        oLi[j].className = '';
        oDiv[j].style.display = 'none';
    }
}

for (var a = 0; a < oAdd.length; a++) {
    num=0;
    oAdd[a].index = a;
    oAdd[a].onclick = function () {
        var numa = oPho[this.index].getElementsByTagName('li').length;
        num++;
        if (num == numa) {
            num = 0;
        }
        oPho[this.index].style.left = -num * 248 + 'px';
        oP[this.index].innerHTML = oArr[this.index][num];

    }
}


for (var b = 0; b < oMinus.length; b++) {
    num=0;
    oMinus[b].index = b;
    oMinus[b].onclick = function () {
        var numb = oPho[this.index].getElementsByTagName('li').length;
        num--;
        if (num < 0) {
            num = numb - 1;
        }
        oPho[this.index].style.left = -num * 248 + 'px';
        oP[this.index].innerHTML = oArr[this.index][num];

    }
}




