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
let equation;
let items = 0;
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
        }
    })
})

operatorBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        if(lastBtn === "operator") {
            return;
        }
        
        if(e.target.id === "minus") { 
            calculateScreen.push("minus");
            calculatorScreen.textContent += "-";
            lastBtn = "operator";            
        } else {
            calculateScreen.push(e.target.value);
            calculatorScreen.textContent += e.target.value;
            lastBtn = "operator";
        }
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
        return calculateScreen = [];;
    }


    console.log(calculateScreen);
    if(calculateScreen.includes("+")) {
        let count = calculateScreen.length;
        equation = calculateScreen.join("").split("+");
        let result = equation.reduce((acum, curr) => {
        return Number(acum) + Number(curr);
       }) 
       
       if(result.toString().length > 8) {
        calculatorScreen.textContent = result.toFixed(8);
       } else {
        calculatorScreen.textContent = result;
       }
        calculatorScreen.textContent = result;
        calculateScreen.splice(0, count, result);
    }
        
    if(calculateScreen.includes("minus")) {
        let count = calculateScreen.length;
        equation = calculateScreen.join("").split("minus");
        let result = equation.reduce((acum, curr) => {
        return Number(acum) - Number(curr);
       }) 
       
       if(result.toString().length > 8) {
        calculatorScreen.textContent = result.toFixed(8);
       } else {
        calculatorScreen.textContent = result;
       }
        calculatorScreen.textContent = result;
        calculateScreen.splice(0, count, result);
    }
           
    if(calculateScreen.includes("*")) {
        let count = calculateScreen.length;
        equation = calculateScreen.join("").split("*");
        let result = equation.reduce((acum, curr) => {
        return Number(acum) * Number(curr);
       }) 
       
       if(result.toString().length > 8) {
        calculatorScreen.textContent = result.toFixed(8);
       } else {
        calculatorScreen.textContent = result;
       }
        calculatorScreen.textContent = result;
        calculateScreen.splice(0, count, result);
    }
        
    if(calculateScreen.includes("/")) {
        let count = calculateScreen.length;
        equation = calculateScreen.join("").split("/");
        let result = equation.reduce((acum, curr) => {
        return Number(acum) / Number(curr);
       }) 

       if(result.toString().length > 8) {
        calculatorScreen.textContent = result.toFixed(8);
       } else {
        calculatorScreen.textContent = result;
       }
        calculateScreen.splice(0, count, result);
    }  
}

