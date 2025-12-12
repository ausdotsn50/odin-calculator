// Root element
const root = document.documentElement;

const calcWidth = 500;
const calcHeight = 600;

const viewHeight = calcHeight * 0.30;
const btnHeight = calcHeight * 0.70;

const viewHeaderHeight = viewHeight * 0.15;
const viewScreenHeight = viewHeight * 0.85;

const battWidth = calcWidth * 0.30;

const calcBtnWidth = calcWidth * 0.17;
const calcBtnHeight = btnHeight * 0.17;

root.style.setProperty('--calc-width', calcWidth+ 'px');
root.style.setProperty('--calc-height', calcHeight+ 'px');

root.style.setProperty('--view-height', viewHeight+ 'px');
root.style.setProperty('--btn-height', btnHeight+ 'px');

root.style.setProperty('--view-hdr-height', viewHeaderHeight+ 'px');
root.style.setProperty('--view-scrn-height', viewScreenHeight+ 'px');

root.style.setProperty('--batt-width', battWidth+ 'px');

root.style.setProperty('--calc-btn-width', calcBtnWidth+ 'px');
root.style.setProperty('--calc-btn-height', calcBtnHeight+ 'px');

const buttonContainer = document.querySelector('.btns-cont');
//const calcBody = document.querySelector('#calculator');

const btns = [
    '7', '8', '9', '√', '%',
    '4', '5', '6', 'x', '÷',
    '1', '2', '3', '+', '-',
    '0', '.', '=', 'CE', 'AC',
]

function addButtons() {
    for(let i = 0; i < btns.length; i++) {
        const btnDiv = document.createElement('div');
        btnDiv.textContent = btns[i];

        const btnClassType = btns[i] === 'CE' || btns[i] === 'AC' ? 'dark-calc-btn' : 'calc-btn';
        
        btnDiv.classList.add(btnClassType);
        buttonContainer.appendChild(btnDiv);
    }
}

addButtons();