let player1Score = 0
let player2Score = 0
let player1Turn = true

const resetButton = document.getElementById('resetGame')
const rollButton = document.getElementById('startGame')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const player1ScoreBoard = document.getElementById('player1Score')
const player2ScoreBoard = document.getElementById('player2Score')
const playerTurnmessage = document.getElementById('playerTurn')

function showDisplayButton(){
    rollButton.style.display = 'none'
    resetButton.style.display = "block"
}

function startGame () {
    const random = Math.floor(Math.random() * 6) + 1

    if(player1Turn){

        player1Dice.textContent = random
        player1Score += random
        player1ScoreBoard.textContent = player1Score
        playerTurnmessage.textContent = 'Player 2 Turn'
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')

    }else{

        player2Dice.textContent = random
        player2Score += random
        player2ScoreBoard.textContent = player2Score
        playerTurnmessage.textContent = 'Player 1 Turn'
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')

    }

    if(player1Score >= 20){

        playerTurnmessage.textContent = 'Wow! 🎉 Player 1 Win'
        showDisplayButton()

    }else if(player2Score >= 20){

        playerTurnmessage.textContent = 'Wow! 🎉 Player 2 Win'
        showDisplayButton()

    }

    player1Turn = !player1Turn
}

function restartGame () {
    player1Dice.textContent = '-'
    player1Score = 0
    player1ScoreBoard.textContent = 0
    player2Dice.textContent = '-'
    player2Score = 0
    player2ScoreBoard.textContent = 0
    resetButton.style.display = 'none'
    rollButton.style.display = 'block'
    randomTurn()
    
    if(player1Turn){
        playerTurnmessage.textContent = 'Player 1 Turn'
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
    }else{
        playerTurnmessage.textContent = 'Player 2 Turn'
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
    }
}

function randomTurn(){
    const Turn = Math.floor(Math.random() * 2) + 1
    if(Turn === 1){
        player1Turn = true
    }else{
        player1Turn = false
    }
}

rollButton.addEventListener('click', startGame)

resetButton.addEventListener('click', restartGame)
