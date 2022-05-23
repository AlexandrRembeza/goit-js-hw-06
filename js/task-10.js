const inputNumberEL = document.querySelector('input[type="number"]');
const btnCreateEL = document.querySelector('button[data-create]');
const btnDestroyEL = document.querySelector('button[data-destroy]');
const divBoxesEL = document.querySelector("#boxes");
let divAmount = 0;

inputNumberEL.addEventListener("input", createDivHowInputNumber);
btnCreateEL.addEventListener("click", createDivs);
btnDestroyEL.addEventListener("click", destroyDivs);

function createDivHowInputNumber(event) {
  console.log(event.currentTarget.value);
  divAmount = event.currentTarget.value;
};

function createDivs() {
  let width = 30;
  let height = 30;
  const divsArray = [];


  for (let i = 0; i < divAmount; i += 1) {
    const divElem = document.createElement("div");
    divElem.style.width = `${width}px`;
    divElem.style.height = `${height}px`;
    divElem.style.backgroundColor = getRandomHexColor();

    divsArray.push(divElem);

    width += 10;
    height += 10;
  };

  divBoxesEL.append(...divsArray);
};

function destroyDivs() {
  divBoxesEL.innerHTML = "";
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
