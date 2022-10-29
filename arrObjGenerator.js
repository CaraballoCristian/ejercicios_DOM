export default function createArrObj(cant, width, height, title){
    let arr = [];
    for(let i = 0; i < cant; i++){
        let random = Math.ceil(Math.random()*6);
        let topic;
        switch(random){
            case 1: topic = "any";
            break;
            case 2: topic = "nature";
            break;
            case 3: topic = "people";
            break;
            case 4: topic = "arch";
            break;
            case 5: topic = "tech";
            break;
            case 6: topic = "animals";
            break;
            default: console.log("default", random);
        }
        arr[i] = {
            src: `https://placeimg.com/${width}/${height}/${topic}`,
            title: `${title} ${i}`
        }
    }
    return arr;
}