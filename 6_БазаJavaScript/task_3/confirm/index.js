/*

Сейчас вы поработаете с новой функцией confirm(). Она выводит модальное окно с 2-мя кнопками: «OK» и «Cancel». Данная функция идеально подходит для того, чтобы задавать вопросы пользователю. Давайте этим и займемся.

Для начала создайте новую папку под названием «confirm». В эту папке добавьте 2 файла: index.html и index.js. Сделайте базовую разметку HTML и подключите index.jsфайл в index.html.

Сейчас ваша задача состоит в том, чтобы задавать вопросы с помощью confirm() и выводить ответы через alert(). То есть сначала идет вопрос, а затем, после нажатия одной из кнопок («OK» либо «Cancel»), выводится ответ.

Синтаксис функции confirm() выглядит следующим образом:

confirm('Ваш текст');
Используйте данные вопросы:

JavaScript появился в 1995 году?
Спецификация JavaScript называется ECMAScript?
JavaScript был создан за 1 месяц?
В случае, если ответ на вопрос утвердителен, то выводите в alert() строку: «Верно», иначе выведите правильный ответ.

Откройте index.html файл в браузере и посмотрите на свой результат.

*/

// const questions = [
//     {
//         question: "JavaScript появился в 1995 году?",
//         answer: true,
//     },
//     {
//         question: "Спецификация JavaScript называется ECMAScript?",
//         answer: true,
//     },
//     {
//         question: "JavaScript был создан за 1 месяц?",
//         answer: false,
//     },
// ];

// const question = "JavaScript появился в 1995 году?";

// const secondQuestion = "Спецификация JavaScript называется ECMAScript?";

// const thirdQuestion = "JavaScript был создан за 1 месяц?";

// const askQuestion = (question) => {
//     const userResponse = confirm(question.question);

//     if (userResponse === question.question) {
//         alert("Верно");
//     } else {
//         alert("Неверно");
//     }
// };

// askQuestion(questions[0]);
// askQuestion(questions[1]);
// askQuestion(questions[2]);

console.log("" ?? "Done");
