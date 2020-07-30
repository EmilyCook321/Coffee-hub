import "./list.css";
import { createElememt } from "../../utils/elements";

export function createList() {

  const coffees = [
    { name: "Espresso", imgSrc: espressoSrc, imgClass: ".list-item_iccon" },
    { name: "Cappucino", class: ".listItemIcon", imgClass: ".list-item_iccon"  },
    { name: "Macchiato", class: ".listItemIcon", imgClass: ".list-item_iccon" },
    { name: "Mocha", class: ".listItemIcon", imgClass: ".list-item_iccon"  },
    { name: "Latte", class: ".listItemIcon", imgClass: ".list-item_iccon"  },
  ];

  const list = createElememt("ul");

  coffees forEach((coffee) => {
    const coffeeListItem = createCoffeeListItem(coffee)
    list.append(coffeeListItem);
  });


  return list;
}
