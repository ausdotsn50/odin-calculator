// Root element
const root = document.documentElement;

const calcWidth = 500;
const calcHeight = 600;

const viewHeight = calcHeight * 0.30;
const btnHeight = calcHeight * 0.70;

root.style.setProperty('--calc-width', calcWidth + "px");
root.style.setProperty('--calc-height', calcHeight+ "px");

root.style.setProperty('--view-height', viewHeight+ "px");
root.style.setProperty('--btn-height', btnHeight+ "px");

const calcBody = document.querySelector("#calculator");
