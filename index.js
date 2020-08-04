import menu from "./ham.js"
import reloj from "./reloj.js"
import tecla  from "./eventosDeTeclado.js"
import countdown  from "./countdown.js"
import scrollTopButton from "./boton-scroll.js";
import darkTheme from "./tema-oscuro.js";
import responsiveMedia from "./objeto-responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceinfo from "./userDevice.js";
import neterworkStatus from "./deteccion_red.js";
import webcam from "./deteccion_camara.js";
import getGeolocation from "./geolocalizacion.js";



const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    menu('.burgerbutton', '.menu', '.menu-main li');    
    reloj('.hora', '.min', '.seg', '.displayReloj', '#iniciarReloj', '#detenerReloj', '#iniciarAlarma', '#detenerAlarma');
    tecla('#pelota','#lienzo');
    countdown('.countdown');
    scrollTopButton('.scroll-top-btn')
    //responsiveMedia('gmaps', '(min-width:1024px)', 'contenidoMovil', 'contenidoEscritorio')
    responsiveMedia(
        'youtube',
        '(min-width:1024px)', 
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=90" 
        target='_blank'>Ver Video</a>`,
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        );
        responsiveTester('responsive-tester')       
        userDeviceinfo('user-device')
        webcam('webcam')
        getGeolocation('geolocation')
    })

darkTheme('.dark-theme-btn','dark-mode')
neterworkStatus()



//alt+35 =   #
//alt +126 = ~
//alt + 124 = |
//alt +96 = `