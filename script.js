import { game } from "./game.js";
import hamburgerMenu from "./ham_menu.js";
import {reloj, alarma} from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu();
    reloj();
    alarma();
    game();
});

d.addEventListener("keydown", e =>{
    if(e.altKey && (e.key === "a" || e.key === "A")){
        alert("haz lanzado una alerta");
    }
    if(e.ctrlKey && (e.key === "p" || e.key === "P")){
        prompt("haz lanzado un prompt");
    }
    if(e.shiftKey && (e.key === "c" || e.key === "C")){
        confirm("haz lanzado un confirm");
    }
});