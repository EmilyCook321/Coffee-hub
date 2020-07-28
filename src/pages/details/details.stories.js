import { useEffect } from "@storybook/client-api";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  useEffect(() => {
    const button = document.querySelector(".btn");

    button.addEventListener("click", () => {
      alert(button.innerHTML);
      button.innerHTML = "9000";
    });
  });

  return '<button class="btn">Hallo Fische</button>';
};


/* 
Calls internal alert function 
*/
//Calls alert internal function
//const message = "Hello Fishy";
//message = "Fish Ahoi";

//alert ("Hello");

//const numberOfStudents = 15;
//const message = ´Hello ${numberOfStudentsFishes}´ ;
//alert(message);

//export default {
//title: "Page/Details",};

//export const basic = () => {
//return (<button class="btn">Hallo Fische/button>"};
//};

//export const basic = () => {
//useEffect (() => {alert("BUTTON!!")}

//return ‘<button class=“btn”>Hallo FISCHEN</button>’;};
