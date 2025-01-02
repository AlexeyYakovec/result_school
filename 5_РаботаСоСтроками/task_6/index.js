/*
    isNaN() - Используется для проверки вводного значения на NaN
    parseInt() - Используется для преобразования строки в число
*/

let userText = prompt("Введите текст").trim();

const wordFromText = prompt("Введите слово из текста").trim();

const indexOfWord = userText.indexOf(wordFromText);

if (indexOfWord === -1) {
    alert("Такого слова нет");
} else {
    const result = userText.slice(0, indexOfWord);
    alert(`Результат: ${result}`);
}
