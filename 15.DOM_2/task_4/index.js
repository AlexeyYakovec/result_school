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

// Переменная для хранения текущей темы
let isDarkTheme = false;

// Функция для смены темы
function toggleTheme() {
    isDarkTheme = !isDarkTheme;

    document.body.style.background = isDarkTheme ? "#24292E" : "initial";

    // Изменяем стили для всех элементов с классом .task-item
    const taskItems = document.querySelectorAll(".task-item");
    taskItems.forEach((item) => {
        item.style.color = isDarkTheme ? "#ffffff" : "initial";
    });

    // Изменяем стили для всех кнопок
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.style.border = isDarkTheme ? "1px solid #ffffff" : "none";
    });
}

// Кнопка для смены темы
const themeButton = document.createElement("button");
themeButton.textContent = "Tab";
themeButton.classList.add("theme-button", "default-button");
document.body.appendChild(themeButton);

themeButton.addEventListener("click", toggleTheme);
