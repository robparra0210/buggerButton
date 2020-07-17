export default function reloj(hora, min, seg, displayReloj, iniciarReloj, detenerReloj, iniciarAlarma, detenerAlarma) {


    document.addEventListener('click', (e) => {
        
        setInterval(function horaActual() {
            const d = document;
            let fecha = new Date(),
                hora = fecha.getHours(),
                minutos = fecha.getMinutes(),
                segundos = fecha.getSeconds(),
                $hora = d.querySelector('.hora'),
                $min = d.querySelector('.min'),
                $seg = d.querySelector('.seg');
            
            	$hora.innerText = hora;
            	$min.innerText = minutos;
            	$seg.innerText = segundos; }, 1000);


        if (e.target.matches(iniciarReloj)) {
            document.querySelector(displayReloj).style.display = 'flex';
            document.querySelector(iniciarReloj).disabled = true;
            document.querySelector(detenerReloj).disabled = false;
        }

        if (e.target.matches(detenerReloj)) {
            document.querySelector(displayReloj).style.display = 'none';
            document.querySelector(iniciarReloj).disabled = false;
            document.querySelector(detenerReloj).disabled = true;
        }

        if (e.target.matches(iniciarAlarma)) {
            document.getElementById('alarma').play();
            document.querySelector(iniciarAlarma).disabled = true;
            document.querySelector(detenerAlarma).disabled = false;
        }

        if (e.target.matches(detenerAlarma)) {
            document.getElementById('alarma').load();
            document.querySelector(detenerAlarma).disabled = true;
            document.querySelector(iniciarAlarma).disabled = false;
        }
    })
}