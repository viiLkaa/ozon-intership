//компонент

import { clampValue } from "./mathing.js";

export class Progress{
    constructor(container, options = {})
    {
        this.container = container;
        this.value = clampValue(options.value ?? 0);
        this.animated = Boolean(options.animated ?? false);
        this.hidden = Boolean(options.hidden ?? false);

        this.root = document.createElement("div");
        this.root.className = "progress";
        this.container.appendChild(this.root);

        this.render();
        this.applyState();
    }

    setValue(value){
        this.value = clampValue(value);
        this.render();
    }
    setHidden(isHidden){
        this.hidden = Boolean(isHidden);
        this.applyState();
    }
    setAnimated(isAnimated){
        this.animated = Boolean(isAnimated)
        this.applyState()
    }

    applyState(){
        this.root.classList.toggle("progress-animated", this.animated);
        this.root.classList.toggle("progress-hidden", this.hidden);
    }

    render(){
        this.root.textContent = `Progress: ${this.value}%`;
    }
}
