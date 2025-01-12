const gameBoard = document.querySelector('.game-board');
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F'];
let flippedCards = [];
let matchedCards = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="front"></div>
        <div class="back">${value}</div>
    `;
    card.addEventListener('click', () => flipCard(card, value));
    return card;
}

function flipCard(card, value) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
        card.classList.add('flipped');
        flippedCards.push({ card, value });
        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [first, second] = flippedCards;
    if (first.value === second.value) {
        first.card.classList.add('matched');
        second.card.classList.add('matched');
        matchedCards += 2;
        if (matchedCards === cardValues.length) {
            setTimeout(() => alert('You win!'), 500);
        }
    } else {
        setTimeout(() => {
            first.card.classList.remove('flipped');
            second.card.classList.remove('flipped');
        }, 1000);
    }
    flippedCards = [];
}

function startGame() {
    shuffle(cardValues);
    cardValues.forEach(value => {
        const card = createCard(value);
        gameBoard.appendChild(card);
    });
}

startGame();
