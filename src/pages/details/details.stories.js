import "./details.css";
import { createButton } from "../../components/button/button";
import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";
import { createElement } from "../../utils/elements";
import macchiatoSrc from "../../assets/macciato.svg";
import details from "./details";

export default { title: "Pages/Details" };

export const basic = () => {
  const main = createElement("main", { className: "details" });
  const header = createElement("h2", {
    innerText: "Macchiato",
  });
  header.append(title);
  const img = createElement("img", { src: macchiatoSrc });

  header.append(img);

  const form = createElement("form", { className: details__form });
  const coffeeName = createElement("div", { innerText: "Macchiato" });
  const price = createElement("div", { innerText: "2.80" });
  coffeeName.append(price);

  const coffeeSize = createElement("label", { innerText: "Size" });
  const size = createElement("input");
  coffeeSize.append(size);

  const coffeeSugar = createElement("label", { innerText: "Sugar" });
  const sugar = createElement("imput");
  coffeeSugar.append(sugar);

  const quantitySelector = createQuantitySelector();
  main.append(header);

  form.append(header);

  form.append(coffeeName);
  form.append(quantitySelector);
  form.append(coffeeSize);
  form.append(coffeeSugar);
  form.append(button);

  main.append(form);

  return main;
};

//OWN creations/components
//const coffeeTitle = createElement("h2", {
//className: "details__title",
//innerText: "Macchiato",});
//const quantitySelector = createElement("");
//relationships//
//main.append(coffeeTitle);
