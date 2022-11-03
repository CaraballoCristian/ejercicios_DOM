///////////////////////IMPORTACIONES///////////////////////
import createArrObj from "./arrObjGenerator.js";
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
import scrollSpy from "./scroll_spy.js";
import slider from "./slider.js";
import sorteo from "./sorteo.js";
import validateForm from "./validacion_formularios.js";
import smartVideo from "./video_inteligente.js";
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
    /* responsiveJs(
        "video", 
        "800", 
        `<a target="_BLANK" href="https://www.youtube.com/embed/NOTUg0306Yc">Ver Video!</a>`,
        `<iframe 
            width="1904" 
            height="772" 
            src="#"
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
            src="#" 
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>`); */
    tester();
    deviceDetection();
    webcamDetection();
    geolocalization();
    cardGenerator("10", "640", "480")
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
    slider(
        createArrObj(10, "600", "360", "Imagen")
    );
    scrollSpy();
    smartVideo();
    validateForm();

});

/////////////////////////KEYOWN////////////////////////////
d.addEventListener("keydown", e =>{
    shortcuts(e);
    game(e);
}); 

/////////////////////////ALWAYS////////////////////////////
dark();
conectionCheck();