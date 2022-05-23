const inputTextEL = document.querySelector("#name-input");
const spanEL = document.querySelector("#name-output");

const valueSpanEL = spanEL.textContent;


inputTextEL.addEventListener("input", changeSpanTextOnInputText);

function changeSpanTextOnInputText(event) {
    if (event.currentTarget.value !== "") {
        return spanEL.textContent = event.currentTarget.value;
    }
    spanEL.textContent = valueSpanEL;
};