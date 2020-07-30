const d = document

export default function countdown (id, limitday, finalMenssage){
    const $countdown = d.getElementById(id),
           countdownDate = new Date(limitday).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            day = Math.floor( limitTime / (1000*60*60*24)),
            hours = ('0' + Math.floor((limitTime  % (1000*60*60*24))/(1000*60*60))).slice(-2),
            minutes = ('0' + Math.floor((limitTime  % (1000*60*60))/(1000*60))).slice(-2),

            seconds = ('0' + Math.floor((limitTime  % (1000*60))/(1000))).slice(-2);

            
            
            $countdown.innerHTML = `<h3> faltan ${day} dias, ${hours} horas, ${minutes} minutos, ${seconds}segundos`
        if(limitTime < 0){
            clearInterval(countdownTempo)
            $countdown.innerHTML = `Feliz cumpleaños`

        }

        }, 1000);
}