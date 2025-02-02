/*

Дан объект footballer, в котором есть некоторая информация о футболисте и действиях, которые он может выполнять:

const footballer = {
   fullName: 'Cristiano Ronaldo',
   attack: () => {
      console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
   },
   scoreGoal(sound) {
      console.log(`${this.fullName} забил гол! Вот это да!`);
      this.celebrate(sound);
   },
   celebrate(sound) {
      console.log(sound);
   },
   goToSubstitution: function(newPlayer) {
      console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
   }
};

const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attack();
score('Сиииии');
substitute('Paulo Dibala');
К сожалению, данный код работает неверно. В некоторых случаях он выводит undefined, а в других - вообще ошибку.

Вам необходимо исправить данный код, используя bind(), call() и apply():

Функцию attack() необходимо исправить при помощи bind() + нужно вспомнить особенность стрелочных функций (нет своего this).
Функцию score() - при помощи call().
Функцию substitute() - при помощи apply().

*/

const footballer = {
    fullName: "Cristiano Ronaldo",
    attack: function () {
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function (newPlayer) {
        console.log(
            `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`,
        );
    },
};

const attack = footballer.attack.bind(footballer);

const score = (sound) => footballer.scoreGoal.call(footballer, sound);

const substitute = (newPlayer) =>
    footballer.goToSubstitution.apply(footballer, [newPlayer]);

// Тестируем исправленные функции
attack();
score("Сиииии");
substitute("Paulo Dibala");
