const d= document,  
    w=window,
    n=navigator

export default function neterworkStatus(){
  const isOnline = () => {
      const $div =d.createElement('div');

      if(n.onLine){
          $div.textContent = 'conexion reestablecida'
          $div.classList.add('online')
          $div.classList.remove('offline')
      }else{
        $div.textContent = 'conexion perdida'
        $div.classList.add('offline')
        $div.classList.remove('online')
      }

      d.body.insertAdjacentElement('afterbegin', $div)

      setTimeout(()=> d.body.removeChild($div),1500)

    }
  w.addEventListener('online', (e)=>isOnline())
  w.addEventListener('offline', (e)=> isOnline() )
}