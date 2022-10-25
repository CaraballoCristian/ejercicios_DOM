const d = document;
const n = navigator;

export default function webcamDetetion() {
    const $video = d.getElementById("webcam");
    const $videoBox = d.getElementById("webcam__box");
    $videoBox.classList.add("webcam__box");

    n.mediaDevices.getUserMedia({video: true, audio: true})
    .then(stream => {
        //srcObject sirve para utilizar un objeto como src
        $video.srcObject = stream;
        //esta linea la utilizamos para que el video se MANTENGA en "play"
        $video.play();
    })
    .catch(err => {
        $videoBox.innerHTML = `<p>Error: <mark>${err}</mark></p>`;
    })
    
}
