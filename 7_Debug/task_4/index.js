/*

Вам дан фрагмент кода, который высчитывает сумму элементов массива, возведенных в 3 степень (умноженных на себя 3 раза). 
Задача решена двумя способами: через цикл for и через цикл for...of.

Переменная sum в обоих случаях должна быть одинаковой, но, к сожалению, в коде присутствуют ошибки. 
Найдите их при помощи debugger или console.log() и устраните.

Примечание: массив numbers изменять и дублировать нельзя:

let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] ** 3;
    sum += numbers[i];
} 
console.log(sum); // 1158411

// Через цикл for of
sum = 0;
for (let num of numbers){
    num = num ** 3;
    sum += num;
} 
console.log(sum); // 1003904306910622800
Примечание: Выполните задание и прикрепите ссылку на ответ в форме отправки ответа ниже. После того как наставник примет ваш ответ, здесь будет открыто решение.

*/

let numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    const cube = numbers[i] ** 3;
    sum += cube;
}
console.log("Сумма через for:", sum);

// Через цикл for...of
sum = 0;
for (let num of numbers) {
    const cube = num ** 3;
    sum += cube;
}

console.log("Сумма через for...of:", sum);
