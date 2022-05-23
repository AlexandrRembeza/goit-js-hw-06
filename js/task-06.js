const inputTextEL = document.querySelector("#validation-input");

inputTextEL.addEventListener("blur", checkValue);
// inputTextEL.addEventListener("focus", removeCheckStyle)

function checkValue(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        inputTextEL.classList.remove("invalid");
        inputTextEL.classList.add("valid");
    } else {
        inputTextEL.classList.remove("valid");
        inputTextEL.classList.add("invalid");
    }
}

// function removeCheckStyle() {
//     inputTextEL.classList.remove("valid", "invalid")
// };