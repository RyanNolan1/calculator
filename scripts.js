const numberButtons = document.getElementsByClassName("number-buttons");
const calculatorScreen = document.getElementById("calculator-screen");
const operatorButtons = document.getElementsByClassName("operator-buttons");
const clearButton = document.getElementById("ac-button");
const equalsButton = document.getElementById("equals-button");
const backButton = document.getElementById("back-button");

let displayValue = "";
let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let calculationArray = [];

for (let i = 0; i < numberButtons.length; i++) {
  const numberButton = numberButtons[i];
  numberButton.addEventListener("click", function () {
    const buttonNumber = numberButton.textContent;
    displayValue += buttonNumber;
    calculatorScreen.innerText = displayValue;
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  const operatorButton = operatorButtons[i];
  operatorButton.addEventListener("click", function () {
    const buttonOperator = operatorButton.textContent;
    firstNumber = Number(calculatorScreen.innerText);
    operator = buttonOperator;
    displayValue = "";
    calculationArray.push(firstNumber, operator);

    if (calculationArray.length > 2) {
      firstNumber = calculationArray[0];
      operator = calculationArray[1];
      secondNumber = calculationArray[2];
      calculatorScreen.innerText = operate(operator, firstNumber, secondNumber);
      calculationArray.splice(0, 3);
      calculationArray.unshift(Number(calculatorScreen.innerText));
    }
  });
}

equalsButton.addEventListener("click", function () {
  firstNumber = Number(calculationArray[0]);
  secondNumber = Number(displayValue);
  displayValue = "";
  calculatorScreen.innerText = operate(operator, firstNumber, secondNumber);
  calculationArray = [];
});

clearButton.addEventListener("click", function () {
  calculatorScreen.innerHTML = 0;
});

backButton.addEventListener("click", function () {
  calculatorScreen.innerHTML = calculatorScreen.innerHTML.replace(/.$/, "");
});

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "x") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "÷") {
    return divide(firstNumber, secondNumber);
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
