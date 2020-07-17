import menu from "./ham.js"
import reloj from "./reloj.js"


const d = document;


d.addEventListener("DOMContentLoaded", (e) => {

    menu('.burgerbutton', '.menu', '.menu-main li');

})



d.addEventListener("DOMContentLoaded", (e) => {

    reloj('.hora', '.min', '.seg', '.displayReloj', '#iniciarReloj', '#detenerReloj', '#iniciarAlarma', '#detenerAlarma');

})