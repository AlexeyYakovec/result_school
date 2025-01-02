document.addEventListener("DOMContentLoaded", () => {
    const userAnswer = prompt("Введите ваш ответ");
    const userAnswer2 = prompt("Сколько вам лет ?");
    let userName = userAnswer;
    let userAge = userAnswer2;

    alert(`Вас Зовут ${userName} и вам ${userAge} лет`);
});
