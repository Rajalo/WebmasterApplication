'use strict'

var switchingClasses = ["header", "tabs", "tab-item", "tab-item-selected","content","content-center"]

function activateDarkMode()
{
    let toggle = document.getElementById("toggleMode");
    toggle.classList.replace("toggleModeLight","toggleModeDark");
    toggle.onmousedown = () => {activateLightMode()};
    toggle.innerHTML = "Light Mode";
    for (let switchingClass of switchingClasses)
    {
        let elems = document.getElementsByClassName(switchingClass);
        for (let elem of elems)
        {
            elem.classList.add(switchingClass+"Dark");
        }
    }
    localStorage.setItem("mode","dark");
}
function activateLightMode()
{
    let toggle = document.getElementById("toggleMode");
    toggle.classList.replace("toggleModeDark","toggleModeLight");
    toggle.onmousedown = () => {activateDarkMode()};
    toggle.innerHTML = "Dark Mode";
    for (let switchingClass of switchingClasses)
    {
        let elems = document.getElementsByClassName(switchingClass);
        for (let elem of elems)
        {
            elem.classList.remove(switchingClass+"Dark");
        }
    }
    localStorage.setItem("mode","light");
}
function buildDarkMode()
{
    let toggle = document.getElementById("toggleMode");
    toggle.onmousedown = () => {activateDarkMode()};
}
function buildLightMode()
{
    let toggle = document.getElementById("toggleMode");
    activateDarkMode()
    toggle.onmousedown = () => {activateLightMode()};
}
export default function buildMode()
{
    let mode = localStorage.getItem("mode")
    if (mode == null || mode == "light")
    {
        buildDarkMode();
    }
    else
    {
        buildLightMode();
    }
}