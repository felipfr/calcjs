const input = document.getElementById("input");
const resultInput = document.getElementById("result");

function charKey(ev) {
    const value = ev.currentTarget.dataset.value;
    input.value += value;
};

function clear() {
    input.value = "";
    resultInput.value = "";
    input.focus();
};

function keyDown(ev) {
    ev.preventDefault();
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key;
        return;
    }
    if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1);
    }
    if (ev.key === "Enter") {
        calculate();
    }
};

function calculate() {
    resultInput.value = "ERRO";
    resultInput.classList.add("error");
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove("error");
};

export { charKey, clear, keyDown, calculate };