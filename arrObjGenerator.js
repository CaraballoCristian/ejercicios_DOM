export default function createArrObj(cant, width, height, title){
    let arr = [];
    for(let i = 0; i < cant; i++){
        let random = Math.ceil(Math.random()*6);
        let topic;
        switch(random){
            case 1: topic = "dog";
            break;
            case 2: topic = "cars";
            break;
            case 3: topic = "girl";
            break;
            case 4: topic = "paris";
            break;
            case 5: topic = "water";
            break;
            case 6: topic = "food";
            break;
            default: console.log("default", random);
        }
        arr[i] = {
            src: `https://loremflickr.com/${width}/${height}/${topic}`,
            title: `${title} ${i}`
        }
    }
    return arr;
}