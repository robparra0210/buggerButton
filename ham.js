<<<<<<< HEAD
export default function hamburgerMenu(panelBtn, panel, menuLink){
	const d = document;
=======
export default function menu(burgerbutton, menu, menuMain){
	//burgerbutton.classList.toggle('active')
	const d = document;
	
	d.addEventListener("click", e=>{
		if( e.target.matches(burgerbutton)|| e.target.matches(`${burgerbutton} *`)){
			d.querySelector(menu).classList.toggle("menu-active");
		}
>>>>>>> myVersion

		if( e.target.matches(`${menuMain} *`)){
			d.querySelector(menu).classList.toggle("menu-active");
		}

	d.addEventListener("click", e=>{
		if( e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
			d.querySelector(panel).classList.toggle("is-active");
			d.querySelector(panelBtn).classList.toggle("is-active");
		}

<<<<<<< HEAD

		if(e.target.matches(menuLink)){
			d.querySelector(panel).classList.remove("is-active");
			d.querySelector(panelBtn).classList.remove("is-active");	
		}
	})
	}
=======
	}
)}

>>>>>>> myVersion
