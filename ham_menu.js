export default function hamburgerMenu(){
    const d = document;

    d.addEventListener("click", e => {
        if(e.target.matches(".menu__box") || e.target.matches(".menu__box *") || e.target.matches(".main__a")){
            d.querySelector(".main__nav").classList.toggle("hidden");
            d.querySelector(".main__ul").classList.toggle("hidden2");
            d.querySelector("body").classList.toggle("no-scroll");
            d.querySelector(".menu__box").classList.toggle("rotate");

            //cambio la imagen del menu
            const $img = d.querySelector(".menu__img");

            if($img.getAttribute("src") === "assets/img/menu_cerrado.png"){
                $img.setAttribute("src", "assets/img/menu_abierto.png");
            }else{
                $img.setAttribute("src", "assets/img/menu_cerrado.png");
            }
        }
    })
}