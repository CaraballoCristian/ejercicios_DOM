const d = document;
const w = window;

export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]");
    
    const callback = entries =>  {
        entries.forEach(entry => {            
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }

            //play solamente cuando la ventana este visible
            w.addEventListener("visibilitychange", e => {
                d.visibilityState === "visible"
                ? entry.target.play()
                : entry.target.pause()
            });
        });
    };

    const observer = new IntersectionObserver(callback, {threshold: 0.5,})

    $videos.forEach(video => {
        observer.observe(video);
    })

}