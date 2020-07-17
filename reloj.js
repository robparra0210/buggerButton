export default function reloj(hora, min,seg){
    
    setInterval(horaActual , 1000)

}
	

function horaActual(){
	const d=document;

	let fecha = new Date(),
		hora = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();
       

    let   $hora = d.querySelector('.hora'),
      	  $min = d.querySelector('.min'),
    	  $seg = d.querySelector('.seg');

		  $hora.innerText = hora;
		  $min.innerText = minutos;
		  $seg.innerText = segundos;
    	 

}


