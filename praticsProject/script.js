
const project = document.querySelectorAll('.box')
project.forEach(function (a) {
    a.addEventListener("click",function (e) {
        if (e.target.id === 'project1') {
            colorSwitcher.style.display = "block"
        }
    })
})


const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
buttons.forEach(function (button) {
    button.addEventListener("click",function (e) {
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
