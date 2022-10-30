const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll(".main__section")
    
    const callback = entries =>  {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            let $a =  d.querySelector( `.main__a[href="#${id}"]`);
            
            if(entry.isIntersecting){
                $a.classList.add("active");
            }else{
                $a.classList.remove("active");
            }
        })
    }
    const observer =  new IntersectionObserver(callback,{
        //root: d.querySelector('main'),
        //rootMargin: "250px",
        threshold: [.5, .75]
    });

    $sections.forEach(sect => {
        observer.observe(sect);
    });
};