/*

Необходимо посчитать сумму всех чисел в диапазоне от 0 до 100 (либо наоборот, от 100 до 0). В итоге у вас должно получиться значение 5050. 
Сохраните итоговое значение в переменную sum и выведите его на экран при помощи alert().

*/

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
alert(`Сумма чисел от 0 до 100 равна ${sum}`);
