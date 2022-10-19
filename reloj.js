const d = document;

export function reloj(){
    let intervalo;
    d.addEventListener("click", e =>{
        if(e.target.matches("#activar_reloj")){
            intervalo = setInterval(() => {
                let now = new Date().toLocaleTimeString();
                d.getElementById("reloj").innerHTML = `<h3>${now}</h3>`;
            }, 1000);
            e.target.disabled = true;
        }
        if(e.target.matches("#detener_reloj")){
            d.getElementById("activar_reloj").disabled = false;
            d.getElementById("reloj").innerHTML = null;
            clearInterval(intervalo);
        }
    });
}

export function alarma(){
    let temporizador;
    const $audio = document.createElement("audio");
    $audio.setAttribute("src", "assets/audio/audio.mp3");
    
    d.addEventListener("click", e => {
        
        if(e.target.matches("#activar_alarma")){
            e.target.disabled = true;
            temporizador = setTimeout(() => {
                $audio.play();
            }, 1000);
        }

        if(e.target.matches("#detener_alarma")){
            clearTimeout(temporizador);
            $audio.pause();
            $audio.currentTime = 0;
            d.getElementById("activar_alarma").disabled = false;

        }
    })
}