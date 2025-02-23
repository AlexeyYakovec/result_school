/*

Вы отлично справились с поставленной задачей, и теперь все элементы отрисовываются правильно. Теперь вам хотят предоставить дело посложнее. Необходимо реализовать логику создания новых задач при помощи формы по селектору .create-task-block.

Используйте предыдущий код и повесь обработчик событий submit на форму по селектору .create-task-block. При отправке формы создавайте новую задачу в массиве tasks и в DOM-дереве (внутри тега по селектору .tasks-list). id должен быть для каждой задачи уникальным. Текст для задачи берется из текстового поля по селектору .create-task-block__input.

Подсказка: для получения уникального id можно воспользоваться Date.now().

У вас имеются начальные файлы: ссылка (https://github.com/vmschool/14). Используйте их для разработки логики приложения.

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

// Обработчик события submit для формы
const createTaskForm = document.querySelector(".create-task-block");
createTaskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем значение из текстового поля
    const taskInput = createTaskForm.querySelector(".create-task-block__input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Пожалуйста, введите текст задачи.");
        return;
    }

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
