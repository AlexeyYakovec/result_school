/*

Необходимо создать функцию getSumOfNumbers(). Она будет считать сумму от 0 до переданного числа. Выберите любой из 3 типов при создании функции.

getSumOfNumbers() принимает в себя 2 параметра: number и type.

Параметр number — это число, до которого будет считаться сумма. 
То есть, если было передано число 10, то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + ... + 10). 
Если параметр не передан или значение было не числом, то из функции необходимо вернуть NaN.

Параметр type отвечает за выбор чисел для подсчета суммы. 
Он может быть одним из 3-х значений: "odd", "even" и "". 
Если type равняется "odd", то в сумму должны входить только нечетные числа, "even" - четные числа, пустая строка "" - все числа. По умолчанию параметр type должен быть равен "odd".

Функция getSumOfNumbers() должна возвращать итоговую сумму с помощью return.

Возможные результаты функции getSumOfNumbers():

console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55

*/

function getSumOfNumbers(number, type) {
    if (typeof number !== "number") {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i <= number; i += 1) {
        if (type === "odd" && i % 2 !== 0) {
            sum += i;
        } else if (type === "even" && i % 2 === 0) {
            sum += i;
        } else if (type === "") {
            sum += i;
        }
    }
    return sum;
}

console.log(getSumOfNumbers(10, "odd"));
console.log(getSumOfNumbers(10, "even"));
console.log(getSumOfNumbers(10, ""));
