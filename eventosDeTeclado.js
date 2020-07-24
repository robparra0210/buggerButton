const d=document;
let x = 0, 
y = 0;

export function moverPelota() {
    
}

export   default function tecla(pelota, lienzo) {

    let $pelota = d.getElementById('pelota'),
          $lienzo = d.getElementById('lienzo');
          
          
          const boton = {
              up : 38,
              down : 40,
              right : 39,
              left : 37
            } 

        d.addEventListener('keydown', (e) => {
    
             let   $limitePelota = $pelota.getBoundingClientRect(),
                   $limiteLienzo = $lienzo.getBoundingClientRect()
        
        switch(e.keyCode){
            case boton.up: //arriba
            if($limitePelota.top > $limiteLienzo.top){y--}
            
              
                e.preventDefault()
                break
                
                    case boton.down: //abajo
                if($limitePelota.bottom < $limiteLienzo.bottom){y++}
                 
                e.preventDefault()
                
              
                break
                
            case boton.right: //derecha
            if($limitePelota.right < $limiteLienzo.right){x++}
            
                e.preventDefault()
                
              
            break
            
            case boton.left: //izquierda
            
                if($limitePelota.left > $limiteLienzo.left){x--}
                 
                
                    e.preventDefault()
                
                    break
                
                default:
                    break
                }
                
                
                $pelota.style.transform = `translate(${10*x}px, ${10*y}px )`
            })
}

