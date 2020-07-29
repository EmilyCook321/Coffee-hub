import "./details.css";
import { createButton } from "../../components/button/button";
import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";
import { createElement } from "../../utils/elements";
import macchiatoSrc from "../../assets/macciato.svg";

export default { title: "Pages/Details" };

export const basic = () => {
  const main = createElement("main", {
    className: "details",
  });
  //creations/components
  const coffeeTitle = createElement("h2", {
    className: "details__title",
    innerText: "Macchiato",
  });

  const quantitySelector = createElement("");

  //relationships//
  main.append(coffeeTitle);

  return main;
};
