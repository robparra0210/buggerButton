import menu from "./ham.js"
import reloj from "./reloj.js"
import tecla  from "./eventosDeTeclado.js"
import countdown  from "./countdown.js"


const d = document;


d.addEventListener("DOMContentLoaded", (e) => {

    menu('.burgerbutton', '.menu', '.menu-main li');

})



d.addEventListener("DOMContentLoaded", (e) => {

    reloj('.hora', '.min', '.seg', '.displayReloj', '#iniciarReloj', '#detenerReloj', '#iniciarAlarma', '#detenerAlarma');

})

d.addEventListener("DOMContentLoaded", (e) => {

    tecla('#pelota','#lienzo');
  

})

d.addEventListener("DOMContentLoaded", (e) => {

    countdown('.countdown');
  

})