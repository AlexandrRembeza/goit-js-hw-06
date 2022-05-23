const inputRangeEL = document.querySelector("#font-size-control");
const spanEL = document.querySelector("#text");

inputRangeEL.addEventListener("input", changeFontSize)
spanEL.style.fontSize = `${inputRangeEL.value}px`;

function changeFontSize(event) {
    spanEL.style.fontSize = `${event.currentTarget.value}px`;
};