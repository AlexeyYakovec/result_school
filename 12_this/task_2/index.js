/*

У вас есть 2 объекта dog и bird, в которых содержится их описание:

const dog = {
   name: 'Чарли',
   type: 'Собака',
   makeSound() {
      return 'Гав-Гав';
   }
}

const bird = {
   name: 'Петя',
   type: 'Воробей',
   makeSound() {
      return 'Чик-чирик';
   }
}
Вам необходимо создать функцию makeDomestic(), которая будет работать с ключевым словом this таким образом:

function makeDomestic(isDomestic) {
   // Твоя реализация
}

makeDomestic.bind(dog, true)(); 
// Вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
// И выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"

makeDomestic.call(bird, false); 
// Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
// И выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"
Она должна выводить в консоль всю информацию о животном в сообщении: «type по имени name говорит sound», где name — имя животного, type — его тип, sound — результат вызова функции makeSound().

Также функция makeDomestic() должна принимать параметр isDomestic. Он является типом данных boolean и показывает, домашнее ли животное или нет (true/false).

Функция makeDomestic() должна возвращать новый объект животного, в котором будут все прошлые параметры (name, type, makeSound()), а также будет добавлен новый параметр isDomestic.

Кроме этого, для обращения к свойствам животного функция makeDomestic() должна использовать только this. Т.е. 
вам разрешено обращаться к свойствам только через this.name либо this.makeSound(), но никак не bird.name либо bird.makeSound().

Вызовите функцию makeDomestic() 3 раза, используя методы bind(), call(), apply(). 
При использовании bind() функция makeDomestic() должна работать с объектом dog, при apply() и call() - с объектом bird. Не забывайте передавать параметр isDomestic в функцию при ее вызове.

*/

function makeDomestic(isDomestic) {
    return {
        name: this.name,
        type: this.type,
        isDomestic,
        makeSound: this.makeSound,
    };
}

makeDomestic.bind(dog, true)();

makeDomestic.call(bird, false);
