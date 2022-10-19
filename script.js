import hamburgerMenu from "./ham_menu.js";
import {reloj, alarma} from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu();
    reloj();
    alarma();
});