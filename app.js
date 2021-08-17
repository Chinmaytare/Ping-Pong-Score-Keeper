const button1 = document.querySelector('#playerone');
const button2 = document.querySelector('#playertwo');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
const winnerCard = document.querySelector('.modal');
const closeCard = document.querySelector('.modal-close');
const hasWon = document.querySelector('.has-won')

let p1Counter = 0;
let p2Counter = 0;
let winningScore = 5;
let isGameOver = false;

button1.addEventListener('click', () => {
    if (!isGameOver) {
        p1Counter += 1;
        if (p1Counter === winningScore) {
            isGameOver = true;
            p1Score.classList.add('has-text-success')
            p2Score.classList.add('has-text-danger')
            button1.disabled = true;
            button2.disabled = true;
            const h1p1 = document.createElement('h1');
            h1p1.innerText = "Player one wins!"
            hasWon.append(h1p1);
            winnerCard.classList.toggle('is-active')
            closeCard.addEventListener('click', () => {
                winnerCard.classList.remove('is-active')
                h1p1.innerText = '';
                reset();
            })
          
        }
        p1Score.textContent = p1Counter;

    }

})

button2.addEventListener('click', () => {
    if(!isGameOver) {
        p2Counter += 1;
        if(p2Counter === winningScore) {
            isGameOver = true;
            p1Score.classList.add('has-text-danger')
            p2Score.classList.add('has-text-success')
            button1.disabled = true;
            button2.disabled = true;
            const h1p2 = document.createElement('h1');
            h1p2.innerText = "Player two wins!"
            hasWon.append(h1p2);
            winnerCard.classList.toggle('is-active')
            closeCard.addEventListener('click', () => {
                winnerCard.classList.remove('is-active')
                h1p2.innerText = '';
                reset();
            })
           
        }
        p2Score.textContent = p2Counter;
    }

})

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value); 
    reset();
})


function reset () {
    isGameOver = false;
    p1Counter = 0;
    p2Counter = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove('has-text-success', 'has-text-danger')
    p2Score.classList.remove('has-text-success', 'has-text-danger')
    button1.disabled = false;
    button2.disabled = false;
    h1p1.innerText = "";
}