import menu from "./ham.js"
import reloj from "./reloj.js"
import tecla  from "./eventosDeTeclado.js"
import countdown  from "./countdown.js"
import scrollTopButton from "./boton-scroll.js";
import darkTheme from "./tema-oscuro.js";


const d = document;


d.addEventListener("DOMContentLoaded", (e) => {

    menu('.burgerbutton', '.menu', '.menu-main li');

})



d.addEventListener("DOMContentLoaded", (e) => {

    reloj('.hora', '.min', '.seg', '.displayReloj', '#iniciarReloj', '#detenerReloj', '#iniciarAlarma', '#detenerAlarma');
    tecla('#pelota','#lienzo');
    
    countdown('.countdown');

    scrollTopButton('.scroll-top-btn')
    darkTheme('.dark-theme-btn','dark-mode')
})

