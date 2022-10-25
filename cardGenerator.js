const d = document;

export default function cardGenerator(cantCards, width, height){
    const $cards = d.getElementById("cards");
    
    for(let i = 1; i <= cantCards; i++){
        let $card = d.createElement("figure");
        $card.classList.add("card");
        $card.innerHTML = `
            <img class="card__img" src="https://picsum.photos/${Math.min(width, height)}.jpg" alt="tarjeta_${i}" >
            <figcaption class="card__caption">
                Tarjeta ${i}
            </figcaption>
        `
        $cards.appendChild($card);
    }
}