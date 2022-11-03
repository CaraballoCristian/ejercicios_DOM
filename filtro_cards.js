const d = document;

export default function filter(){
    const $cards = d.querySelectorAll(".card");
    const $input = d.getElementById("filtro__input");
    let name;
    let filtro = "";

    d.addEventListener("keyup", e => {
        if (e.target === $input){
            filtro = $input.value
        }

        if (e.key === "Escape") {
            filtro = "";
            $input.parentElement.reset();
        } 

        for(let i = 0; i<$cards.length; i++){
            name = $cards[i].lastElementChild.innerHTML;
            if(name.toLowerCase().includes(filtro.toLowerCase())){
                $cards[i].classList.remove("filtered");
            }else{
                $cards[i].classList.add("filtered");
            }
        }
    })
}