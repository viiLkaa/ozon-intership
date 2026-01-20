//компонент

import { clampValue, circleLength, valueToDashOffset } from "./mathing.js";

export class Progress {
  constructor(container, options = {}) {
    if (!(container instanceof HTMLElement)) {
      throw new TypeError("Progress: container must be an HTMLElement");
    }

    this.container = container;

    this.value = clampValue(options.value ?? 0);
    this.animated = Boolean(options.animated ?? false);
    this.hidden = Boolean(options.hidden ?? false);

    this.root = document.createElement("div");
    this.root.className = "progress";

    this.size = 160;
    this.strokeWidth = 12;

    const r = (this.size / 2) - (this.strokeWidth / 2);
    const cx = this.size / 2;
    const cy = this.size / 2;

    this.length = circleLength(r);

    this.root.innerHTML = `
      <svg class="progress_svg" viewBox="0 0 ${this.size} ${this.size}" aria-label="Progress">
        <circle class="progress_track" cx="${cx}" cy="${cy}" r="${r}"></circle>
        <circle class="progress_arc" cx="${cx}" cy="${cy}" r="${r}"></circle>
      </svg>
    `;

    this.arcEl = this.root.querySelector(".progress_arc");
    this.arcEl.style.strokeDasharray = `${this.length}`;
    this.arcEl.style.strokeDashoffset = `${valueToDashOffset(this.value, this.length)}`;

    this.container.appendChild(this.root);
    this.applyState();
  }

  setValue(value) {
    this.value = clampValue(value);
    this.render();
  }

  setAnimated(isOn) {
    this.animated = Boolean(isOn);
    this.applyState();
  }

  setHidden(isHidden) {
    this.hidden = Boolean(isHidden);
    this.applyState();
  }

  applyState() {
    this.root.classList.toggle("progress-hidden", this.hidden);
    this.root.classList.toggle("progress-animated", this.animated);
  }

  render() {
    if (!this.arcEl) return;
    this.arcEl.style.strokeDashoffset = `${valueToDashOffset(this.value, this.length)}`;
    this.render();
  }
}
