/*

Чтобы успешно завершить все ваши задачи на проекте, осталось выполнить только удаление задач. Для этого имеется кнопка «Удалить». Но иногда пользователи могут случайно нажать на кнопку, и из-за этого удалится задача. В таком случае обычно создаются модальные окна, которые спрашивают пользователя, действительно ли он хочет удалить задачу. Сейчас вам будет необходимо реализовать такое модальное окно.

Стили для модального окна и HTML-шаблон у вас уже имеются. Создайте HTML-элемент модального окна с помощью JavaScript и добавь его внутри тега <body>.

Шаблон модального окна:

<div class="modal-overlay modal-overlay_hidden">
    <div class="delete-modal">
        <h3 class="delete-modal__question">
            Вы действительно хотите удалить эту задачу?
        </h3>
        <div class="delete-modal__buttons">
            <button class="delete-modal__button delete-modal__cancel-button">
                Отмена
            </button>
            <button class="delete-modal__button delete-modal__confirm-button">
                Удалить
            </button>
        </div>
    </div>
</div>
Класс "modal-overlay_hidden" отвечает за открытие и закрытие модального окна. Если оно открыто, то класса "modal-overlay_hidden" нету, если закрыто, то класс "modal-overlay_hidden" присутствует.

Вам необходимо открывать модальное окно после нажатия на любую кнопку «Удалить» около каждой задачи. Повесьте обработчик события «click» на элемент по селектору .tasks-list. Используйте делегирование событий для того, чтобы отлавливать клики на кнопки для удаления задач.

В модальном окне есть 2 кнопки: «Отмена» и «Удалить». «Отмена» закрывает модальное окно, а «Удалить» удаляет задачу из массива tasks и из DOM-дерева и закрывает модальное окно.

Для удаления задачи используйте атрибут data-task-id, который содержит информацию о свойстве id объекта задачи из массива tasks. По данному id вы сможете найти нужную задачу и удалить ее.

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
