const w = window;
const d = document;
const n = navigator;

export default function conectionCheck(){
    let $banner = d.createElement("div");
    $banner.style.zIndex = 999;
    $banner.classList.add("banner");

const switchBanner = () =>{
    if(n.onLine){
        $banner.innerText = `Conexion Reestablecida`;
        $banner.classList.remove("offline");
        $banner.classList.add("online");
        setTimeout(() => {
            $banner.classList.remove("online");
            $banner.innerText = ``;
        },2000)
    }else{
        $banner.innerText = `Conexion Perdida`;
        $banner.classList.remove("online");
        $banner.classList.add("offline");
        setTimeout(() => {
            $banner.classList.remove("offline");
            $banner.innerText = ``;
        },2000)
    }
};
    
    w.addEventListener("online", e =>{
        switchBanner();
    })
    w.addEventListener("offline", e =>{
        switchBanner();
    })

    d.body.insertAdjacentElement("afterbegin", $banner);
}
    