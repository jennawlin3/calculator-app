const changeColorCircle = document.querySelector("#range-option-button");
const elementsTheme = document.querySelectorAll(".theme");
const body = document.querySelector("body");
const calculator = document.querySelector(".calculator");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const calculatorScreen = document.querySelector(".result");
const equalBtn = document.querySelector("#equal");
const deleteBtn = document.querySelector("#delete");
const resetBtn = document.querySelector("#reset");
let mode = 0;
let calculateScreen = [];
let result = 0;
let lastBtn;

changeColorCircle.addEventListener("input", e => {
    mode = e.target.value;

    if(mode === "0" && body.classList.contains("light")) {
        elementsTheme.forEach(element => {
            element.classList.add("dark");
            element.classList.remove("light");
        })
    }
    if(mode === "0" && body.classList.contains("colour")) {
        elementsTheme.forEach(element => {
            element.classList.add("dark");
            element.classList.remove("colour");
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
    if(mode === "2" && body.classList.contains("dark")) {
        elementsTheme.forEach(element => {
            element.classList.add("colour");
            element.classList.remove("dark");
        })
    }
});

calculator.addEventListener("click", e => {
    e.preventDefault();
})

numberBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        if(e) {
            calculateScreen.push(e.target.value);
            calculatorScreen.textContent += e.target.value;
            lastBtn = "number";
            console.log(calculateScreen);            
        }
    })
})

operatorBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        console.log(calculateScreen);     
        if(lastBtn === "operator") {
            return;
        }
        
            calculateScreen.push(e.target.value);
            calculatorScreen.textContent += e.target.value;
            lastBtn = "operator";
    })
})

equalBtn.addEventListener("click", e => {
    if(e) {
        calculate(calculateScreen);
    }
});

deleteBtn.addEventListener("click", e => {
    if(e) {
        
        //calculateScreen.pop();
        let calculateScreenVal = calculatorScreen.textContent;
        
        calculatorScreen.textContent = calculateScreenVal.substring(0, calculateScreenVal.length-1);
        calculateScreen = [];

        for(let i = 0; i < calculateScreenVal.length-1; i++) {
            if(calculateScreenVal[i] === "-") {
                calculateScreen.push("minus");
                continue;
            }
            calculateScreen.push(calculateScreenVal[i]);
        }
        console.log(calculateScreen);
    }
})

resetBtn.addEventListener("click", e => {
    if(e) {
        calculateScreen = [];
        calculatorScreen.textContent = calculateScreen;
    }
})


function calculate(calculateScreen) {
    if(calculateScreen[calculateScreen.length - 1] === "+" || calculateScreen[calculateScreen.length - 1] === "minus" || calculateScreen[calculateScreen.length- 1] === "*" || calculateScreen[calculateScreen.length - 1] === "/" || calculateScreen[calculateScreen.length - 1] === ".") {
        
        calculatorScreen.textContent = "Syntax ERROR";
        return calculateScreen = "";
    }

    let count = calculateScreen.length;

    result = eval(calculateScreen.join("").toString());

    let resultString = result.toLocaleString("en-us");

    if(result.toString().substring(0,4).length > 8) {
        calculatorScreen.textContent = Number(resultString).toFixed(8);
       } else {
        calculatorScreen.textContent = resultString;
       }
       
    calculateScreen.splice(0, count, result);
}

