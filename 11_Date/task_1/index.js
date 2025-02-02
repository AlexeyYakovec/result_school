/*

День рождения — это знаменательный праздник для каждого человека. 
А когда день рождения у вас? Уверены, что вы помните эту дату. Сколько дней осталось до вашего дня рождения? Вот это уже посложнее.

Сейчас ваша задача состоит в том, чтобы создать функцию getDaysBeforeBirthday(), которая будет возвращать количество дней до следующего дня рождения. 
Данная функция должна принимать 1 параметр nextBirthdayDate, который является экземпляром класса Date и указывает на дату вашего ближайшего дня рождения. 
Год стоит указывать ближайший к текущей дате, а не год вашего рождения.

Также рекомендуется создать вспомогательную функцию convertMsToDays(), которая переводит миллисекунды в дни. Для округления итогового числа используйте Math.round().

*/

function getDaysBeforeBirthday(nextBirthdayDate) {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    const daysBeforeBirthday = Math.round((nextBirthdayDate - today) / oneDay);
    return daysBeforeBirthday;
}

function convertMsToDays(ms) {
    return Math.round(ms / (1000 * 60 * 60 * 24));
}

const nextBirthdayDate = new Date("2022-01-01");

const daysBeforeBirthday = getDaysBeforeBirthday(nextBirthdayDate);

console.log(daysBeforeBirthday);

const msBeforeBirthday = daysBeforeBirthday * 24 * 60 * 60 * 1000;

console.log(convertMsToDays(msBeforeBirthday));

console.log(msBeforeBirthday);

console.log(convertMsToDays(msBeforeBirthday));

console.log(convertMsToDays(msBeforeBirthday));
