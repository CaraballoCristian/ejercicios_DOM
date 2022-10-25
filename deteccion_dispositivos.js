const d = document;
const w = window;
const n = navigator;
const ua = n.userAgent;

export default function deviceDetection(){
    const $deteccion = d.getElementById("deteccion");

    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function(){
            return this.android()||this.ios()||this.windows();
        },
    };
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function(){
            return this.linux()||this.mac()||this.windows();
        }, 
    };
    const isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        firefox: () => ua.match(/firefox/i),
        edge: () => ua.match(/edge/i),
        any: function(){
            return (
                this.chrome()||
                this.safari()||
                this.opera()||
                this.ie()||
                this.edge()||
                this.firefox()
            );
        },
    }

    $deteccion.innerHTML = `
    <ul>
    <li>Plataforma: ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
    <br>
    <li>Navegador: ${isBrowser.any()}</li>
    </ul>
    `;

    //Esto no funciona tan bien como lo hacia antes
    if(isBrowser.chrome())  $deteccion.innerHTML += `<p>Contenido solo disponible para Chrome</p>`;
    if(isBrowser.firefox()) $deteccion.innerHTML += `<p>Contenido solo disponible para Firefox</p>`;
    if(isBrowser.safari()) $deteccion.innerHTML += `<p>Contenido solo disponible para Safari</p>`;
    if(isBrowser.opera()) $deteccion.innerHTML += `<p>Contenido solo disponible para Opera</p>`;
    if(isBrowser.ie()) $deteccion.innerHTML += `<p>Contenido solo disponible para IE</p>`;
    if(isBrowser.edge()) $deteccion.innerHTML += `<p>Contenido solo disponible para Edge</p>`;

    if(isDesktop.windows()) $deteccion.innerHTML += `<p>Contenido solo disponible para Windows</p>`;
    if(isDesktop.linux()) $deteccion.innerHTML += `<p>Contenido solo disponible para Linux</p>`;
    if(isDesktop.mac()) $deteccion.innerHTML += `<p>Contenido solo disponible para MAC</p>`;

    if(isMobile.android()) $deteccion.innerHTML += `<p>Contenido solo disponible para Android</p>`;
    if(isMobile.ios()) $deteccion.innerHTML += `<p>Contenido solo disponible para iOS</p>`;

    if(isBrowser.ie()){
        if(confirm("Tu Navegaor está obsoleto, quieres actualizar?")) {
            w.location.href = "https://brave.com/download/";
        }
    }

}