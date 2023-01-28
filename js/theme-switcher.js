export function themeSwitcher() {
    const main = document.querySelector("main");
    const root = document.querySelector(":root");
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f1f5f9");
        root.style.setProperty("--border-color", "#aaa");
        root.style.setProperty("--font-color", "#000000");
        root.style.setProperty("--primary-color", "#9a180c");
        root.style.setProperty("--error-color", "#8d4949");
        main.dataset.theme = "light";
    } else {
        root.style.setProperty("--bg-color", "#000000");
        root.style.setProperty("--border-color", "#666");
        root.style.setProperty("--font-color", "#f1f5f9");
        root.style.setProperty("--primary-color", "#e80f0f");
        main.dataset.theme = "dark";
    };
};