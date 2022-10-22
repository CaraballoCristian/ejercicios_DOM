const d = document;

let x = 0;
let y = 0;

export function game(e){
   if(!d.querySelector("body").classList.contains("no-scroll")){ 
        const $stage = d.querySelector(".container_game");
        let limitsStage = $stage.getBoundingClientRect();

        const $ball = d.getElementById("ball");
        let limitsBall = $ball.getBoundingClientRect();
        
        if(e.key === "ArrowUp"){
            if(limitsBall.top > limitsStage.top + limitsBall.width){
                e.preventDefault();
                y--;  
            } 
        }
        if(e.key === "ArrowDown"){
            if(limitsBall.bottom < limitsStage.bottom - limitsBall.height) {
                e.preventDefault(); 
                y++;
            } 
        }
        if(e.key === "ArrowLeft"){
            if(limitsBall.left > limitsStage.left + limitsBall.width) {
                e.preventDefault(); 
                x--;  
            } 
        }
        if(e.key === "ArrowRight"){ 
            if(limitsBall.right < limitsStage.right - limitsBall.height) {
                e.preventDefault(); 
                x++;
            }
        } 
        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
    }
}

export function shortcuts(e){

    if(e.altKey && (e.key === "a" || e.key === "A")){
        alert("haz lanzado una alerta");
    }
    if(e.ctrlKey && (e.key === "p" || e.key === "P")){
        prompt("haz lanzado un prompt");
    }
    if(e.shiftKey && (e.key === "c" || e.key === "C")){
        confirm("haz lanzado un confirm");
    }
}