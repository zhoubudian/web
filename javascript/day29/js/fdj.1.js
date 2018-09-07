var oSmall = document.getElementById('small'),
    oDrag = document.getElementById('drag'),
    oMask = document.getElementById('mask'),
    oBig = document.getElementById('big');

oMask.onmousemove = function (e) {
    var e = e || window.event;
    //console.log(e);
    var left = e.clientX,
        top = e.clientY;
        console.log(left,top);
    oDrag.style.left=left+"px";
    oDrag.style.top=top+"px";
}