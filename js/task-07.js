const inputRangeEL = document.querySelector("#font-size-control");
const spanEL = document.querySelector("#text");

inputRangeEL.addEventListener("input", changeFontSize)

function changeFontSize(event) {
    spanEL.style.fontSize = `${event.currentTarget.value}px`;
};