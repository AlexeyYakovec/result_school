/*

Последнее, что хочет видеть Алексей на своем сайте - это система оценок работы кофейни. 
Владельцу необходимо знать мнение клиентов, чтобы исправлять недочеты в своей работе.

Для начала вам необходимо создать пустой массив clientsEstimations, в котором будут хранится оценки клиентов кофейни. 
Также создайте функцию askClientToGiveEstimation(), которая должна выводить сообщение: «Как вы оцениваете нашу кофейню от 1 до 10?» через prompt(). 
Конечный результат, который введет пользователь, должен быть типом данных number. 
Если было введено число от 1 до 10, то добавьте эту оценку в массив clientsEstimations, иначе же никаких действий не совершайте.

Для добавления оценок вызовите функцию askClientToGiveEstimation() 5 раз. Рекомендуется это сделать через цикл for.

После того, как оценки будут добавлены, вам необходимо посчитать положительные и отрицательные оценки. 
Положительной оценкой является число больше 5, отрицательной — число, меньшее либо равное 5. 
Выведите через alert() сообщение: «Всего положительных оценок: goodEstimations; 
Всего отрицательных оценок: notGoodEstimations», где goodEstimations — количество положительных оценок, а notGoodEstimations — количество отрицательных оценок.

Условия:

В решение должен быть использован метод массивов filter().

*/

const clientsEstimations = [];

const askClientToGiveEstimation = () => {
    const clientsEstimation = Number(
        prompt("Как вы оцениваете нашу кофейню от 1 до 10?"),
    );

    if (clientsEstimation >= 1 && clientsEstimation <= 10) {
        clientsEstimations.push(clientsEstimation);
    }
};

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(
    (estimation) => estimation > 5,
);

const notGoodEstimations = clientsEstimations.filter(
    (estimation) => estimation <= 5,
);

alert(
    `Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`,
);
