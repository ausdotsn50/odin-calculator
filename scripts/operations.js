// Evaluate operate on equal or on second operator
function operate(a, op, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        case '√':
            return sqrt(a);
        case '%':
            return percentage(a);
        default:
            break;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? 'Math Error' : a / b;
}

function sqrt(a) {
    return Math.sqrt(a);
}

function percentage(a) {
    return a / 100;
}

export { operate };