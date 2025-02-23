/*

Вы вместе с командой разработки создаете приложение для контроля задач. Сейчас команда сделала только макет, чтобы приложение было красивым. Вам поручили задачу отрисовать все данные о задачах при помощи JavaScript-кода (способ выберите самостоятельно). У вас имеется массив tasks и HTML-шаблон, по которому необходимо создать элементы для каждой задачи.

Добавьте все HTML-элементы с задачами в элемент по селектору .tasks-list.

HTML-шаблон для задачи:

<div class="task-item" data-task-id="1">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
                <label for="task-1"></label>
            </form>
            <span class="task-item__text">
                Посмотреть новый урок по JavaScript
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button">
            Удалить
        </button>
    </div>
</div>
Массив задач:

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];
Данные об id должны использоваться в data-task-id, в id у input и в for у label. Значение свойства text должно добавляться в тег <span> по селектору .task-item__text.

Примечание: атрибут for в JavaScript-коде пишется как htmlFor.

*/

const tasks = [
    {
        id: "1138465078061",
        completed: false,
        text: "Посмотреть новый урок по JavaScript",
    },
    {
        id: "1138465078062",
        completed: false,
        text: "Выполнить тест после урока",
    },
    {
        id: "1138465078063",
        completed: false,
        text: "Выполнить ДЗ после урока",
    },
];

const tasksList = document.querySelector(".tasks-list");

// Функция для создания HTML-элемента задачи
function createTaskElement(task) {
    // Создаем основной контейнер задачи
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.setAttribute("data-task-id", task.id);

    // Создаем основной контейнер для содержимого задачи
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("task-item__main-container");

    // Создаем контейнер для основного содержимого
    const mainContent = document.createElement("div");
    mainContent.classList.add("task-item__main-content");

    // Создаем форму с чекбоксом
    const checkboxForm = document.createElement("form");
    checkboxForm.classList.add("checkbox-form");

    const checkboxInput = document.createElement("input");
    checkboxInput.classList.add("checkbox-form__checkbox");
    checkboxInput.type = "checkbox";
    checkboxInput.id = `task-${task.id}`;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.htmlFor = `task-${task.id}`;

    // Добавляем чекбокс и лейбл в форму
    checkboxForm.appendChild(checkboxInput);
    checkboxForm.appendChild(checkboxLabel);

    // Создаем текст задачи
    const taskText = document.createElement("span");
    taskText.classList.add("task-item__text");
    taskText.textContent = task.text;

    // Добавляем форму и текст в основной контейнер
    mainContent.appendChild(checkboxForm);
    mainContent.appendChild(taskText);

    // кнопка удаления
    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
        "task-item__delete-button",
        "default-button",
        "delete-button",
    );
    deleteButton.textContent = "Удалить";

    mainContainer.appendChild(mainContent);
    mainContainer.appendChild(deleteButton);

    // Добавляем основной контейнер в элемент задачи
    taskItem.appendChild(mainContainer);

    return taskItem;
}

// Добавляем каждую задачу в контейнер .tasks-list
tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    tasksList.appendChild(taskElement);
});
