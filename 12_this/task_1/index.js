/*

Представьте, что вас как веб-разработчика попросили разработать веб-платформу, которая будет отслеживать прогресс студентов в обучении веб-разработке.

Для начала вам необходимо создать объект student, в котором будут 3 свойства:

stack - массив из строк, где каждая строка - это технология. Изначально массив должен быть равен ['HTML'].
level - тип данных number. level отвечает за текущий уровень студента и изначально равен 1.
improveLevel() - функция, которая сначала увеличивает значение свойства level у студента на единицу. 
Если level равен 2-м, то вам необходимо добавить в конец массива stack значение 'CSS', если 3-м - добавляем в конец stack значение 'JavaScript', 4-м - 'React', 5-ти - 'NodeJS'. 
Если значение level стало больше 5-ти, то вам необходимо вывести в модальном окне через alert() сообщение: “Студент выучил все технологии!”. 
Также функция improveLevel() должна возвращать в самом конце обновленный объект student.

В итоге, значение свойства stack после выполнения кода ниже должно быть равно ["HTML", "CSS", "JavaScript", "React", "NodeJS"]:

student
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
Примечание: цепочка из подряд идущих функций improveLevel() работает так, потому что improveLevel() возвращает объект student, а у объекта student есть метод improveLevel().

Посмотрите на пример:

const student = {
   improveLevel() {
      return this;
   }
};

student
   .improveLevel()
   .improveLevel()
   .improveLevel();

*/

const student = {
    stack: ["HTML"],
    level: 1,
    improveLevel() {
        this.level += 1;
        if (this.level === 2) {
            this.stack.push("CSS");
        } else if (this.level === 3) {
            this.stack.push("JavaScript");
        } else if (this.level === 4) {
            this.stack.push("React");
        } else if (this.level === 5) {
            this.stack.push("NodeJS");
        } else if (this.level > 5) {
            console.log("Студент выучил все технологии!");
        }
        return this;
    },
};

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel();

console.log(student.stack);
