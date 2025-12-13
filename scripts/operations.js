// Evaluate operate on equal or on second operator
function clear(container) {

}

function backspace(container) {

}

function operate(a, op, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
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

export { operate };