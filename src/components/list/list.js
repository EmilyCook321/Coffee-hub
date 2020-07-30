import "./list.css";
import { createElememt } from "../../utils/elements";
import espressoSrc from "../../assets/espresso.svg";
import cappucinoSrc from "../../assets/cappuccino.svg";
import macchiatoSrc from "../../assets/macchiato.svg";
import mochaSrc from "../../assets/mocha.svg";
import latteSrc from "../../assets/latte.svg";
import arrowSrc from "../../assets/right.svg";

export function createList() {

  const coffees = [
    { name: "Espresso", imgSrc: espressoSrc, imgClass: ".list-item_iccon" },
    { name: "Cappucino", class: ".listItemIcon", imgClass: ".list-item_icon"  },
    { name: "Macchiato", class: ".listItemIcon", imgClass: ".list-item_icon" },
    { name: "Mocha", class: ".listItemIcon", imgClass: ".list-item_icon"  },
    { name: "Latte", class: ".listItemIcon", imgClass: ".list-item_icon"  },
  ];

  const list = createElememt("ul");
list.className = "list";

  coffees forEach ((coffee) => {
    const coffeeListItem = createElememt("li");
    const listItem = createElememt("img", {
      src: coffee.imgSrc,
    });
    listItem.append(coffeeImg);
    coffeeImg.className = coffee.imgClass;

    const span = createElememt("span", {innerText: coffee.name});
    listenItem.append(span);

    const arrowIcon = createElememt("img", { src: arrowSrc,
    });

    listItem.append(arrowIcon);

    list.append(listItem);
  });


  return list;
}
