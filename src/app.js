//связка колтроллеров с апи

import {Progress} from "./progressBar/progress.js";

const host = document.getElementById("progressHost");
const valueInput = document.getElementById("valueInput");
const animateToggle = document.getElementById("animateToggle");
const hiddeToggle = document.getElementById("hiddeToggle");

const progress = new Progress(host, {value:0});

valueInput.addEventListener("input", () => {
  progress.setValue(valueInput.value);
});

animateToggle.addEventListener("change", () => {
  progress.setAnimated(animateToggle.checked);
});

hideToggle.addEventListener("change", () => {
  progress.setHidden(hideToggle.checked);
});