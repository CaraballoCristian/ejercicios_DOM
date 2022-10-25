export default function hamburgerMenu(){
    const d = document;
    const $img = d.querySelector("#menu__img");
    
    const toggleClasses = e => {
        d.querySelector(".main__nav").classList.toggle("hidden");
        d.querySelector(".main__ul").classList.toggle("hidden2");
        d.querySelector("body").classList.toggle("no-scroll");
        d.querySelector(".menu__box").classList.toggle("rotate");
    }

    const toggleImg = (e) => {
        if($img.getAttribute("src") === "assets/img/menu_cerrado.png"){
            $img.setAttribute("src", "assets/img/menu_abierto.png");
            console.log("abre")
        }else{
            $img.setAttribute("src", "assets/img/menu_cerrado.png");
            console.log("cierra")
        }
    }

    d.addEventListener("click", e => {
        if(e.target.matches(".menu__box") || e.target.matches(".menu__box *") || e.target.matches(".main__a")){
            toggleImg();
            toggleClasses();
        }

        if (e.target.matches(".main__nav")){
            if(($img.getAttribute("src") === "assets/img/menu_abierto.png")){
                console.log("abierto")
                toggleImg();
                toggleClasses();
            }
        } 
        
    })
}