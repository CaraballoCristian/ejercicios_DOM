const d = document;
const w = window;

export function tester(){
    const $form = d.getElementById("tester");
    let $page;

    d.addEventListener("submit", e => {
        if(e.target === $form){
            e.preventDefault();

            if($form.testerUrl.value.slice(0,7).toLowerCase() !== "http://"){
                $form.testerUrl.value = `http://${$form.testerUrl.value}`;
            }

            let centerX = `${Math.round((w.screen.width-parseInt($form.testerWidth.value))/2)}px`;
            let centerY = `${Math.round((w.screen.height-parseInt($form.testerHeight.value))/2)}px`; 
            
            $page = w.open(
                $form.testerUrl.value, 
                "Test", 
                `innerWidth=${$form.testerWidth.value},
                innerHeight=${$form.testerHeight.value}, 
                left=${centerX}, 
                top=${centerY}`
            );
        }
    });

    d.addEventListener("click", e => {
        if(e.target.matches("#tester__cerrar")){
            $page.close();
        }
    });
}