const changeColorCircle = document.querySelector("#range-option-button");
const elementsTheme = document.querySelectorAll(".theme");
const body = document.querySelector("body");
const calculatorBtns = document.querySelectorAll("button");
const calculatorScreen = document.querySelector("#calculator-screen");
let mode = 0;

changeColorCircle.addEventListener("input", e => {
    mode = e.target.value;

    if(mode === "0" && body.classList.contains("light")) {
        elementsTheme.forEach(element => {
            element.classList.add("dark");
            element.classList.remove("light");
        })
    }
    if(mode === "1" && body.classList.contains("dark")) {
        elementsTheme.forEach(element => {
            element.classList.add("light");
            element.classList.remove("dark");
        })
    }
    if(mode === "1" && body.classList.contains("colour")) {
        elementsTheme.forEach(element => {
            element.classList.add("light");
            element.classList.remove("colour");
        })
    }
    if(mode === "2" && body.classList.contains("light")) {
        elementsTheme.forEach(element => {
            element.classList.add("colour");
            element.classList.remove("light");
        })
    }
});

calculatorBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        if(e) {
            
        }
    })
})