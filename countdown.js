export default function countdown() {
       
    let countdown = setInterval( reducir=>{
        let fecha = new Date("Oct 2, 2020 0:0:0").getTime()
        let ahora = Date.now()
      
        
            let dif = fecha - ahora
            let days = Math.floor(dif / (1000 * 60 * 60 * 24));
            let hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((dif % (1000 * 60)) / 1000);
          
            document.querySelector('.countdown').innerHTML =  days + "d " + hours + "h " + minutes + "m " + seconds + "s "
            if(dif <= 0){
                clearInterval(countdown)
                document.querySelector('.countdown').innerHTML = 'Feliz Cumpleaños!!!'
            }
        },1000)
}

