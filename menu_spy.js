const d = document

export default function scrollSpy(seccion){
    const $section = d.querySelectorAll(seccion);
    const cb = (entries)=> {
        //console.log("entries", entries)
        entries.forEach(entry=>{
      const id = entry.target.getAttribute("id")
            
            //console.log('entry', entry)
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.add('active')
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
                classList.remove('active')
            }
        })
    }
    const observer = new IntersectionObserver(cb,{
        //rootMargin:'0px 0px -750px 0px  ' 
        threshold:[0.5 ]
    })

    $section.forEach(el => observer.observe(el))


}