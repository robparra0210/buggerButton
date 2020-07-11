let $burgerButton =  document.querySelector(".burgerbutton"),
	$menu = document.querySelector(".menu"),
	$link = document.querySelectorAll(".link");




function menu(){
	$menu.classList.toggle('active')
	}


$burgerButton.addEventListener("click", menu)
$link.forEach( link =>  link.addEventListener('click',menu)) 

