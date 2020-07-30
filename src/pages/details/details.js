import "./details.css";
import macchiatoSrc from "../../assets/macciato.svg";
import { createButton } from "../../components/button/button";
import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";
import { createElement } from "../../utils/elements";
//add this component!!
import { createSizeSelector } from "../../components/sizeSelector";

export const createForm = () => {
  const coffeName = createElement("div", { innerText: "Macchiato" });
  const price = createElement("div", { innerText: "$2.80" });
  coffeName.append(price);
};
