import { Component } from "../core/Component";

export class Form extends Component {
    setup(props) {
        // Инициализация состояния
        this.state = {
            amount: "",
        };

        this.$rootElement = document.createElement("form");
        this.$rootElement.className = "donate-form";

        const $inputLabel = document.createElement("label");
        $inputLabel.className = "donate-form__input-label";
        $inputLabel.textContent = "Введите сумму в $";

        this.$input = document.createElement("input");
        this.$input.className = "donate-form__donate-input";
        this.$input.type = "number";
        this.$input.name = "amount";
        this.$input.min = 1;
        this.$input.max = 100;
        this.$input.required = true;
        $inputLabel.appendChild(this.$input);

        // Кнопка отправки
        this.$button = document.createElement("button");
        this.$button.className = "donate-form__submit-button";
        this.$button.type = "submit";
        this.$button.textContent = "Задонатить";
        this.$button.disabled = true;

        this.$rootElement.appendChild($inputLabel);
        this.$rootElement.appendChild(this.$button);

        this.$input.addEventListener("input", this.handleInput.bind(this));
        this.$rootElement.addEventListener(
            "submit",
            this.handleSubmit.bind(this),
        );
    }

    // Геттер для проверки валидности суммы
    get isValid() {
        const amount = Number(this.state.amount);
        return amount >= 1 && amount <= 100;
    }

    // Обработчик ввода
    handleInput(event) {
        this.state.amount = event.target.value;
        this.$button.disabled = !this.isValid;
    }

    // Обработчик отправки формы
    handleSubmit(event) {
        event.preventDefault();

        if (this.isValid) {
            const amount = Number(this.state.amount);
            this.props.onSubmit(amount);
            this.state.amount = "";
            this.$input.value = "";
            this.$button.disabled = true;
        }
    }
}
