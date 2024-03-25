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
    if(currentNumber.length < 12)
        currentNumber += num
}
function roundResult(number) {
    return Math.round(number * 100) / 100
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
        result = roundResult(operate(previousNumber, operator, currentNumber))
        operator = ""
        screen.textContent = result;
        currentNumber = result
        previousNumber = "";
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
        // Check if the button clicked is a decimal point
        if(button.textContent == "."){ 
            //Check if the current number being entered already contains a decimal point
            if (currentNumber.toString().includes("."))
            {
                return //If yes, exit the function to prevent adding another decimal point
            }
        }
        //Check if the screen content is "undefined"
        if(screen.textContent == "undefined") {
            clean() //Whipe out all the data when the user press a buttom
        }
        takeNumber(button.textContent) //Process the number clicked and update the currentNumber variable
        // If the screen content is "0", handle differently
        
        if(screen.textContent.length < 12){
        if(screen.textContent == "0") {
            // If the button clicked is a decimal point, append it to "0"
            if(button.textContent =='.'){
                screen.textContent += button.textContent;
            }
             // If the button clicked is not a decimal point, replace "0" with the button's text content
            else {
                screen.textContent = button.textContent
            }
        }
        // If the screen content is not "0", simply append the button's text content to it
        else {
            screen.textContent += button.textContent
        }
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








