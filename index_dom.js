import hamburgerMenu from "./ham.js"
import { digitalClock, alarm} from "./reloj.js"

const d = document;


d.addEventListener("DOMContentLoaded", (e)=>{

	hamburgerMenu('.panel-btn','.panel','.menu a');
	digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj')

})




	/*d.addEventListener("click", e=>{
		if(e.target.matches(".panel-btn")){
			d.querySelector('.panel').classList.toggle("is-active")
		}
	})*/