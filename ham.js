export default function menu(burgerbutton, menu, menuMain){
	//burgerbutton.classList.toggle('active')
	const d = document;
	
	d.addEventListener("click", e=>{
		if( e.target.matches(burgerbutton)|| e.target.matches(`${burgerbutton} *`)){
			d.querySelector(menu).classList.toggle("menu-active");
		}

		if( e.target.matches(`${menuMain} *`)){
			d.querySelector(menu).classList.toggle("menu-active");
		}


	}
)}

