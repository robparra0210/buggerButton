const d = document,
    n = navigator;

export default function webcam(id) {
    const $video = d.getElementById(id);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
         .getUserMedia({video:true, audio:true}) 
         .then(steam =>{
            console.log(steam);
            $video.srcObject = steam
            $video.play()
        })
        .catch((err) => {
            console.log(`error: ${err}`)    
            $video.insertAdjacentHTML('beforebegin',`<p> Error: ${err} </p>`)
          })
    } 
}