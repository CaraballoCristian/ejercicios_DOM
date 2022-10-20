const d = document;


let x = 0;
let y = 0;
export function game(){
    
    const $stage = d.querySelector(".container_game");
    const limitStage = $stage.getBoundingClientRect();

    const $ball = d.getElementById("ball");
    const limitBall = $ball.getBoundingClientRect();
    
    d.addEventListener("keydown", e =>{
        console.log(limitStage,limitBall);
        if(e.key === "ArrowUp"){
            e.preventDefault();
            /* if(limitBall.top > limitStage.top) */ y--;
        }
        if(e.key === "ArrowDown"){
            e.preventDefault(); 
            /* if(limitBall.bottom > limitStage.bottom) */ y++;
        }
        if(e.key === "ArrowLeft"){
            e.preventDefault(); 
            /* if(limitBall.left > limitStage.left) */ x--;
        }
        if(e.key === "ArrowRight"){ 
            e.preventDefault(); 
            /* if(limitBall.right > limitStage.right)  */x++;
        } 

        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`
    });
}