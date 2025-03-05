// Файл /src/components/List.js
import { Component } from "../core/Component";

export class List extends Component {
    setup() {
        this.$rootElement = document.createElement("div");
        this.$rootElement.className = "donates-container";

        const $title = document.createElement("h2");
        $title.className = "donates-container__title";
        $title.textContent = "Список донатов";
        this.$rootElement.appendChild($title);

        this.$listContainer = document.createElement("div");
        this.$listContainer.className = "donates-container__donates";
        this.$rootElement.appendChild(this.$listContainer);
    }

    // Метод для добавления нового доната
    addItem(item) {
        this.$listContainer.appendChild(item.$rootElement);
    }
}
