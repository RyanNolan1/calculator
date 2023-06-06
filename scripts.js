const numberButtons = document.getElementsByClassName("number-buttons");
const calculatorScreen = document.getElementById("calculator-screen");
const operatorButtons = document.getElementsByClassName("operator-buttons");
const clearButton = document.getElementById("ac-button");

let displayValue = 0;
let firstNumber;
let operator;
let secondNumber;

clearButton.addEventListener("click", function () {
displayValue = 0;
calculatorScreen.innerText = displayValue;
})

for (let i = 0; i < operatorButtons.length; i++) {
  
  const operatorButton = operatorButtons[i];
  operatorButton.addEventListener("click", function () {
    displayValue = "";
    const buttonOperator = operatorButton.textContent;
    firstNumber = Number(displayValue); //  first number on screen when the number is entered
    operator = buttonOperator; //  the + / * symbol
  });
}

for (let i = 0; i < numberButtons.length; i++) {
  displayValue = "";
  const numberButton = numberButtons[i];
  numberButton.addEventListener("click", function () {
    const buttonNumber = numberButton.textContent;
    displayValue = displayValue + buttonNumber;
    calculatorScreen.innerText = displayValue;
    return displayValue;
  });
}

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    add(firstNumber, secondNumber);
  } else if (operator === "-") {
    subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    divide(firstNumber, secondNumber);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
