export default function hamburgerMenu(){
    const d = document;
    const w = window;
    const $img = d.querySelector("#menu__img");
    const $body = d.querySelector("body");
    
    const toggleClasses = () => {
        d.querySelector(".main__ul").classList.toggle("hidden");
        d.querySelector(".menu__box").classList.toggle("rotate");
    }

    const toggleImg = () => {
        if($img.getAttribute("src") === "assets/img/menu_cerrado.png"){
            $img.setAttribute("src", "assets/img/menu_abierto.png");
            $body.style.overflow = "hidden"
        }else{
            $img.setAttribute("src", "assets/img/menu_cerrado.png");
            $body.style.overflow = "scroll"
        }
    }
    d.addEventListener("click", e => {
        if(e.target.matches(".menu__box") || e.target.matches(".menu__box *") || e.target.matches(".main__a")){
            toggleImg();
            toggleClasses();
            if(e.target.matches(".main__a")){
                $body.style.overflow = "scroll";
            }
        }
    })
    w.addEventListener("resize", e => {
        if(w.innerWidth > 1024){
            $body.style.overflow = "scroll";
        }   
    })
}