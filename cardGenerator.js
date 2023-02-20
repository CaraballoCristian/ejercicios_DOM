const d = document;

export default function cardGenerator(cantCards, width, height){
    const $cards = d.getElementById("cards");
    
    for(let i = 1; i <= cantCards; i++){
        let $card = d.createElement("figure");
        let random = Math.floor(Math.random()*6);
        let topic;

        switch(random){
            case 1: topic = "dog";
            break;
            case 2: topic = "cars";
            break;
            case 3: topic = "girl";
            break;
            case 4: topic = "paris";
            break;
            case 5: topic = "water";
            break;
            case 6: topic = "food";
            break;
            default: break;
        }

        $card.classList.add("card");
        $card.innerHTML = `
            <img class="card__img" src="https://loremflickr.com/${Math.min(width, height)}/${Math.min(width, height)}/${topic}.jpg" alt="tarjeta_${i}" >
            <figcaption class="card__caption">
                Tarjeta ${i}
            </figcaption>
        `
        $cards.appendChild($card);
    }
}
