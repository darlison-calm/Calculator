
// variables to carry out an operation
let currentNumber = "" ;
let previousNumber = "" ;
let operator = "";
const numbers = document.querySelectorAll(".number")
const screen = document.querySelector('.screen')
const operators = document.querySelectorAll('.operator')
const back = document.querySelector('.delete')

function multiply(a, b) {
    return a * b;
}
function divide(a, b){
    return a / b;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function operate(firstNumber, operator, secondNumber) {
    switch(operator) {    
        case "+":
            return add(firstNumber, secondNumber);    
            break;
        case "-":
            return subtract(firstNumber, secondNumber)
            break;
        case "*":
            return multiply(firstNumber, secondNumber);
            break;
        case "/":
            return divide(firstNumber, secondNumber);
            break;
        default:
            return "Invalid operator";         
    }
}

function takeNumber (num) {
    currentNumber += num
}

function takeOperator(opt) {
    operator = opt
    previousNumber = currentNumber
    currentNumber = ""
}

numbers.forEach((button => {
    button.addEventListener("click" , () => {
        takeNumber(button.textContent)
        screen.textContent += button.textContent
    })
})) 

operators.forEach((button) => {
    button.addEventListener("click" , () => {
        takeOperator(button.textContent)
        screen.textContent += button.textContent
        
    })
}); 

back.addEventListener("click" , () => {
    screen.textContent = ''
})








