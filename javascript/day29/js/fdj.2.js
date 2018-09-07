var oSmall = document.getElementById('small'),
    oDrag = document.getElementById('drag'),
    oMask = document.getElementById('mask'),
    oBig = document.getElementById('big');

oMask.onmousemove = function (e) {
    var e = e || window.event;
    //console.log(e);

    //使鼠标在oDrag中正中位置
    var left = e.clientX - oDrag.offsetWidth / 2,
        top = e.clientY - oDrag.offsetHeight / 2;
    //console.log(left, top);

    //边界
    var oLeft = oMask.offsetWidth - oDrag.offsetWidth,
        oTop = oMask.offsetHeight - oDrag.offsetHeight;

    if (left <= 0) left = 0;
    if (left > oLeft) left = oLeft;
    if (top <= 0) top = 0;
    if (top > oTop) top = oTop;

    oDrag.style.left = left + "px";
    oDrag.style.top = top + "px";
    /* console.log(left, top);
    console.log(oLeft, oTop); */


    
}