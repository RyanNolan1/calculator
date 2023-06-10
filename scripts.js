const numberButtons = document.getElementsByClassName("number-buttons");
const calculatorScreen = document.getElementById("calculator-screen");
const operatorButtons = document.getElementsByClassName("operator-buttons");
const clearButton = document.getElementById("ac-button");
const equalsButton = document.getElementById("equals-button");

let displayValue = "";
let firstNumber = 0;
let operator = "";
let secondNumber = 0;

for (let i = 0; i < numberButtons.length; i++) {
  const numberButton = numberButtons[i];
  numberButton.addEventListener("click", function () {
    const buttonNumber = numberButton.textContent;
    displayValue += buttonNumber;
    calculatorScreen.innerText = displayValue;
    return displayValue;
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  const operatorButton = operatorButtons[i];
  operatorButton.addEventListener("click", function () {
    const buttonOperator = operatorButton.textContent;
    firstNumber = Number(displayValue); //  first number on screen when the number is entered
    operator = buttonOperator; //  the + / * symbol
    displayValue = "";
    console.log(firstNumber);
    console.log(operator);
  });
}

equalsButton.addEventListener("click", function () {
  secondNumber = Number(displayValue);
  operate(operator, firstNumber, secondNumber);
});

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    console.log(add(firstNumber, secondNumber));
  } else if (operator === "-") {
    console.log(subtract(firstNumber, secondNumber));
  } else if (operator === "x") {
    console.log(multiply(firstNumber, secondNumber));
  } else if (operator === "÷") {
    console.log(divide(firstNumber, secondNumber));
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
