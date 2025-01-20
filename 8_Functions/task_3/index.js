/*

Вам необходимо создать функцию getDivisorsCount(), которая будет высчитывать количество делителей для переданного числа. Если он не передан или значение было не числом, то из функции необходимо вернуть NaN.

Также если number меньше нуля либо является не целым (можно проверить при помощи функции Number.isInteger(number)), то выводите в модальное окно при помощи alert() сообщение «number должен быть целым числом и больше нуля!».

Примеры:

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)

*/

function getDivisorsCount(number) {
    if (typeof number !== "number") {
        return NaN;
    }
    if (number < 0 || !Number.isInteger(number)) {
        alert("number должен быть целым числом и больше нуля!");
        return;
    }
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count += 1;
        }
    }
    return count;
}

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
