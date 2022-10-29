const d = document;

export default function cardGenerator(cantCards, width, height){
    const $cards = d.getElementById("cards");
    
    for(let i = 1; i <= cantCards; i++){
        let $card = d.createElement("figure");
        let random = Math.floor(Math.random()*6);
        let topic;

        switch(random){
            case 1: topic = "any";
            break;
            case 2: topic = "nature";
            break;
            case 3: topic = "people";
            break;
            case 4: topic = "arch";
            break;
            case 5: topic = "tech";
            break;
            case 6: topic = "animals";
            break;
            default: console.log("default", random);
        }

        $card.classList.add("card");
        $card.innerHTML = `
            <img class="card__img" src="https://placeimg.com/${Math.min(width, height)}/${Math.min(width, height)}/${topic}.jpg" alt="tarjeta_${i}" >
            <figcaption class="card__caption">
                Tarjeta ${i}
            </figcaption>
        `
        $cards.appendChild($card);
    }
}
