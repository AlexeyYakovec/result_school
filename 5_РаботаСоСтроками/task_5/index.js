/*
    isNaN() - Используется для проверки вводного значения на NaN
    parseInt() - Используется для преобразования строки в число
*/

let userString = prompt("Введите текст для обрезки").trim();

const startIndex = parseInt(prompt("Введите индекс начала строки"), 10);

const endIndex = parseInt(prompt("Введите индекс конца строки"), 10);

if (isNaN(startIndex) || isNaN(endIndex)) {
    alert("Введены некорректные данные");
} else {
    const result = userString.slice(startIndex, endIndex);
    alert(`Результат: ${result}`);
}
