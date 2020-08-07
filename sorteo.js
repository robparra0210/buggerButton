const  d = document; 

export default function draw(btn, selector){
    const getWinner = (selector)=> {
        const $players = d.querySelectorAll(selector), 
        ramdom = Math.floor(Math.random() * $players.length),
        winner = $players[ramdom]        
 
        return ` ${winner.textContent}`
    }

    

    d.addEventListener('click', (e)=>{

        if(e.target.matches(btn)){
            let result = getWinner(selector); 
            alert(`el ganador es ${result}`)
            console.log(result)
        }
    })
}