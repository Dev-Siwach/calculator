const numberOne = document.querySelector("#numberOne");
const numberTwo = document.querySelector("#numberTwo");
const numberThree = document.querySelector("#numberThree");
const numberFour = document.querySelector("#numberFour");
const numberFive = document.querySelector("#numberFive");
const numberSix = document.querySelector("#numberSix");
const numberSeven = document.querySelector("#numberSeven");
const numberEight = document.querySelector("#numberEight");
const numberNine = document.querySelector("#numberNine");
const numberZero = document.querySelector("#numberZero");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const remainder = document.querySelector("#remainder");
const product = document.querySelector("#product");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const point = document.querySelector("#point");
const equalToButton = document.querySelector("#equalToButton");

const expression = document.querySelector("#expression");
const result = document.querySelector("#result");

numberOne.addEventListener("click", function () { expression.textContent += 1; })
numberTwo.addEventListener("click", function () { expression.textContent += 2; })
numberThree.addEventListener("click", function () { expression.textContent += 3; })
numberFour.addEventListener("click", function () { expression.textContent += 4; })
numberFive.addEventListener("click", function () { expression.textContent += 5; })
numberSix.addEventListener("click", function () { expression.textContent += 6; })
numberSeven.addEventListener("click", function () { expression.textContent += 7; })
numberEight.addEventListener("click", function () { expression.textContent += 8; })
numberNine.addEventListener("click", function () { expression.textContent += 9; })
numberZero.addEventListener("click", function () { expression.textContent += 0; })
clear.addEventListener("click", function () {
    expression.textContent = "";
    result.textContent = "";
})
backspace.addEventListener("click", function () {
    let newExpression = expression.textContent.slice(0, expression.textContent.length - 1);
    return expression.textContent = newExpression;
})
divide.addEventListener("click", function () {
    expression.textContent += " ÷ ";
})
remainder.addEventListener("click", function () { expression.textContent += " % "; })
product.addEventListener("click", function () { expression.textContent += " x "; })
minus.addEventListener("click", function () { expression.textContent += " - "; })
plus.addEventListener("click", function () { expression.textContent += " + "; })
point.addEventListener("click", function () { expression.textContent += "."; })
equalToButton.addEventListener("click", function solve() {
    if (expression.textContent.includes(" ÷ ") === true) {
        let expressionArray = expression.textContent.split(" ÷ ");
        result.textContent = parseFloat(expressionArray[0]) / parseFloat(expressionArray[1]);
    } else if (expression.textContent.includes(" x ") === true) {
        let expressionArray = expression.textContent.split(" x ");
        result.textContent = parseFloat(expressionArray[0]) * parseFloat(expressionArray[1]);
    } else if (expression.textContent.includes(" % ") === true) {
        let expressionArray = expression.textContent.split(" % ");
        result.textContent = parseFloat(expressionArray[0]) % parseFloat(expressionArray[1]);
    } else if (expression.textContent.includes(" + ") === true) {
        let expressionArray = expression.textContent.split(" + ");
        result.textContent = parseFloat(expressionArray[0]) + parseFloat(expressionArray[1]);
    } else if (expression.textContent.includes(" - ") === true) {
        let expressionArray = expression.textContent.split(" - ");
        result.textContent = parseFloat(expressionArray[0]) - parseFloat(expressionArray[1]);
    }
})

