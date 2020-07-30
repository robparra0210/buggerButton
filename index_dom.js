import hamburgerMenu from "./ham.js"
import { digitalClock, alarm} from "./reloj.js"
import tecla  from "./eventosDeTeclado.js"

const d = document;


d.addEventListener("DOMContentLoaded", ()=>{

	hamburgerMenu('.panel-btn','.panel','.menu a');
	digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj')
	alarm("./alarma.mp3","#activar-alarma","#desactivar-alarma")
})




d.addEventListener("DOMContentLoaded", (e) => {

    tecla('#pelota','#lienzo');
  

})
