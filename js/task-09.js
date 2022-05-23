const btnForChangeBodyBgColorEL = document.querySelector(".change-color");
const spanColorNameEL = document.querySelector(".color");

btnForChangeBodyBgColorEL.addEventListener("click", changeBodyBgColor)

function changeBodyBgColor() {
  spanColorNameEL.textContent = getRandomHexColor();
  document.body.style.backgroundColor = spanColorNameEL.textContent;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
