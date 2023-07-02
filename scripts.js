const numberButtons = document.querySelectorAll(".number-buttons");
const calculatorScreen = document.getElementById("calculator-screen");
const operatorButtons = document.querySelectorAll(".operator-buttons");
const clearButton = document.getElementById("ac-button");
const equalsButton = document.getElementById("equals-button");
const backButton = document.getElementById("back-button");

let inputtedValue = "";
let calculationArray = [];
let firstNumber = 0;
let operator = "";
let secondNumber = 0;

for (let i = 0; i < numberButtons.length; i++) {
  const numberButton = numberButtons[i];
  numberButton.addEventListener("click", function () {
    const buttonValue = numberButton.textContent;
    inputtedValue += buttonValue;

    let inputtedValueArray = [...inputtedValue];

    let removedDecimalDuplicates = [];

    for (let i = 0; i < inputtedValueArray.length; i++) {
      if (
        inputtedValueArray[i] === "." &&
        removedDecimalDuplicates.includes(".")
      ) {
      } else {
        removedDecimalDuplicates.push(inputtedValueArray[i]);
      }
    }

    inputtedValue = removedDecimalDuplicates.join('');

    calculatorScreen.innerText =  inputtedValue;
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  const operatorButton = operatorButtons[i];
  operatorButton.addEventListener("click", function () {
    const buttonOperator = operatorButton.textContent;
    if (buttonOperator !== "AC" && buttonOperator !== "←") {
      calculationArray.push(inputtedValue, buttonOperator);
      inputtedValue = "";
    }
    if (calculationArray.length === 4) {
      firstNumber = calculationArray[0];
      operator = calculationArray[1];
      secondNumber = calculationArray[2];
      calculatorScreen.innerText = operate(operator, firstNumber, secondNumber);
      calculationArray.splice(0, 3);
      calculationArray.unshift(calculatorScreen.innerText);
    }
  });
}

equalsButton.addEventListener("click", function () {
  firstNumber = calculationArray[0];
  operator = calculationArray[1];
  secondNumber = inputtedValue;
  calculatorScreen.innerText = operate(operator, firstNumber, secondNumber);
});

clearButton.addEventListener("click", function () {
  calculationArray = [];
  calculatorScreen.innerHTML = 0;
  inputtedValue = "";
});

backButton.addEventListener("click", function () {
  let numberRemoved = inputtedValue.replace(/.$/, "");
  inputtedValue = numberRemoved;
  calculatorScreen.innerHTML = numberRemoved;
});

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") return add(Number(firstNumber), Number(secondNumber));
  if (operator === "-")
    return subtract(Number(firstNumber), Number(secondNumber));
  if (operator === "x")
    return multiply(Number(firstNumber), Number(secondNumber));
  if (operator === "÷")
    return divide(Number(firstNumber), Number(secondNumber));
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
