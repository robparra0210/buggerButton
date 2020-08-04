const d = document, 
    n = navigator;

export default function getGeolocation(id) {
    const $id = d.getElementById(id),
    option = {
        enableHighAccuracy: true,
        time: 5000,
        maximumAge: 0
    },
    success  = (position) =>{
        console.log(position)
        let cord = position.coords;

        $id.innerHTML = `
        <p> 
        Tu posicion actual es: 
        Latitud:  ${cord.latitude}
        Longitud: ${cord.longitude}
        Precicion: ${cord.accuracy} metros
        </br>
        <a href='https://www.google.com/maps/@${cord.latitude}, ${cord.longitude},18z'> Ver en google maps</a>
        </p>` 


    }

    const error =(err)=>{
        $id.innerHTML = `<p><mark> Error ${err}: ${err.message}</mark></p>`
        console.log(`Error ${err}: ${err.message} `)
    };

    n.geolocation.getCurrentPosition(success, error, option)
}