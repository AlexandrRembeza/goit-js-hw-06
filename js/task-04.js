const buttonMinusEL = document.querySelector('button[data-action="decrement"]');
const buttonPlusEL = document.querySelector('button[data-action="increment"]');
const amountEL = document.querySelector("#value");

let counterValue = 0;

buttonMinusEL.addEventListener("click", amountMinus);
buttonPlusEL.addEventListener("click", amountPlus);

function amountPlus() {
    amountEL.textContent = counterValue += 1;
};

function amountMinus() {
    amountEL.textContent = counterValue -= 1;
};




