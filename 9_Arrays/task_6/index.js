/*

Вам дан массив чисел:

const numbers = [10, 4, 100, -5, 54, 2];
Необходимо посчитать сумму кубов всех чисел в массиве. Например, для массива [1, 5, 9] должен быть следующий результат: 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

Решите данную задачу 4-мя способами:

Через цикл for
Через цикл for...of
Через метод forEach()
Через метод reduce()
Для данного массива numbers сумма кубов должна равняться 1158411.

Примечание: Выполните задание и прикрепите ссылку на ответ в форме отправки ответа ниже. После того как наставник примет ваш ответ, здесь будет открыто решение.

*/

const numbers = [10, 4, 100, -5, 54, 2];

// Через цикл for
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i] ** 3;
}
console.log(sum);

// Через цикл for...of
sum = 0;
for (const number of numbers) {
    sum += number ** 3;
}
console.log(sum);

// Через метод forEach()
sum = 0;
numbers.forEach((number) => {
    sum += number ** 3;
});
console.log(sum);

// Через метод reduce()
sum = numbers.reduce((acc, number) => acc + number ** 3, 0);
console.log(sum);
