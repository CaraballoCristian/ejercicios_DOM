const w = window;
const d = document;
export function btnBack(){
    const $header = d.getElementById("header");
    const $btn = d.getElementById("btn_back");
    
    w.addEventListener("scroll", e =>{
        if(w.scrollY > 1000){
            $btn.style.opacity = 1;
            $btn.style.visibility = "visible";
        }else{
            $btn.style.opacity = 0;
            $btn.style.visibility = "hidden";
        }
    })

    d.addEventListener("click", e =>{
        if(e.target.matches("#btn_back") || e.target.matches("#btn_back *")){
            w.scrollTo(0, 0);
        }
    })
}