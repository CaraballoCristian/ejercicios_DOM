import { btnBack } from "./btn_back.js";
import { countdown } from "./countdown.js";
import { dark } from "./dark_mode.js";
import { game, shortcuts } from "./game.js";
import hamburgerMenu from "./ham_menu.js";
import {reloj, alarma} from "./reloj.js";
import { responsiveJs } from "./responsive_con_js.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu();
    reloj();
    alarma();
    countdown(); 
    btnBack();
    responsiveJs("video", "(min-width: 800px)", "contenido mobil" ,"contenido desktop");
    responsiveJs("maps", "(min-width: 800px)", "contenido mobil" ,"contenido desktop");
});

d.addEventListener("keydown", e =>{
    shortcuts(e);
    game(e);
}); 

dark();