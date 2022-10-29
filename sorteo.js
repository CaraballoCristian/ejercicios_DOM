const d = document;

export default function sorteo(arr){
    let $container = d.getElementById("container__sorteo");
    let $resultado = d.getElementById("resultado__sorteo");
    const $ul = d.createElement("ul");
    $resultado.innerHTML = "<h6>¡CLICK PARA COMENZAR!</h6>"
    
    arr.forEach(el => {
        const $li = d.createElement("li");
        $li.textContent = el;
        $ul.appendChild($li);
    });
    $container.appendChild($ul);

    d.addEventListener("click", e => {
        if(e.target.matches("#btn__sorteo")){
            let pos = Math.floor(Math.random()*arr.length)
            $resultado.innerHTML = `<h6>¡GANADOR: ${arr[pos].toUpperCase()}!</h6>`
        }
    })
}