// Файл /src/components/App.js
import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
    setup(props) {
        // Инициализация состояния
        this.state = {
            total: 0,
            donates: [],
        };

        this.$rootElement = document.createElement("div");
        this.$rootElement.className = "app";

        const $totalAmount = document.createElement("h1");
        $totalAmount.className = "total-amount";
        $totalAmount.innerHTML = `Итого: $<span>${this.state.total}</span>`;
        this.$total = $totalAmount.querySelector("span");
        this.$rootElement.appendChild($totalAmount);

        const donateForm = new Form({
            onSubmit: this.onItemCreate.bind(this),
        });
        this.$rootElement.appendChild(donateForm.$rootElement);

        this.donateList = new List();
        this.$rootElement.appendChild(this.donateList.$rootElement);
    }

    onItemCreate(amount) {
        const newDonate = {
            id: Date.now(),
            date: new Date(),
            amount: Number(amount),
        };

        // Обновляем состояние
        this.state.donates.push(newDonate);
        this.state.total += newDonate.amount;

        this.$total.textContent = this.state.total;

        const listItem = new ListItem({
            amount: newDonate.amount,
            date: newDonate.date,
            onDelete: () => this.removeItem(newDonate.id),
        });
        this.donateList.addItem(listItem);
    }

    // Метод для удаления доната
    removeItem(id) {
        const donate = this.state.donates.find((item) => item.id === id);
        if (donate) {
            this.state.total -= donate.amount;
            this.$total.textContent = this.state.total;

            this.state.donates = this.state.donates.filter(
                (item) => item.id !== id,
            );
        }
    }
}
