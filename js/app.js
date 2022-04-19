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
let cardCheck=[];


//functions
const matchCheck = () => {
    if (
        cardCheck[0].firstElementChild.className === cardCheck[1].firstElementChild.className
        )
    {
        cardCheck[0].classList.add("match");
        cardCheck[1].classList.add("match");
        cardCheck=[];

    }else
    {
        setTimeout(() => {
        cardCheck[0].classList.remove("open");
        cardCheck[1].classList.remove("open");
        
        cardCheck=[];

        }, 1000);
         
}
}




//timer
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
    
    // event listeners
    deck.addEventListener("click",function(event){
    if (timerOut){
    startClock();}
    
    //event.target.classList.add("open"); //show card
      allCards(event.target);

      if (cardCheck.length === 2){
          matchCheck(event.target);
      }
    
    });
 

//show cards
const allCards = (myCard) =>{
    myCard.classList.add("open");
}







