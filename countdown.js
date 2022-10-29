const d = document;

//proximo año nuevo establecido por defecto
let goal = new Date(new Date().getFullYear() + 1, 0 , 1);
let $containerTitle = d.getElementById("countdown_title");
let $container = d.getElementById("countdown");

const msToTime = function(res){
    let aux = res / 1000 / 60 / 60 / 24;
    let d = Math.floor(aux);
    let h = Math.floor((aux - d)*24);
    let m = Math.floor((((aux - d)*24) - h) * 60);
    let s = Math.floor((((((aux - d)*24) - h) * 60) - m) * 60);
    
    return `<h5>${d} Dias ${h} Horas ${m} Minutos ${s} Segundos</h5>`
}

d.addEventListener("click", (e) =>{
    if(e.target.matches("#btn_countdown")){
        let date = prompt("Ingrese la fecha en formato dd/mm/aaaa");
        date = date.split("/");
        goal = new Date(date[2], date[1] - 1, date[0]);
        if(goal.getTime() < new Date().getTime()){
            alert("La fecha ingresada ya ha pasado, Ingrese una fecha válida")
        }else{
            $containerTitle.innerHTML = "Tiempo hasta la fecha ingresada:"
        }
    }
})

export function countdown(){
    let result;
    let now;
    const counter = setInterval(() => {
        now = new Date();
    
        result = (goal.getTime() - now.getTime());
        $container.innerHTML = msToTime(result);

        if(result <= 0){
            $containerTitle.innerHTML = "Objetivo alcanzado!!"
            $container.innerHTML = "";
            clearInterval(counter);
        }
    },1000);

}   










