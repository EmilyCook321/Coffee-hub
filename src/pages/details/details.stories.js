import "./details.css";
import { createElement } from "../../utils/elements";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  const main = createElement("main", {
    className: "details",
  });
//creations/components
  const coffeeTitle = createElement("h2", {
    className: "details__title",
    innerText: "Macchiato",
  });

  const quantitySelector = createElement("")

  
  //relationships//
  main.append(coffeeTitle);



  return main;
};
