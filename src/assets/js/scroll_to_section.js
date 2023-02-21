

window.addEventListener('mousewheel', MouseWheelHandler);
var i = 1;
var mouseWheel = true;
function MouseWheelHandler(e) {
    if (!mouseWheel) {
        return false;
    }
    mouseWheel = false;
    setTimeout(function () {
        mouseWheel = true;
    }, 200);
    let h = window.innerHeight;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    var section = document.querySelectorAll(".section");
    if (i < section.length && i >= 0) {
        let offset = section[i].offsetTop;
        if (delta < 0) {
            window.scrollTo({ top: offset, behavior: "smooth" });
            i++;
        } else {
            window.scrollTo({ top: offset, behavior: "smooth" });
            i--;
        }
    } else if (i >= section.length) {
        i = section.length - 1;
    } else if (i < 0) {
        i = 0;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

