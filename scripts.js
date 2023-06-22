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
    calculatorScreen.innerText = inputtedValue;
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  const operatorButton = operatorButtons[i];
  operatorButton.addEventListener("click", function () {
    const buttonOperator = operatorButton.textContent;
    calculationArray.push(inputtedValue, buttonOperator);
    inputtedValue = "";

    if (calculationArray.length === 4 ) {
      console.log(calculationArray)
      firstNumber = calculationArray[0];
      operator = calculationArray[1];
      secondNumber = calculationArray[2];
      calculatorScreen.innerText = operate(operator, firstNumber, secondNumber);
      calculationArray.splice(0, 3);
      calculationArray.unshift(calculatorScreen.innerText);
    }
  })
}



  
  
  // for (let i = 0; i < operatorButtons.length; i++) {
    //   const operatorButton = operatorButtons[i];
    //   operatorButton.addEventListener("click", function () {
//     const buttonOperator = operatorButton.textContent;
//     firstNumber = Number(calculatorScreen.innerText);
//     operator = buttonOperator;
//     displayValue = "";
//     calculationArray.push(firstNumber, operator);

equalsButton.addEventListener("click", function () {
  firstNumber = calculationArray[0];
  operator = calculationArray[1]
  secondNumber = inputtedValue;
  calculatorScreen.innerText = operate(operator, firstNumber, secondNumber);
});

// clearButton.addEventListener("click", function () {
//   calculationArray = [];
//   calculatorScreen.innerHTML = 0;
// });

// backButton.addEventListener("click", function () {
//   calculatorScreen.innerHTML = calculatorScreen.innerHTML.replace(/.$/, "");
// });

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") return add(Number(firstNumber), Number(secondNumber));
  if (operator === "-") return subtract(Number(firstNumber), Number(secondNumber));
  if (operator === "x") return multiply(Number(firstNumber), Number(secondNumber));
  if (operator === "÷") return divide(Number(firstNumber), Number(secondNumber));
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

