///////////////////////IMPORTACIONES///////////////////////
import { btnBack } from "./btn_back.js";
import cardGenerator from "./cardGenerator.js";
import conectionCheck from "./conection_check.js";
import { countdown } from "./countdown.js";
import { dark } from "./dark_mode.js";
import deviceDetection from "./deteccion_dispositivos.js";
import filter from "./filtro_cards.js";
import { game, shortcuts } from "./game.js";
import geolocalization from "./geolocaliacion.js";
import hamburgerMenu from "./ham_menu.js";
import {reloj, alarma} from "./reloj.js";
import { responsiveJs } from "./responsive_con_js.js";
import { tester } from "./responsive_tester.js";
import sorteo from "./sorteo.js";
import webcamDetection from "./webcam_detection.js";

/////////////////////////VARIABLES/////////////////////////
const d = document;

/////////////////////DOM CONTENT LOAD//////////////////////
d.addEventListener("DOMContentLoaded", e =>{
    hamburgerMenu();
    reloj();
    alarma();
    countdown(); 
    btnBack();
    responsiveJs(
        "video", 
        "800", 
        `<a target="_BLANK" href="https://www.youtube.com/embed/NOTUg0306Yc">Ver Video!</a>`,
        `<iframe 
            width="1904" 
            height="772" 
            src="https://www.youtube.com/embed/NOTUg0306Yc" 
            title="Awesome fight animation" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
        </iframe>`);
    responsiveJs(
        "maps", 
        "800", 
        `<a target="_BLANK" href="https://www.google.com/maps">Ver Mapa!</a>` ,
        `<iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642.0114775830477!2d-58.38203238300352!3d-34.60358104066273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1666502891338!5m2!1ses!2sar" 
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>`);
    tester();
    deviceDetection();
    webcamDetection();
    geolocalization();
    cardGenerator("30", "640", "480")
    filter();
    sorteo([
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
    ]);
});

/////////////////////////KEYOWN////////////////////////////
d.addEventListener("keydown", e =>{
    shortcuts(e);
    game(e);
}); 

/////////////////////////ALWAYS////////////////////////////
dark();
conectionCheck();