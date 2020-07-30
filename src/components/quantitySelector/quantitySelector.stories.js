//import "./quantitySelector.css";
//import quantitySelector from "./quantitySelector.html";

//export default { title: "Quantity Selector" };
//export const coffeeSelector = () => quantitySelector;

//const quantitySelector = document.createElement("div");
//quantitySelector.className = "quantitySelector";

import minusSrc from "../../assets/minus.svg";
import plusSrc from "../../assets/plus.svg";
import { createElement } from "../../utils/elements";

export const createQuantitySelector = () => {
  const quantitySelector = createElement("div", {
    className: "quantitySelector",
  });

  const plusButton = createElement("button", {
    className: "quantitySelector_plus",
    disabled: true,
  });

  const minusButton = createElement("button", {
    className: "quantitySelector_minus",
    disabled: true,
  });

  const minusImage = document.createElement("img", {
    src: minusSrc,
    alt: "Minus",
  });

  minusButton.append(minusImage);
  const resultElement = createElement("div", {
    className: "quantitySelector__result",
    innerText: "1",
  });

  const plusImage = createElement("img", {
    src: plusSrc,
    alt: "Plus",
  });

  plusButton.append(plusImage);

  quantitySelector.append(minusButton);
  quantitySelector.append(resultElement);
  quantitySelector.append(plusButton);

  minusButton.addEventListener("click", () => {
    const oldResult = Number(resultElement.innerHTML);
    if (oldResult === 2) {
      minusButton.disabled = true;
    }
    resultElement.innerHTML = oldResult - 1;
  });

  plusButton.addEventListener("click", () => {
    const oldResult = Number(resultElement.innerHTML);
    if (oldResult === 1) {
      minusButton.disabled = false;
    }
    resultElement.innerHTML = oldResult + 1;
  });

  return quantitySelector;
};
