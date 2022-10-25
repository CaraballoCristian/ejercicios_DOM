const d = document;
const w = window;

export function responsiveJs(id, breakpoint, mobile, desktop){
    
    const element = d.getElementById(id);

    const responsive = e => {
        if(w.innerWidth > breakpoint){
            element.innerHTML = desktop; 
        }else{
            element.innerHTML = mobile;
        }
    }
    
    w.addEventListener("resize", e =>{
        responsive();
    })
    responsive();
}