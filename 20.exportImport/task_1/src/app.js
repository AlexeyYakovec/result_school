import { getRandomColor } from "./utils.js";
function initApp() {
    console.log("Hello world");

    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = "Изменить цвет страницы";

    document.body.appendChild(button);

    button.addEventListener("click", () => {
        const randomColor = getRandomColor();
        console.log(`randomColor: ${randomColor}`);
        document.body.style.backgroundColor = randomColor;
    });
}

export default initApp;
