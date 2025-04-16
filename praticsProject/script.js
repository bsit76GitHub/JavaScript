
const project = document.querySelectorAll('.box')
project.forEach(function (a) {
    a.addEventListener("click", function (e) {
        if (e.target.id === 'project1') {
            colorSwitcher.style.display = "block"
            bmicalculator.style.display = 'none'
            digitalClock.style.display = 'none'
            gussingNumber.style.display = 'none'
        }
        if (e.target.id === 'project2') {
            colorSwitcher.style.display = 'none'
            bmicalculator.style.display = "block"
            digitalClock.style.display = 'none'
            gussingNumber.style.display = 'none'
        }
        if (e.target.id === 'project3') {
            colorSwitcher.style.display = "none"
            bmicalculator.style.display = 'none'
            digitalClock.style.display = "block"
            gussingNumber.style.display = 'none'
        }
        if (e.target.id === 'project4') {
            colorSwitcher.style.display = "none"
            bmicalculator.style.display = 'none'
            digitalClock.style.display = 'none'
            gussingNumber.style.display = "block"

        }
    })
})

//==================================================
const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id
        }
    })
})
//==================================================
const form = document.querySelector('form');
// const height = parseInt(document.querySelector("#height").value)  // this usecase will give you empty
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const bmiscore = document.querySelector('#bmiscore')
    const bmiresult = document.querySelector('#bmiresult')
    if (height === '' || height < 0 || isNaN(height)) {
        bmiscore.innerText = `Please give valid height`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        bmiscore.innerHTML = `Please give valid weight`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        bmiscore.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            bmiresult.innerText = 'Under Weight'
        } else if (bmi > 18.6 && bmi < 24.9) {
            bmiresult.innerText = 'Healthy Person'
        } else {
            console.log('Over Weight');
            bmiresult.innerText = 'Over Weight'
        }
    }

})
//==================================================
const clock = document.getElementById('clock')
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)

//==================================================
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click',function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number greater than 1')
    }else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`);
        endGame();
    } else if(guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`; 
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.replaceChild(p);
        playGame = true       
    });
}

