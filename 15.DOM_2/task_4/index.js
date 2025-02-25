/*

Заказчик и команда разработки поздравляют вас с успешной работой на проекте. Вы молодцы! Хорошо себя показали.

Но тут один из разработчиков заболел и больше некому выполнить его задачу. Поэтому вас попросили подменить коллегу.

Вам необходимо реализовать смену темы с темной на светлую и наоборот. Тема должна переключаться при нажатии на кнопку «Tab». Изначально тема светлая.

При смене темы вам необходимо изменить стили для следующих элементов:

Элемент с тегом <body>. Если тема темная, то свойство background должно быть значением #24292E, иначе - initial.
Все элементы по селектору .task-item. Если тема темная, то свойство color должно быть #ffffff, иначе - initial.
Ко всем элементам с тегом button необходимо добавить значение border: 1px solid #ffffff, если тема темная, иначе - border: none.
Для решения данной задачи используйте свойства style у html-элементов.

*/

// Массив задач
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

// Контейнер для задач
const tasksList = document.querySelector(".tasks-list");
const createTaskBlock = document.querySelector(".create-task-block");

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

    // Создаем кнопку удаления
    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
        "task-item__delete-button",
        "default-button",
        "delete-button",
    );
    deleteButton.textContent = "Удалить";

    // Добавляем основной контейнер и кнопку удаления в основной контейнер задачи
    mainContainer.appendChild(mainContent);
    mainContainer.appendChild(deleteButton);

    // Добавляем основной контейнер в элемент задачи
    taskItem.appendChild(mainContainer);

    return taskItem;
}

// Функция для добавления задачи в DOM
function addTaskToDOM(task) {
    const taskElement = createTaskElement(task);
    tasksList.appendChild(taskElement);
}

// Инициализация: добавляем существующие задачи в DOM
tasks.forEach((task) => {
    addTaskToDOM(task);
});

// Создаем модальное окно
const modalOverlay = document.createElement("div");
modalOverlay.classList.add("modal-overlay", "modal-overlay_hidden");

const deleteModal = document.createElement("div");
deleteModal.classList.add("delete-modal");

const modalQuestion = document.createElement("h3");
modalQuestion.classList.add("delete-modal__question");
modalQuestion.textContent = "Вы действительно хотите удалить эту задачу?";

const modalButtons = document.createElement("div");
modalButtons.classList.add("delete-modal__buttons");

const cancelButton = document.createElement("button");
cancelButton.classList.add(
    "delete-modal__button",
    "delete-modal__cancel-button",
);
cancelButton.textContent = "Отмена";

const confirmButton = document.createElement("button");
confirmButton.classList.add(
    "delete-modal__button",
    "delete-modal__confirm-button",
);
confirmButton.textContent = "Удалить";

// Собираем модальное окно
modalButtons.appendChild(cancelButton);
modalButtons.appendChild(confirmButton);
deleteModal.appendChild(modalQuestion);
deleteModal.appendChild(modalButtons);
modalOverlay.appendChild(deleteModal);

// Добавляем модальное окно в body
document.body.appendChild(modalOverlay);

// Переменная для хранения ID задачи, которую нужно удалить
let taskIdToDelete = null;

// Открытие модального окна при клике на кнопку удаления
tasksList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        // Находим ID задачи
        const taskItem = event.target.closest(".task-item");
        taskIdToDelete = taskItem.dataset.taskId;

        // Открываем модальное окно
        modalOverlay.classList.remove("modal-overlay_hidden");
    }
});

// Закрытие модального окна при клике на "Отмена"
cancelButton.addEventListener("click", () => {
    modalOverlay.classList.add("modal-overlay_hidden");
    taskIdToDelete = null;
});

// Удаление задачи при клике на "Удалить"
confirmButton.addEventListener("click", () => {
    if (taskIdToDelete) {
        // Удаляем задачу из массива
        tasks = tasks.filter((task) => task.id !== taskIdToDelete);

        // Удаляем задачу из DOM
        const taskItem = document.querySelector(
            `.task-item[data-task-id="${taskIdToDelete}"]`,
        );
        if (taskItem) {
            taskItem.remove();
        }

        // Закрываем модальное окно
        modalOverlay.classList.add("modal-overlay_hidden");
        taskIdToDelete = null;
    }
});

// Переменная для хранения текущей темы
let isDarkTheme = false;

// Функция для смены темы// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const taskItems = document.querySelectorAll(".task-item");
    const buttons = document.querySelectorAll("button");

    // Переключаем тему
    if (body.style.backgroundColor === "rgb(36, 41, 46)") {
        // Проверяем, темная ли тема
        // Светлая тема
        body.style.backgroundColor = "initial";
        taskItems.forEach((item) => (item.style.color = "initial"));
        buttons.forEach((button) => (button.style.border = "none"));
    } else {
        // Темная тема
        body.style.backgroundColor = "#24292E";
        taskItems.forEach((item) => (item.style.color = "#ffffff"));
        buttons.forEach(
            (button) => (button.style.border = "1px solid #ffffff"),
        );
    }
}

// Находим кнопку переключения темы и добавляем обработчик события
const themeToggleButton = document.querySelector(".theme-toggle-button");
themeToggleButton.addEventListener("click", toggleTheme);
