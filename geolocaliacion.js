const d = document;
const n = navigator;

export default function geolocalization(){
    const $div = d.getElementById("geolocalization");
    $div.style.fontSize = "1.5rem";
    
    const options = {
        enableHighAccuracy: true,
        //tiempo maximo que dejas que espere la respuesta
        timeout: 5000,
        //para que la lectura en curso no se vea influenciada por la anterior
        //es decir, elimina la posibilidad de cachearlo
        maximumAge: 0,
    };
    const succes = (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let accuracy = position.coords.accuracy;

        $div.innerHTML = `
        <ul>
            <li>Latitud: ${latitude}</li>
            <li>Longitud: ${longitude}</li>
            <li>Precisión: ${accuracy}mts</li>
        <ul>
        <br>
        <a href="https://www.google.com.ar/maps/@${latitude},${longitude}" target="_blank" rel="noopener">VER EN EL MAPA</a>
        `
    };
    const error = (err) => {
        $div.innerHTML = `<p>Error: <mark>${err.message}</mark></p>`
    };
    n.geolocation.getCurrentPosition(succes, error, options);
}