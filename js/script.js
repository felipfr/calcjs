import * as calc from './calc.js';
import { copyToClipboard } from './copy.js';
import { themeSwitcher } from './theme-switcher.js';

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", calc.charKey);
});

document.getElementById("clear").addEventListener("click", calc.clear);
document.querySelector("#input").addEventListener("keydown", calc.keyDown);
document.getElementById("equal").addEventListener("click", calc.calculate);
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard);
document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher);