var oLi = document.getElementById('table').getElementsByTagName('li'),
    oDiv = document.getElementById('box').getElementsByClassName('d'),
    oAddOne = document.getElementById('game').getElementsByClassName('right')[0],
    oMinusOne = document.getElementById('game').getElementsByClassName('left')[0],
    oPhoOne = document.getElementsByClassName('pho')[0].getElementsByTagName('img'),
    oPho = document.getElementsByClassName('pho')[0],
    oPOne = document.getElementsByClassName('xx')[0];
var num = 0,
    numA=0,
    numB=0,
    numC=0;

var oArrOne = ['百鲲齐聚,竟是因为此事...', '堡垒配火箭筒,吃鸡新玩法', '免下               载吃鸡,已有98/100人加入'],
    oArrTwo = ['大型某日逃生游戏,你能走多远', '全新经典传奇回归', '师傅有个           藏书图,天下武功尽在其中'],
    oArrThree = ['萌宠不萌,坚决不玩!', '这款游戏救活了多家网吧 来看看', '无需下载 给你超越端游体验'];

var oPTwo = document.getElementsByClassName('xx')[1],
    oAddTwo = document.getElementById('good').getElementsByClassName('right')[0],
    oMinusTwo = document.getElementById('good').getElementsByClassName('left')[0],
    oPhoTwo = document.getElementsByClassName('pho')[1],
    oPhoA = document.getElementsByClassName('pho')[1].getElementsByTagName('img');

var oPThree = document.getElementsByClassName('xx')[2],
    oAddThree = document.getElementById('hot').getElementsByClassName('right')[0],
    oMinusThree = document.getElementById('hot').getElementsByClassName('left')[0],
    oPhoThree = document.getElementsByClassName('pho')[2],
    oPhoB= document.getElementsByClassName('pho')[2].getElementsByTagName('img');

var oPFour = document.getElementsByClassName('xx')[3],
    oAddFour = document.getElementById('small').getElementsByClassName('right')[0],
    oMinusFour = document.getElementById('small').getElementsByClassName('left')[0],
    oPhoFour = document.getElementsByClassName('pho')[3],
    oPhoC = document.getElementsByClassName('pho')[3].getElementsByTagName('img');

for (var i = 0; i < oLi.length; i++) {
    oLi[i].index = i;
    oLi[i].onmouseover = function () {
        empty();
        oLi[this.index].className = "emp";
        oDiv[this.index].style.display='block';
    }
}

function empty() {
    for (var j = 0; j < oLi.length; j++) {
        oLi[j].className = '';
        oDiv[j].style.display='none';
    }
}

oAddOne.onclick = function () {
    num++;
    add(num);
}
oAddTwo.onclick = function () {
    numA++;
    addA(numA);
}

oAddThree.onclick = function () {
    numB++;
    addB(numB);
}

oAddFour.onclick = function () {
    numC++;
    addC(numC);
}

function add(n) {
    if (n == oPhoOne.length) n = 0;
    oPho.style.left = -n * 248 + 'px';
    oPOne.innerHTML = oArrOne[n];
}
function addA(a) {
    if (a == oPhoA.length) a = 0;
    oPhoTwo.style.left = -a * 248 + 'px';
    oPTwo.innerHTML = oArrTwo[a];
}

function addB(b) {
    if (b == oPhoB.length) b = 0;
    oPhoThree.style.left = -b * 248 + 'px';
    oPThree.innerHTML = oArrTwo[b];
}
function addC(c) {
    if (c == oPhoB.length) c = 0;
    oPhoFour.style.left = -c * 248 + 'px';
    oPFour.innerHTML = oArrTwo[c];
    console.log(c);
}
oMinusOne.onclick = function () {
    num--;
    minus(num);
}
oMinusTwo.onclick = function () {
    numA--;
    minusA(numA);
}

oMinusThree.onclick = function () {
    numB--;
    minusB(numB);
}

oMinusFour.onclick = function () {
    numC--;
    minusC(numC);
}

function minus(n) {
    if (n < 0) {n = oPhoOne.length - 1;}
    oPho.style.left = -n * 248 + 'px';
    oPOne.innerHTML = oArrOne[n];
}

function minusA(a) {
    if (a < 0) {a = oPhoA.length - 1;}
    oPhoTwo.style.left = -a * 248 + 'px';
    oPTwo.innerHTML = oArrTwo[a];
}

function minusB(b) {
    if (b < 0) {b = oPhoB.length - 1;}
    oPhoThree.style.left = -b * 248 + 'px';
    oPThree.innerHTML = oArrThree[b];
}

function minusC(c) {
    if (c <= 0) {c = oPhoC.length - 1;}
    oPhoFour.style.left = -c * 248 + 'px';
    oPFour.innerHTML = oArrThree[c];
    console.log(c);
}