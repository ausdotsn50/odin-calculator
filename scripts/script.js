import { operate } from "./operations.js";

// Root element
const root = document.documentElement;

const calcWidth = 450;
const calcHeight = 600;

const viewHeight = calcHeight * 0.30;
const btnHeight = calcHeight * 0.70;

const viewHeaderHeight = viewHeight * 0.30;
const viewScreenHeight = viewHeight * 0.70;

const battWidth = calcWidth * 0.30;

const calcBtnWidth = calcWidth * 0.17;
const calcBtnHeight = btnHeight * 0.15;

const innerLimit = calcWidth - 1;

root.style.setProperty('--calc-width', calcWidth+ 'px');
root.style.setProperty('--calc-height', calcHeight+ 'px');

root.style.setProperty('--view-height', viewHeight+ 'px');
root.style.setProperty('--btn-height', btnHeight+ 'px');

root.style.setProperty('--view-hdr-height', viewHeaderHeight+ 'px');
root.style.setProperty('--view-scrn-height', viewScreenHeight+ 'px');

root.style.setProperty('--batt-width', battWidth+ 'px');

root.style.setProperty('--calc-btn-width', calcBtnWidth+ 'px');
root.style.setProperty('--calc-btn-height', calcBtnHeight+ 'px');

root.style.setProperty('--inner-limit', innerLimit+ 'px');

const buttonContainer = document.querySelector('.btns-cont');

// Reference to calc screen
const result = document.querySelector('#result');
const calculation = document.querySelector('#calculation');

const btns = [
    '7', '8', '9', '√', '%',
    '4', '5', '6', 'x', '÷',
    '1', '2', '3', '+', '-',
    '0', '.', '=', 'CE', 'AC',
]

const digits = btns.filter((curr) => curr >= 0);
const operators = [
    '√', '%', 'x', '÷', '+', '-',
]

let a = null, op = null, b = null, res = null;
function writeInCalc(event) {
    event.preventDefault();

    const input = event.target.textContent;
    const len = calculation.textContent.length;

    // If the calculation is empty, only allow digits
    if(len === 0 && digits.includes(input)) {
        calculation.textContent += input;
    }

    else if(len > 0 && len <= 14) { // If calculation is not empty
        if(a !== null && op !== null && b == null) {
            calculation.textContent = '';
        }

        if(operators.includes(input)) {
            a = calculation.textContent;
            op = input;

            result.textContent = a + op;
            //calculation.textContent = '';
        }

        if(digits.includes(input)) {
            calculation.textContent += input;
            if(a !== null && op !== null) {
                b = calculation.textContent;
                result.textContent = a + op + b;
            }
        }
    }

    if(a !== null && op !== null && b !== null) {
        console.log(a);
        console.log(op);
        console.log(b);

        if(input === '=') {
            res = operate(parseInt(a), op, parseInt(b));
            result.textContent = res;
        }
        else if(input === op) {
            
        }
    }
}

function addButtons() {
    for(let i = 0; i < btns.length; i++) {
        const btnDiv = document.createElement('div');
        btnDiv.textContent = btns[i];

        const btnClassType = btns[i] === 'CE' || btns[i] === 'AC' ? 'dark-calc-btn' : 'calc-btn';

        btnDiv.addEventListener('click', writeInCalc);

        btnDiv.classList.add(btnClassType);
        buttonContainer.appendChild(btnDiv);
    }
}

addButtons();

