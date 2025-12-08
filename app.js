/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

let firstNumber = null;
let secondNumber = null;
let operation = null;

/*------------------------ Cached Element References ------------------------*/

let numbers = document.querySelectorAll('.number');

let operationButtons = document.querySelectorAll('.operation');

let addButton = document.querySelector('#addition');

let subtractButton = document.querySelector('#subtract');

let multiplyButton = document.querySelector('#multiply');

let divideButton = document.querySelector('#divide');

let equalsButton = document.querySelector('#equals');

let clearButton = document.querySelector('#clear');

let totalDisplay = document.querySelector('.display');

totalDisplay.innerText = 0;


/*-------------------------------- Functions --------------------------------*/

const add = () => {
    return firstNumber + secondNumber;
};

const subtract = () => {
    return firstNumber - secondNumber;
};

const multiply = () => {
    return firstNumber * secondNumber;
};

const divide = () => {
    return firstNumber / secondNumber;
};

const calculation = () => {
    let total;
    if (operation === 'addition') {
        total = add();
    }
    if (operation === 'subtract') {
        total = subtract();
    } 
    if (operation === 'multiply') {
        total = multiply();
    }
    if (operation === 'divide') {
        total = divide();
    } 
    totalDisplay.innerHTML = total;
};

const clickOperation = (event) => {
    firstNumber = parseInt(totalDisplay.innerText);
    operation = event.target.id;
    totalDisplay.innerText = 0;
};

const clickEqualsButton = () => {
    secondNumber = parseInt(totalDisplay.innerText);
    calculation();
};

const clickClearButton = () => {
    totalDisplay.innerText = 0;
    firstNumber = null;
    secondNumber = null;
    operation = null;
};

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        if(totalDisplay.innerText === "0") {
           totalDisplay.innerText = event.target.innerText;
    } else {
        totalDisplay.innerText += event.target.innerText;
}
});
});

operationButtons.forEach((operation) => {
    operation.addEventListener('click', clickOperation);
});

equalsButton.addEventListener('click', clickEqualsButton);

clearButton.addEventListener('click', clickClearButton);