
let currentNumber = "" ;
let previousNumber = "" ;
let operator = "";
let result = ""
const numbers = document.querySelectorAll(".number")
const screen = document.querySelector('.screen')
const operators = document.querySelectorAll('.operator')
const back = document.querySelector('.delete')
const equal = document.querySelector('.equal')

function multiply(a, b) {
    return result = a * b;
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

function operate(firstNumber, choice, secondNumber) {
  switch (choice) {
    case "+":
      return add(firstNumber, secondNumber);

    case "-":
      return subtract(firstNumber, secondNumber);

    case "*":
      return multiply(firstNumber, secondNumber);

    case "/":
      return divide(firstNumber, secondNumber);

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

function calculate(){
    previousNumber = Number(previousNumber)
    currentNumber = Number(currentNumber)
    result = operate(previousNumber, operator, currentNumber)
    operator = ""
    screen.textContent = result;
    currentNumber = result;
    previousNumber = ""
}

equal.addEventListener("click", calculate)

numbers.forEach((button => {
    button.addEventListener("click" , () => {
        takeNumber(button.textContent)
        screen.textContent += button.textContent
    })
})) 

operators.forEach((button) => {
    button.addEventListener("click" , () => {
        let last_char = screen.textContent.slice(-1)
        if(last_char == "+" || last_char == "-"|| last_char == "*" || last_char == "/") {  
            screen.textContent = (screen.textContent.slice(0, -1)) + button.textContent   
           }
        else {
                screen.textContent += button.textContent
            }

        takeOperator(button.textContent)
           
    })
}); 

back.addEventListener("click" , () => {
    screen.textContent = ''
    operator = ''
    currentNumber = ''
    previousNumber = ''
})








