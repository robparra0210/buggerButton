const d = document, 
    w = window;

export default function smartVideo(){
 const $videos = d.querySelectorAll('.videoo');

    const cb = (entries)=>{
        entries.forEach((entry) => {
            if(entry.isIntersecting ){
                entry.target.play()
            }else{
                entry.target.pause()
            }


            w.addEventListener("visibilitychange", e => {
                d.visibilityState === "visible" ? entry.target.play() : entry.target.pause()
            })
        });
    }
    
    
    
    const observer = new IntersectionObserver( cb, {threshold:0.9});
    $videos.forEach(el=> observer.observe(el))
}