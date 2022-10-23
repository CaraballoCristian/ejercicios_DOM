const d = document;
const w = window;

export function responsiveJs(id, mq, mobile, desktop){
    
    let breakpoint = w.matchMedia(mq);

    const responsive = e => {
        const element = d.getElementById(id);
        //e.matches es un boolean que sera true cuando se cumpla la media query
        if(e.matches){
            element.innerHTML = desktop;
        }else{
            element.innerHTML = mobile;
        }
    }
    breakpoint.addListener(responsive)
}


//rezise y load
//windows.matchMedia