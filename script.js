let currentNumber = "" ;
let previousNumber = "" ;
let operator = "";
let result = ""

const numbers = document.querySelectorAll(".number")
const screen = document.querySelector('.screen')
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.delete')
const equal = document.querySelector('.equal')
function multiply(a, b) {
    return result = a * b;
}
function divide(a, b){
    if(b == 0) return "undefined"
    
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
    if(currentNumber != ""){
        operator = opt
        previousNumber = currentNumber
        currentNumber = ""
    }
    else {
        operator = opt
    }
}
function calculate(){
    if(operator != "" && currentNumber!= ""){
        previousNumber = Number(previousNumber)
        currentNumber = Number(currentNumber)
        result = operate(previousNumber, operator, currentNumber)
        operator = ""
        screen.textContent = result;
        currentNumber = result;
        previousNumber = ""
    }
}
function clean() {
    screen.textContent = '0'
    operator = ''
    currentNumber = ''
    previousNumber = ''
}
equal.addEventListener("click", calculate)

numbers.forEach((button => {
    button.addEventListener("click" , () => {
        if(screen.textContent == "undefined") {
            clean()
        }
        takeNumber(button.textContent)
        if(screen.textContent == "0") {
            if(button.textContent =='.'){
                screen.textContent += button.textContent;
            }
            else {
                screen.textContent = button.textContent
            }
        }
        else {
            screen.textContent += button.textContent
        }   
    })
})) 

operators.forEach((button) => {
    button.addEventListener("click" , () => {
        if(screen.textContent == "undefined"){
            clean()
        }     
        if(operator!= "" && currentNumber != ""){
            calculate()
        }  
        let last_char = screen.textContent.slice(-1)
        if(last_char == "+" || last_char == "-"|| last_char == "*" || last_char == "/") {  
            screen.textContent = (screen.textContent.slice(0, -1)) + button.textContent   
            takeOperator(button.textContent)
           }
        else {      
                screen.textContent += button.textContent
                takeOperator(button.textContent)
            }

    })
}); 
clear.addEventListener("click" , clean)








