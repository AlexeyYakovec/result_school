/*

Молодцы! Вы справились с задачей и отдали ее на код-ревью старшему разработчику. Но старший разработчик обнаружил, что не нужно отправлять форму, если значение пустое либо задача с таким же названием уже существует. Поэтому вас просят добавить валидацию в ваш код.

Для блока с ошибкой создавай тег <span> по селектору .error-message-block. Внутрь данного тега будет помещаться текст с ошибкой.

Если форма была отправлена с пустым полем, то отобразите ошибку: «Название задачи не должно быть пустым», добавив блок с ошибкой в форму по селектору .create-task-block. Если же задача с введенным в поле названием уже существует, то отображайте ошибку: «Задача с таким названием уже существует.»

Если при отправке формы ошибок не было найдено, то удалите блок с ошибкой, если он существует в DOM, и создайте новую задачу в списке.

У вас имеются начальные файлы: ссылка. Используйте их для разработки логики приложения.

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

// Функция для отображения ошибки
function showError(message) {
    // Удаляем существующее сообщение об ошибке, если оно есть
    const existingError = document.querySelector(".error-message-block");
    if (existingError) {
        existingError.remove();
    }

    // Создаем новый блок с ошибкой
    const errorBlock = document.createElement("span");
    errorBlock.classList.add("error-message-block");
    errorBlock.textContent = message;

    // Добавляем блок с ошибкой в форму
    const form = document.querySelector(".create-task-block");
    form.appendChild(errorBlock);
}

// Функция для удаления ошибки
function removeError() {
    const existingError = document.querySelector(".error-message-block");
    if (existingError) {
        existingError.remove();
    }
}

// Обработчик события submit для формы
const createTaskForm = document.querySelector(".create-task-block");
createTaskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем значение из текстового поля
    const taskInput = createTaskForm.querySelector(".create-task-block__input");
    const taskText = taskInput.value.trim();

    // Проверка на пустое поле
    if (taskText === "") {
        showError("Название задачи не должно быть пустым");
        return;
    }

    // Проверка на существование задачи с таким же названием
    const isTaskExists = tasks.some((task) => task.text === taskText);
    if (isTaskExists) {
        showError("Задача с таким названием уже существует");
        return;
    }

    // Если ошибок нет, удаляем блок с ошибкой
    removeError();

    // Создаем новую задачу
    const newTask = {
        id: Date.now().toString(), // Уникальный ID
        completed: false,
        text: taskText,
    };

    // Добавляем задачу в массив
    tasks.push(newTask);

    // Добавляем задачу в DOM
    addTaskToDOM(newTask);

    // Очищаем поле ввода
    taskInput.value = "";
});
