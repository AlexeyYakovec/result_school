// Файл /src/components/ListItem.js
import { Component } from "../core/Component";

export class ListItem extends Component {
    setup(props) {
        this.state = {
            id: Date.now(),
            date: new Date(),
            amount: props.amount,
        };

        // Создаем корневой элемент
        this.$rootElement = document.createElement("div");
        this.$rootElement.className = "donate-item";

        // Форматируем дату
        const formattedDate = this.state.date.toLocaleString();

        // Отображаем информацию о донате
        this.$rootElement.innerHTML = `
            ${formattedDate} - <b>$${this.state.amount}</b>
            <button class="delete-button">Удалить</button>
        `;

        // Обработчик удаления
        const $deleteButton = this.$rootElement.querySelector(".delete-button");
        $deleteButton.addEventListener("click", this.handleDelete.bind(this));
    }

    // Обработчик удаления доната
    handleDelete() {
        this.props.onDelete();
        this.$rootElement.remove();
    }
}
