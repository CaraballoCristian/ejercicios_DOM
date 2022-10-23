const d = document;
const ls = localStorage;
const $html = document.documentElement;

export function dark(){
    let active;
    
    const clrMain = getComputedStyle($html).getPropertyValue("--clr-main");
    const clrSec = getComputedStyle($html).getPropertyValue("--clr-sec");
    const clrTxt = getComputedStyle($html).getPropertyValue("--clr-txt");
    const clrMainDark = getComputedStyle($html).getPropertyValue("--clr-main-dark");
    const clrSecDark = getComputedStyle($html).getPropertyValue("--clr-sec-dark");
    const clrTxtDark = getComputedStyle($html).getPropertyValue("--clr-txt-dark");
    
    const images = d.querySelectorAll(".theme_icon");
    
    function switchIcons(){
        images.forEach(img => {
            if(getComputedStyle(img).getPropertyValue("opacity") === "0" ){
                img.style.opacity = 1;
            }else{
                img.style.opacity = 0;
            }
        })
    };
    function darkMode(){
        $html.style.setProperty("--clr-main", clrMainDark);
        $html.style.setProperty("--clr-sec", clrSecDark);
        $html.style.setProperty("--clr-txt", clrTxtDark);
    };
    function lightMode(){
        $html.style.setProperty("--clr-main", clrMain);
        $html.style.setProperty("--clr-sec", clrSec);
        $html.style.setProperty("--clr-txt", clrTxt);
    };
    
    d.addEventListener("DOMContentLoaded", e => {
        active = ls.getItem('status');
        if(active === "true"){
            switchIcons();
            darkMode();
            active = true;
        }else {
            active = false;
        }
    })

    d.addEventListener("click", e => {
        if(e.target.matches("#dark_mode") || e.target.matches("#dark_mode *") ){
            switchIcons();
            if(active) lightMode();
            else darkMode();        
            active = !active;            
            ls.setItem("status", active);
        }
    })
}