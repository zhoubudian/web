
    function drag(elem) {
        elem.onmousedown = function (e) {
            var e = e || window.event;

            var x0 = elem.offsetLeft,
                y0 = elem.offsetTop;

            var x1 = e.clientX,
                y1 = e.clientY;

            document.onmousemove = function (e) {
                var e = e || window.event;

                var x2 = e.clientX,
                    y2 = e.clientY;

                var oWidth = elem.offsetWidth,
                    oHeight = elem.offsetHeight;

                var disX = document.documentElement.clientWidth - oWidth ||
                    document.body.clientWidth - oWidth,
                    disY = document.documentElement.clientHeight - oHeight ||
                        document.body.clientHeight - oHeight;

                var x = x0 + (x2 - x1),
                    y = y0 + (y2 - y1);

                if (x < 0) x = 0;
                if (x > disX) x = disX;
                if (y < 0) y = 0;
                if (y > disY) y = disY;
                elem.style.left = x + 'px';
                elem.style.top = y + 'px';
            }
            elem.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }
            return false;
        }
    }

