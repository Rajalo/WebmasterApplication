'use strict'

var tabs = ["about", "eboard", "calendar", "creations", "connect", "sponsors"];
window.onload = function() {
    buildScrolls()
}

let buildScrolls = function() {
    let scrolling = 0
    for (let id of tabs)
    {
        document.getElementById(id+"Tab").onclick = () => {
            document.getElementById(id).scrollIntoView(true);
            setTimeout(() => {
                window.scrollBy(0,-190)
                }, 500);
        }
    }
}
