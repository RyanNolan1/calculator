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
      console.log(calculationArray)
      firstNumber = calculationArray[0];
      operator = calculationArray[1];
      secondNumber = calculationArray[2];
      operate(operator, firstNumber, secondNumber);
      calculationArray.splice(0,3)
      calculationArray.unshift(calculatorScreen.innerText);
      console.log(calculationArray);
    }
    // operator=
    // if (calculationArray.length === 4) {
    // let calculationString = calculationArray.join(" ");
    // firstNumber = calculationString.slice(0, 1);
    // operator = calculationString.slice(2, 3);
    // secondNumber = calculationString.slice(4, 5);
    // operate(operator, firstNumber, secondNumber);
    // let secondOperator = calculationArray.splice(3, 1)[0];
    // let calculatedNumber = calculatorScreen.innerText;
    // console.log(calculationArray.splice(3,1)[0])
    // console.log(calculatedNumber)
    // console.log(secondOperator);
  });
}

equalsButton.addEventListener("click", function () {
  secondNumber = Number(displayValue);
  displayValue = "";
  operate(operator, firstNumber, secondNumber);
});

clearButton.addEventListener("click", function () {
  calculatorScreen.innerHTML = 0;
});

backButton.addEventListener("click", function () {
  calculatorScreen.innerHTML = calculatorScreen.innerHTML.replace(/.$/, "");
});

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    calculatorScreen.innerText = add(firstNumber, secondNumber);
  } else if (operator === "-") {
    calculatorScreen.innerText = subtract(firstNumber, secondNumber);
  } else if (operator === "x") {
    calculatorScreen.innerText = multiply(firstNumber, secondNumber);
  } else if (operator === "÷") {
    calculatorScreen.innerText = divide(firstNumber, secondNumber);
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
