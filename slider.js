const d = document;

export default function slider(arrObj){
    const $boxes = d.getElementById("slider__boxes")
    const $nextBtn = d.getElementById("slider__btn-next");
    const $prevBtn = d.getElementById("slider__btn-prev");
    const $title = d.getElementById("slider__name");

    let prevPos = arrObj.length-1;
    let currPos = 0;    
    let nextPos = 1;
    let transitionEnd = true;
    /////////////////////////FUNCIONES/////////////////////////////
    const createNode = (i) => {
        const $imgBox= d.createElement("div");
        const $img = d.createElement("img");
        
        $img.setAttribute("src", arrObj[i].src)
        $img.setAttribute("alt", arrObj[i].title)
        $img.classList.add("slider__img")
        
        $imgBox.classList.add("slider__img-box");
        $imgBox.appendChild($img);

        return $imgBox;
    }
    const inicializar = () => {
        $boxes.appendChild(createNode(currPos));
        $boxes.firstElementChild.classList.add("slide__curr");
        
        $boxes.insertAdjacentElement("afterbegin", createNode(prevPos));
        $boxes.firstElementChild.classList.add("slide__prev");
        
        $boxes.insertAdjacentElement("beforeend", createNode(nextPos));
        $boxes.lastElementChild.classList.add("slide__next");
        
        $title.innerHTML = `<h3>${arrObj[currPos].title}</h3>`
    }
    const agregar = function(imgPos, style, boxPos){
        let $newImg = createNode(imgPos);
        $newImg.classList.add(style);
        $boxes.insertAdjacentElement(boxPos, $newImg);
    }
    const moveIndex = function(direction){
        if(direction === "forward") {
            nextPos < arrObj.length-1 ? nextPos++ : nextPos = 0;
            currPos < arrObj.length-1 ? currPos++ : currPos = 0;
            prevPos < arrObj.length-1 ? prevPos++ : prevPos = 0;
        }else if(direction === "backward"){
            prevPos > 0 ? prevPos-- : prevPos = arrObj.length-1;
            currPos > 0 ? currPos-- : currPos = arrObj.length-1;
            nextPos > 0 ? nextPos-- : nextPos = arrObj.length-1;
        }
    }
    const transition = function(direction){
        if(direction === "forward") {
            $boxes.children[1].classList.remove("slide__curr");
            $boxes.children[1].classList.add("slide__prev");
            $boxes.children[2].classList.remove("slide__next");
            $boxes.children[2].classList.add("slide__curr");
        }else if(direction === "backward"){
            $boxes.children[0].classList.remove("slide__prev");
            $boxes.children[0].classList.add("slide__curr");
            $boxes.children[1].classList.remove("slide__curr");
            $boxes.children[1].classList.add("slide__next");
        }
    }
    const changeBox = function(direction, imgPos, style, boxPos){
        if(transitionEnd){
            transitionEnd = false;
            moveIndex(direction);
            transition(direction);
            $title.innerHTML = `<h3>${arrObj[currPos].title}</h3>`
            agregar(imgPos, style, boxPos);
            if(direction.toLowerCase() === "forward") $boxes.removeChild($boxes.firstElementChild);
            if(direction.toLowerCase() === "backward") $boxes.removeChild($boxes.lastElementChild);
        }
    }
    //////////////////////INVOCACIONES/////////////////////////////
    inicializar();
    const intervalo = setInterval(() => {
        changeBox("forward", nextPos, "slide__next", "beforeend");
    },4000);

    d.addEventListener("click", e =>{
        if(e.target === $nextBtn || e.target.matches("slider__btn-next *")){
            changeBox("forward", nextPos, "slide__next", "beforeend");
        }
        if (e.target === $prevBtn || e.target.matches("slider__btn-prev *")){
            changeBox("backward", prevPos, "slide__prev", "afterbegin");
        }
   })

   d.addEventListener("transitionend", e => {
     transitionEnd = true;
   })
}