let playerObject = {
    name: "Abinash",
    chip: "$199"
}
let sum=0
let cards=[];
let hasBlackjack= false;
let isAlive= false;
let message="";

document.getElementById("player-el").textContent= playerObject.name + ":" + " " + playerObject.chip

function getRandomCard(){

    let randomNumber = Math.floor(Math.random()*13) + 1

    if (randomNumber===1){
        return 11
    }else if(randomNumber>10){
        return 10
    }else{
    return randomNumber
    }
}


function startGame(){

    isAlive=true;
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    sum=firstcard+secondcard
    cards=[firstcard,secondcard]


    renderGame()
}

function renderGame() {

    document.querySelector("#card-el").textContent= "Cards: "
    for (let i=0; i<cards.length; i++){
        document.querySelector("#card-el").textContent += cards[i]+" "
    }

    document.getElementById("result-el").textContent="Result: " + sum;


if (sum <= 20){
    message=" Do you want to draw a card ?"
}else if(sum === 21){
    message="woohoo! You've got Blackjack!"
    hasBlackjack=true;
}else{
    message="sorry! you are out of the game."
    isAlive=false;
    
}

document.getElementById("message-el").textContent=  message;


}

function newCard(){
    
    if (isAlive === true && hasBlackjack === false){
    let card=getRandomCard();
    cards.push(card)

    sum += card

    renderGame()
    }

}