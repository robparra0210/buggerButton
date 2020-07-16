import hamburgerMenu from "./ham.js"

const d = document;


d.addEventListener("DOMContentLoaded", (e)=>{

	hamburgerMenu('.panel-btn','.panel','.menu a');

})




	/*d.addEventListener("click", e=>{
		if(e.target.matches(".panel-btn")){
			d.querySelector('.panel').classList.toggle("is-active")
		}
	})*/