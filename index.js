let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random == 1) {
        return 11;
    } else if (random > 10) {
        return 10;
    } else {
        return random;
    }
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    renderGame(0);
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent += " " + cards[index];
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
        message = "You've got Blackjack!! ";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! ";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;

    cards.push(card);

    console.log(cards);
    renderGame();
}
