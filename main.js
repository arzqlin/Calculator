const numBtns = document.querySelectorAll(".numBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn")
// current input string, pending number
var currentString = "";

var firstNumber = null;
var secondNumber = null;
var operator = null;

numBtns.forEach(element => {
    element.addEventListener("click", storeDigit);
});

operatorBtns.forEach(element => {
    element.addEventListener("click", storeOperator);
})

// add this digit to the currentString and display 
function storeDigit(e){
    currentString = currentString + e.target.value;
    getDisplay();
}

// store to operator variable
// if firstNumber is null, 
//      push currentString to firstNumber
//      put cureent operator to operator
// if firstNumber is not null and currentString is null
//      user is choosing a new operator
//      replace current operator with new operator
// if firstNumber is not null and currentString is not null,
//      push currentString to secondNumber
//      clear currentString
//      calculate and put answer into firstNumber
//      put current operator choice to operator

function storeOperator(e){
    if (firstNumber == null){
        firstNumber = Number.parseFloat(currentString);
        currentString = "";
        operator = e.target.value;
    } else if (currentString == ""){
        operator = e.target.value;
    } else {
        secondNumber = Number.parseFloat(currentString);
        currentString = "";
        firstNumber = operate(firstNumber, secondNumber, operator);
        secondNumber = null;
        operator = e.target.value;
    }
    getDisplay();
}

function getDisplay(){
    var currentDisplay = "";
    console.log(firstNumber, operator);
    if (firstNumber != null) {
        currentDisplay += firstNumber.toString();
    }
    if (operator != null){
        currentDisplay += operator;
    }
    if (secondNumber != null) {
        currentDisplay += secondNumber.toString();
    }
    currentDisplay += currentString;
    document.getElementById("display").innerHTML = currentDisplay;
}

function operate(firstNumber, secondNumber, operator){
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    }
    if (operator == "-") {
        return subtract(firstNumber, secondNumber);
    }
    if (operator == "*") {
        return multiply(firstNumber, secondNumber);
    }
    if (operator == "/") {
        return divide(firstNumber, secondNumber);
    }
}

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber == 0){
        alert("you can't divide by 0!")
        return null;
    } else {
        return firstNumber/secondNumber;
    }
}
