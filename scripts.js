const buttons = document.getElementsByClassName("number-buttons");
const calculatorScreen = document.getElementById("calculator-screen");

let displayValue = 0;

for (let i = 0; i < buttons.length; i++) {
  displayValue ='';
  const button = buttons[i];
  button.addEventListener("click", function () {
    const buttonNumber = button.textContent;
    displayValue = displayValue + buttonNumber;
    calculatorScreen.innerText = displayValue;
  });
}

let firstNumber;
let operator;
let secondNumber;

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
