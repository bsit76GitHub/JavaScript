
const project = document.querySelectorAll('.box')
project.forEach(function (a) {
    a.addEventListener("click", function (e) {
        if (e.target.id === 'project1') {
            colorSwitcher.style.display = "block"
            bmicalculator.style.display = 'none'
            digitalClock.style.display = 'none'
            guessNumber.style.display = 'none'
        }
        if (e.target.id === 'project2') {
            colorSwitcher.style.display = 'none'
            bmicalculator.style.display = "block"
            digitalClock.style.display = 'none'
            guessNumber.style.display = 'none'
        }
        if (e.target.id === 'project3') {
            colorSwitcher.style.display = "none"
            bmicalculator.style.display = 'none'
            digitalClock.style.display = "block"
            guessNumber.style.display = 'none'
        }
        if (e.target.id === 'project4') {
            colorSwitcher.style.display = "none"
            bmicalculator.style.display = 'none'
            digitalClock.style.display = 'none'
            guessNumber.style.display = "block"

        }
    })
})


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

const clock = document.getElementById('clock')
setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)




