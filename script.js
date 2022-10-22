import { btnBack } from "./btn_back.js";
import { countdown } from "./countdown.js";
import { dark } from "./dark_mode.js";
import { game, shortcuts } from "./game.js";
import hamburgerMenu from "./ham_menu.js";
import {reloj, alarma} from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu();
    reloj();
    alarma();
    countdown(); 
    btnBack();
});

d.addEventListener("keydown", e =>{
    shortcuts(e);
    game(e);
}); 

dark();