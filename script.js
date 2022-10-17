const page = () => {
    document.addEventListener("click", e => {
        if(e.target.matches(".menu__box") || e.target.matches(".menu__img") || e.target.matches(".main__a")){
            const $menu = document.querySelector(".main__nav");
            const $ul = document.querySelector(".main__ul");
            const $body = document.querySelector("body");
            const $img = document.querySelector(".menu__img");

            //abro el menu y bloquear scroll
            $menu.classList.toggle("hidden");
            $ul.classList.toggle("hidden2");
            $body.classList.toggle("no-scroll")

            //cambio la imagen del menu
            if($img.getAttribute("src") === "assets/img/menu_cerrado.png"){
                $img.setAttribute("src", "assets/img/menu_abierto.png");
            }else{
                $img.setAttribute("src", "assets/img/menu_cerrado.png");
            }

        }
    })
}
page();