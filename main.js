class Word{
    constructor(word, defintion, pictureUrl){
        this.word = word;
        this.defintion = defintion;
        this.pictureUrl = pictureUrl;
    }
}

class EmotionObject{
    constructor(emotion, emoji, description, color, onomatopoeia){
        this.emotion = emotion;
        this.emoji = emoji;
        this.description = description;
        this.color = color;
        this.onomatopoeia = onomatopoeia;
    }

    //Return onomatiopoeia word array
    getOnomatopoeiaWords(){
        let wordsArray = [];
        let targetArray = this.onomatopoeia
        for (let i=0;i < targetArray.length;i++) {
            let name = targetArray[i];
            let def = dictionary[name];
            let pic = pictureDictionary[name];
            wordsArray.push(new Word(name, def, pic));
        }
        return wordsArray;
    }

    //Create a top table part of the website
    getHtmlContainerString1(){
        let containerSection = `<div class="linkBox col-12 col-md-5 col-lg-3 mx-lg-4 py-1 my-2
        d-flex bg-${this.color} flex-column justify-content-center align-items-center
        text-white">`;
        
        containerSection +=
            `
            <h2>${this.emotion}</h2>
            <h1>${this.emoji}</h1>
            <p>${this.description}</p>
            <a href="#section${this.emotion}"></a>
            </div>
            `
        ;
        return containerSection;

    }

    //Create a bottom dictionary part of the website
    getHtmlContainerString2(){
        let containerSection = 
        `
        <div id="section${this.emotion}" class="container-fluid d-flex flex-column py-3 px-4 px-md-5 bg-${this.color}
        text-left">
            <div class="col-12 p-3 text-white">
                <h2>${this.emotion}</h2>
                <p>${this.description}</p>
            </div>
            <div class="col-12 pb-3 pl-3 pr-3 d-flex flex-row flex-wrap justify-content-between"> 
        `;
        let targetArray = this.getOnomatopoeiaWords();
        for(let i=0;i < targetArray.length;i++) {
            containerSection += 
            `
            <div class="col-12 col-md-5 py-1 my-2 d-flex bg-white">
                <div class="col-8">
                    <h3>${targetArray[i].word}</h3>
                    <p>${targetArray[i].defintion}</p>
                </div>
                <div class="col-4 px-0 d-flex justify-content-center align-items-center">
                    <img class="col-12 imgShape" src=${targetArray[i].pictureUrl}>
                </div>
            </div>
            `;
        }
        containerSection += 
        `
        </div>
        </div>
        `;
        return containerSection;
    }
}

//Global constant
const dictionary = {
    "bark":"the sound made by a dog",
    "grunt":"issue a low, animal-like noise",
    "roar":"make a loud noise, as of an animal",
    "whack":"the act of hitting vigorously",
    "smack":"a blow from a flat object (as an open hand)",
    "hiss":`make a sharp, elongated "s" sound`,
    "ahem":"the utterance of a sound similar to clearing the throat",
    "bawl":"cry loudly",
    "bling":"flashy, ostentatious jewelry",
    "boom":"a deep prolonged loud noise",
    "buzz":"the sound of rapid vibration",
    "caw":"utter a cry, characteristic of crows, rooks, or ravens",
    "chatter":"talk socially without exchanging too much information",
    "chant":"a repetitive song in which syllables are assigned to a tone",
    "clatter":"a continuous rattling sound as of hard objects falling or striking each other.",
    "clunk":"a heavy dull sound (as made by impact of heavy objects)",
    "crawl":"move forward on the hands and knees or by dragging the body close to the ground.",
    "flick":"throw or toss with a quick motion",
    "giggle":"a light, silly laugh.",
    "gargle":"an act or instance or the sound of washing one's mouth and throat with a liquid kept in motion by exhaling through it.",
    "honk":"the cry of a goose or any loud sound resembling it",
    "oink":"the short low gruff noise of the kind made by hogs",
    "whine":"a complaint uttered in a plaintive way",
    "waah":"sound made when crying by babies",
    "zing":"sound my by something energetic"
};

const pictureDictionary = {
    "bark":"https://cdn.pixabay.com/photo/2013/07/25/11/59/german-shepherd-166972_1280.jpg",
    "grunt":"https://cdn.pixabay.com/photo/2010/11/29/nepal-419__480.jpg",
    "roar":"https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_1280.jpg",
    "whack":"https://cdn.pixabay.com/photo/2017/10/27/11/49/boxer-2894025_1280.jpg",
    "smack":"https://cdn.pixabay.com/photo/2015/03/20/19/38/hammer-682767_1280.jpg",
    "hiss":"https://cdn.pixabay.com/photo/2016/10/13/23/30/cat-1739091_1280.jpg",
    "ahem":"https://cdn.pixabay.com/photo/2014/03/13/10/12/man-286476_1280.jpg",
    "bawl":"https://cdn.pixabay.com/photo/2015/06/26/10/17/smiley-822365_960_720.jpg",
    "bling":"https://cdn.pixabay.com/photo/2017/12/30/13/37/happy-new-year-3050088_1280.jpg",
    "boom":"https://cdn.pixabay.com/photo/2016/04/12/21/17/explosion-1325471_1280.jpg",
    "buzz":"https://cdn.pixabay.com/photo/2020/02/13/10/29/bees-4845211_1280.jpg",
    "caw":"https://cdn.pixabay.com/photo/2017/02/16/11/13/bird-2071185_1280.jpg",
    "chatter":"https://cdn.pixabay.com/photo/2014/07/25/08/55/bar-401546_1280.jpg",
    "chant":"https://cdn.pixabay.com/photo/2016/07/19/07/43/parchment-1527650__340.jpg",
    "clatter":"https://cdn.pixabay.com/photo/2020/02/06/19/01/clutter-4825256_1280.jpg",
    "clunk":"https://cdn.pixabay.com/photo/2017/01/10/03/06/steel-1968194_1280.jpg",
    "crawl":"https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg",
    "flick":"https://cdn.pixabay.com/photo/2012/02/23/08/48/disgust-15793_1280.jpg",
    "giggle":"https://cdn.pixabay.com/photo/2017/08/07/15/18/people-2604850_1280.jpg",
    "gargle":"https://cdn.pixabay.com/photo/2017/04/03/16/32/girl-smoke-cigarette-2198839_1280.jpg",
    "honk":"https://cdn.pixabay.com/photo/2017/02/28/14/37/geese-2105918_1280.jpg",
    "oink":"https://cdn.pixabay.com/photo/2019/03/02/15/32/pig-4030013_1280.jpg",
    "whine":"https://cdn.pixabay.com/photo/2020/05/01/01/57/girl-5115192_960_720.jpg",
    "waah":"https://cdn.pixabay.com/photo/2017/01/18/02/18/emotions-1988745_1280.jpg",
    "zing":"https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg"
};

const emotions = [
    new EmotionObject("angry", "😡", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "red", ["bark","grunt", "roar","whack","smack","hiss"]),
    new EmotionObject("happy", "😊", "feeling or showing pleasure or contentment.", "rainbow", ["bling","chatter","chant","giggle"]),
    new EmotionObject("bad", "😰", "not such as to be hoped for or desired; unpleasant or unwelcome.", "beige", ["ahem","clatter","clunk"]),
    new EmotionObject("sad", "🥺", "feeling or showing sorrow; unhappy.", "grey", ["bawl","whine","waah"]),
    new EmotionObject("surprised", "😲", "to feel mild astonishment or shock.", "purple", ["boom","honk","zing"]),
    new EmotionObject("fearful", "😖", "feeling afraid; showing fear or anxiety.", "green", ["buzz","caw","crawl"]),
    new EmotionObject("disgusted", "😒", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "orange", ["flick","gargle","oink"])
];

let mainDiv = document.getElementById("target");
let mainHtml =
`
<div class="container d-flex flex-wrap justify-content-between justify-content-lg-center align-items-center">
`;
let emojiHtml = "";
let wordsHtml = "";

for (let i=0;i < emotions.length;i++) {
    emojiHtml += emotions[i].getHtmlContainerString1();
    wordsHtml += emotions[i].getHtmlContainerString2();
}

mainHtml +=  emojiHtml + "</div>" + wordsHtml;
mainDiv.innerHTML = mainHtml;
