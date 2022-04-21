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
const shuffling = () => {
    const deck = document.querySelector("#deck");
    const arr = Array.from(document.querySelectorAll(".card"));
    const shuffled = shuffle(arr);
    for (card of shuffled) {
        deck.appendChild(card);
    };
};
shuffling();
// varible
let timerOut = true;
let timerId = 0;
let time = 0;
let cardCheck = [];
moveCount=0;
openMatch=0;


//functions
// to check if the cards are match or close it
const matchCheck = () => {
    if (
        cardCheck[0].firstElementChild.className === cardCheck[1].firstElementChild.className
    ) {
        cardCheck[0].classList.add("match");
        cardCheck[1].classList.add("match");
        cardCheck = [];
        console.log(openMatch++);
        winGame();
    } else {
        setTimeout(() => {
            cardCheck[0].classList.remove("open");
            cardCheck[1].classList.remove("open");

            cardCheck = [];

        }, 1000);

    }
}
//win condition
const winGame = () =>{
    if (openMatch === 8){
    stopClock();

    }
}
//count the moves
const moveFunction=()=>{
    moveCount++;
    const moves=document.querySelector("#moves");
    console.log(`moves:${moveCount}`);
    moves.innerHTML = moveCount;
    
}

// moves restart
const resetMoves=()=>{
    moveCount=0;
    const moves=document.querySelector("#moves");
    moves.innerHTML = moveCount;
    
}

// decrease hearts depend on moves
const heartFunctuin =() => {
    const Allheart=document.querySelectorAll("#heart li");
    if (moveCount === 8 || moveCount === 16){
        for(const heart of Allheart){
          if( heart.style.display != "none"){
            heart.style.display="none";
            break;
          
        }
    }
    
} else if (moveCount === 24)
{
    alert(" Out of moves! Try again")
   restartGame();
}
}
// hearts restart
const resetHeart=() => {
    const Allheart=document.querySelectorAll("#heart li");

    for (heart of Allheart){
        heart.style.display="inline";
    }
}

// cards restart
const resetCards=() => {
    const cards=document.querySelectorAll(".card");
    for (const card of cards){
        card.className="card";
    }
}
const restartGame =() =>{
    stopClock();
    timerOut=true;
    time=0;
    timerCount();

    resetHeart();

    resetMoves();

    shuffling();

    resetCards();

    cardCheck=[];
}


//timer
const timerclock = document.querySelector("#timer");
const startClock = () => {
    timerOut = false;
    timerId = setInterval(() => {
        time++;
        timerCount();
    }, 1000);
}
const timerCount = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    if (sec < 10) {
        timerclock.innerHTML = `${min}:0${sec}`;
    } else {
        timerclock.innerHTML = `${min}:${sec}`;

    }

}
const stopClock =() =>{
    clearInterval(timerId);
    }

// event listeners

// reset listener 

const reset = document.querySelector("#restart");

reset.addEventListener("click",function(){
    //reset time
    restartGame();

    }); 

    //deck Listener

deck.addEventListener("click", function (event) {
    const targrtEv=event.target;
    if(checkClick(event.target)){
        if (timerOut) {
            startClock();
        }

        //event.target.classList.add("open"); //show card
        allCards(event.target);
        cardCheck.push(event.target);

        if (cardCheck.length === 2) {
            matchCheck();
            moveFunction();
            heartFunctuin();

        }
    }
});


//show cards
const allCards = (myCard) => {
    myCard.classList.add("open");
}
//here to check the clicks of the user
const checkClick = (targrtEv) => {
return (
    cardCheck.length < 2  && //more than 2 cards will not accepet
    targrtEv.classList.contains("card") && // will not accept it if the user click in same one card
    !targrtEv.classList.contains("match") // will not accept it if the user click in openned match card

    
);
}

