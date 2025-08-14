
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let userDataForm = document.getElementById("user-data-form-container")
userDataForm.style.display = 'none'
const submitBtn = document.getElementById("submit-btn")
const form = document.getElementById("form-for-data")
function Person(userName, chipsNumber) {
        this.name= userName;
        this.chips = chipsNumber
    }
let player

setTimeout(
    () => {
        userDataForm.style.display = 'block'
    }, 3000
)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let userName = document.getElementById("user-name").value
    let chipsNumber = document.getElementById("chips-number").value
    player = new Person(userName, chipsNumber)
    userDataForm.style.display = 'none'
    playerEl.textContent = player.name + ": $" + player.chips
    
})



function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()   
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}


