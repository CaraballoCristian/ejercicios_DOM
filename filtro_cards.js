const d = document;

export default function filter(){
    const $cards = d.querySelectorAll(".card");
    const $input = d.getElementById("filtro__input");
    let name;
    d.addEventListener("keyup", e => {
        if (e.target === $input){
            let filtro = $input.value

            for(let i = 0; i<$cards.length; i++){
                name = $cards[i].lastElementChild.innerHTML;
                if(name.toLowerCase().includes(filtro.toLowerCase())){
                    $cards[i].classList.remove("filtered");
                }else{
                    $cards[i].classList.add("filtered");
                }
            }
        }
    })
}