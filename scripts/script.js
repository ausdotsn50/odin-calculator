import { operate } from "./operations.js";

// Root element
const root = document.documentElement;

const calcWidth = 450;
const calcHeight = 600;

const viewHeight = calcHeight * 0.35;
const btnHeight = calcHeight * 0.65;

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
const calculation = document.querySelector('#calculation');
const result = document.querySelector('#result');

const btns = [
    '7', '8', '9', '√', '%',
    '4', '5', '6', 'x', '÷',
    '1', '2', '3', '+', '-',
    '0', '.', '=', 'CE', 'AC',
]

const digits = btns.filter((curr) => curr >= 0);
const operators = [
    '%', 'x', '÷', '+', '-',
];

let a = null, op = null, b = null, res = null;
function writeInCalc(event) {
    event.preventDefault();

    const input = event.target.textContent;
    const len = result.textContent.length;

    // 13 is the cap
    if(len === 13 && (input !== 'AC' && input !== 'CE')) {
        alert('This calculator can only do so much you know...')
    }

    if(input === 'AC') {
        allClear();
    } else if(input === 'CE' && len > 0) {
        result.textContent = result.textContent.slice(0, -1);
    }

    // Adding
    if(len === 0 && (digits.includes(input) || input === '√')) {
        result.textContent += input;
        if(input === '√') {
            op = input;
        }
    }
    else if(len > 0 && len < 13) {
        if(res !== null && op === null && digits.includes(input)) {
            allClear();
            result.textContent += input;
            return;
        }
        
        // Special operator
        if(op === '√') {
            a = result.textContent.slice(1);
            //console.log(a);
        }

        // If lower panel contains something
        if(digits.includes(input) && (a === null || b === null)) {
            result.textContent += input;
        }
        else if(operators.includes(input) && op === null) {
            a = result.textContent;
            op = input;
            calculation.textContent = a + op;
            result.textContent = '';
        }
        else if(input === '=' && a !== null && op !== null) {
            if(op === '√') {
                calculation.textContent = op + a;
                res = (operate(parseInt(a), op, parseInt(b))).toFixed(2);
                result.textContent = res;

                console.log(a, op, b, res);

                a = res;
                op = null;
                b = null;
                return;
            }

            b = result.textContent;

            if(a !== null && op !== null && b !== null) {
                calculation.textContent = a + op + b;
                res = operate(parseInt(a), op, parseInt(b));
                result.textContent = res;

                console.log(a, op, b, res);

                a = res;
                op = null;
                b = null;
            }

        }
    }

    //console.log(len);
}

function allClear() {
    a = null, op = null, b = null, res = null;
    calculation.textContent = '';
    result.textContent = '';
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

