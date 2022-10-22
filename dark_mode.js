const d = document;
const ls = localStorage;
const $html = document.documentElement;
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

export function dark(){
    let active;

    const clrMain = getComputedStyle($html).getPropertyValue("--clr-main");
    const clrSec = getComputedStyle($html).getPropertyValue("--clr-sec");
    const clrTxt = getComputedStyle($html).getPropertyValue("--clr-txt");
    const clrMainDark = getComputedStyle($html).getPropertyValue("--clr-main-dark");
    const clrSecDark = getComputedStyle($html).getPropertyValue("--clr-sec-dark");
    const clrTxtDark = getComputedStyle($html).getPropertyValue("--clr-txt-dark");

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
        console.log("inicia carga STR en" ,active);
        if(active === "true"){
            active = true;
            darkMode();
            switchIcons();
        }else {
            active = false;
        }
        console.log("carga siendo", active) 
    })

    d.addEventListener("click", e => {
        if(e.target.matches("#dark_mode") || e.target.matches("#dark_mode *") ){
            console.log("llego al if en", active);
            if(active){
                lightMode();
                console.log("entro al if");
                active = false;
            }else{
                darkMode();
                console.log("entro al else");
                active = true;
            }
            ls.setItem("status", active);
            switchIcons();
            console.log("quede en STR", ls.getItem("status"));
        }
    })
}