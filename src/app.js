//связка колтроллеров с апи

import {Progress} from "./progressBar/progress.js";

const host = document.getElementById("progressHost");
const valueInput = document.getElementById("valueInput");
const animateToggle = document.getElementById("animateToggle");
const hideToggle = document.getElementById("hideToggle");

const progress = new Progress(host, {value:0});

valueInput.addEventListener("input", () => {
  let value = valueInput.value;

  //убираю все кроме цифр
  value= value.replace(/[^\d]/g, "");

  if (value ==="")
  {
    valueInput.value = "";
    progress.setValue(0);
    return;
  }

  let numericValue = Number(value);

  //ставлю границы от 0 до 100
  //if (numericValue > 100) numericValue = "none";
  if (numericValue > 100) numericValue = 100;
  if (numericValue < 0) numericValue = 0;

  valueInput.value = String(numericValue);

  progress.setValue(valueInput.value);
});

animateToggle.addEventListener("change", () => {
  progress.setAnimated(animateToggle.checked);
});
hideToggle.addEventListener("change", () => {
  progress.setHidden(hideToggle.checked);
});