// Here we are fabricating logic for BackGroundGottachange | Redefined

// literals
const buttons = document.querySelectorAll(".wrapper button")


// defined
function buttonGotListeners() {
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            document.body.style.backgroundColor = event.target.style.backgroundColor
        })
    })
}


// main
buttonGotListeners()
