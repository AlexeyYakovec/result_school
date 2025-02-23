/*

Вам дан HTML-код:

<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
Необходимо создать такую же структуру HTML-элемента через JavaScript и добавить итоговые элементы внутрь тега <body>.

Решите задачу 2-мя способами:

Через innerHTML
Через document.createElement()

*/

// Через innerHTML
const formHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>
`;

document.body.innerHTML = formHTML;

// Через document.createElement
const form = document.createElement("form");
form.className = "create-user-form";

const labelName = document.createElement("label");
labelName.textContent = "Имя";

const inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "userName";
inputName.placeholder = "Введите ваше имя";

const labelPassword = document.createElement("label");
labelPassword.textContent = "Пароль";

const inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.name = "password";
inputPassword.placeholder = "Придумайте пароль";

const button = document.createElement("button");
button.type = "submit";
button.textContent = "Подтвердить";

labelName.appendChild(inputName);
labelPassword.appendChild(inputPassword);

form.appendChild(labelName);
form.appendChild(labelPassword);
form.appendChild(button);

document.body.appendChild(form);
