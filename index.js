let player = {
    name: "Player",
    chips: 200,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("newcard-btn");

playerEl.textContent = player.name + ": $" + player.chips;

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
    isAlive = true;
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
        isAlive = false;
        playerEl.textContent = player.name + ": $" + player.chips * 2;
    } else {
        message = "You're out of the game! ";
        isAlive = false;
        playerEl.textContent = player.name + ": $" + player.chips * 0;
    }
    if (isAlive) {
        startBtn.disabled = true;
    } else {
        startBtn.disabled = true;
        newCardBtn.disabled = true;

        let elem = document.createElement("span");
        elem.innerHTML =
            '<button id="tryAgain-btn" onclick="window.location.reload()" >Try Again</button>';
        elem.style.position = "absolute";
        elem.style.bottom = "0";

        body.appendChild(elem);
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;

        cards.push(card);

        console.log(cards);
        renderGame();
    }
}
