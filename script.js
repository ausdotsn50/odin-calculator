// Root element
const root = document.documentElement;

const calcWidth = 500;
const calcHeight = 600;

const viewHeight = calcHeight * 0.30;
const btnHeight = calcHeight * 0.70;

const viewHeaderHeight = viewHeight * 0.20;
const viewScreenHeight = viewHeight * 0.80;

const battWidth = calcWidth * 0.30;

root.style.setProperty('--calc-width', calcWidth+ "px");
root.style.setProperty('--calc-height', calcHeight+ "px");

root.style.setProperty('--view-height', viewHeight+ "px");
root.style.setProperty('--btn-height', btnHeight+ "px");

root.style.setProperty('--view-hdr-height', viewHeaderHeight+ "px");
root.style.setProperty('--view-scrn-height', viewScreenHeight+ "px");

root.style.setProperty('--batt-width', battWidth+ "px");

const calcBody = document.querySelector("#calculator");
