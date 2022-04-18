function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
const shuffling =() =>{
    const deck =document.querySelector("#deck");
    const arr =Array.from(document.querySelectorAll(".card"));
    const shuffled = shuffle(arr);
    for (card of shuffled){
        deck.appendChild(card);
    };
};
shuffling();
// varible
let timerOut=true;
let timerId=0;
let time=0;


//functions
var allcards =document.querySelectorAll(".card");
for (const element of allcards){
    element.addEventListener("click",function(event){
    event.target.classList.add("open");

});
}




// event listeners

const timerclock = document.querySelector("#timer");
const startClock =() =>{
    timerOut=false;
    timerId = setInterval(() => {
        time++;
        timerCount();
    }, 1000);
    }
    const timerCount =() =>{
        const min = Math.floor(time / 60);
        const sec = time % 60;
        if (sec < 10){
            timerclock.innerHTML=`${min}:0${sec}`;
        }else{
            timerclock.innerHTML=`${min}:${sec}`;
    
        }
    
    }
    
    deck.addEventListener("click",function(){
    if (timerOut){
    startClock();}
    });