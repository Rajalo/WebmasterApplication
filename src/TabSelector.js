'use strict'

var tabs = ["home","experience","suggestions"];

function selectTab(tab)
{
    for (let option of tabs)
    {
        if (option == tab)
        {
            let content = document.getElementById(option);
            let title = document.getElementById(option+"Tab");
            content.classList.remove("hidden");
            if (title.classList.contains("tab-itemDark"))
            {
                title.classList.add("tab-item-selectedDark");
            }
            else 
            {
                 title.classList.add("tab-item-selected");

            }
        }
        else
        {
            let content = document.getElementById(option);
            let title = document.getElementById(option+"Tab");
            content.classList.add("hidden");
            title.classList.remove("tab-item-selected");
            title.classList.remove("tab-item-selectedDark");
        }
        window.scrollTo(0,0);
    }
}
export default function buildTabs()
{
    for (let tab of tabs)
    {
        let elem = document.getElementById(tab+"Tab");
        elem.onmousedown = () => {selectTab(tab)};
    }
}
