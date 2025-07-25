function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function percent(num) {
    return num * .01
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return subtract(num1, num2)
    } else if (operator === 'x') {
        return multiply(num1, num2)
    } else if (operator === '÷') {
        return divide(num1, num2)
    } else if (operator === '%') {
        return percent(num1)
    }
}

let num1 = 0;
let num2 = 0;
let operator = '';
let currentInput = '';
let topInput = '';
let operatorSymbols = ['+', '-', 'x', '÷']

const topOutput = document.querySelector('div.output > div.top')
const bottomOutput = document.querySelector('div.output > div.bottom')
const buttons = document.querySelectorAll('.section > button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!isNaN(button.textContent)) {
            currentInput += button.textContent;
            bottomOutput.textContent = currentInput
        } else if (operatorSymbols.includes(button.textContent)) {
            if (currentInput === '') {
                num1 = 0;
            } else if (operator && currentInput !== '') {
                num2 = Number(currentInput);
                const total = operate(operator, num1, num2);
                num1 = total;
                operator = button.textContent;
                currentInput = '';
                topInput = `${total} ${operator}`;
                topOutput.textContent = topInput;
                bottomOutput.textContent = '0';
                return;
            } else {
                num1 = Number(currentInput);
            }

            operator = button.textContent;
            topInput = `${num1} ${operator}`;
            currentInput = '';
            topOutput.textContent = topInput;
            bottomOutput.textContent = '0';
        } else if (button.textContent === '=') {
            if (operator && currentInput != '') {
                num2 = Number(currentInput)

                topInput = `${topInput} ${bottomOutput.textContent} =`
                topOutput.textContent = topInput

                const total = operate(operator, num1, num2)
                bottomOutput.textContent = total
                currentInput = ''
                num1 = total
                operator = ''
            }
        } else if (button.textContent === 'AC') {
            num1 = 0
            num2 = 0
            operator = ''
            currentInput = ''
            topInput = ''
            topOutput.textContent = ''
            bottomOutput.textContent = '0'
        } else if (button.textContent === 'CE') {
            currentInput = currentInput.slice(0, -1)
            bottomOutput.textContent = currentInput
            if (bottomOutput.textContent === '') {
                bottomOutput.textContent = '0'
            } 
        } else if (button.textContent === '.') {
            if (!currentInput.includes('.')) {
                currentInput += button.textContent;
                bottomOutput.textContent = currentInput
            }
        } else if (button.textContent === '%') {
            num1 = Number(currentInput)
            operator = button.textContent
            const total = operate(operator, num1)
            console.log(total)
            bottomOutput.textContent = total
            currentInput = ''
            num1 = total
            operator = ''
        }
    })
})