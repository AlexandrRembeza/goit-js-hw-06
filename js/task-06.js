const inputTextEL = document.querySelector("#validation-input");

inputTextEL.addEventListener("blur", checkValue);
inputTextEL.addEventListener("focus", removeCheckStyle)

function checkValue(event) {
    console.log(event.currentTarget.value.length)
    event.currentTarget.value.length === 6 ? inputTextEL.classList.add("valid") : inputTextEL.classList.add("invalid");

};

function removeCheckStyle() {
    inputTextEL.classList.remove("valid", "invalid")
};