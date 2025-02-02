/*

Ваша компания создает внутренний продукт для облегчения контроля за ростом своих разработчиков. Вам поручили задачу реализовать такой продукт.

Для начала вам необходимо создать класс Developer, конструктор которого будет принимать 3 параметра:

fullName — имя разработчика
age — возраст разработчика
position- текущая позиция разработчика в компании (например, Junior, Middle, Senior)
Инициализируйте все параметры при помощи this. Также создайте внутри конструктора поле technologies, которое по умолчанию будет равно пустому массиву.

Кроме этого, в классе Developer вам необходимо создать 2 метода:

code — метод, у которого тело изначально пустое (в фигурных скобках ничего нет).
learnNewTechnologies() - данный метод принимает в себя 1 параметр technology, который должен добавляться в конец массива technologies.
После проделанных действий у вас должен получиться шаблон Developer, благодаря которому вы будете создавать дочерние классы.

Вам сейчас необходимо создать 3 дочерних класса от класса Developer:

JuniorDeveloper. Конструктор данного класса принимает 2 параметра: fullName и age. Вызовите конструктор родительского класса и передайте туда эти 2 параметра. 
В качестве 3-го у нас выступает position. Вам необходимо его указать по умолчанию. Напишите значение "Junior" в качестве 3-го параметра вызова родительского конструктора. 
Кроме этого, необходимо переопределить метод code(), чтобы он выводил в консоль строку: “Junior разработчик пишет код...”. 
Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript'.
MiddleDeveloper. Проделайте ту же самую работу в конструкторе, что и в JuniorDeveloper. 

Только на место position передавайте значение "Middle". Метод code() у класса MiddleDeveloper должен выводить в консоль строку: “Middle-разработчик пишет код...”. 
Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’.

SeniorDeveloper. Проделайте ту же самую работу в конструкторе, что и в JuniorDeveloper. 
Только на место position передавайте значение "Senior". Метод code() у класса SeniorDeveloper должен выводить в консоль строку: “Senior-разработчик пишет код...”. 
Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’, ‘NodeJS’.

Примечание: когда вы переопределите метод code() в дочерних классах, то вы используете принцип Полиморфизм.

Тестируйте написанные классы с помощью этого кода:

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

seniorDeveloper.learnNewTechnologies('Docker');

console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); 
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies); 
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); 
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']
Примечание: Выполните задание и прикрепите ссылку на ответ в форме отправки ответа ниже. После того как наставник примет ваш ответ, здесь будет открыто решение.

*/

class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }

    code() {}

    learnNewTechnologies(technology) {
        this.technologies.push(technology);
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, "Junior");
        this.technologies = ["HTML", "CSS", "JavaScript"];
    }

    code() {
        console.log("Junior разработчик пишет код...");
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, "Middle");
        this.technologies = ["HTML", "CSS", "JavaScript", "React"];
    }

    code() {
        console.log("Middle разработчик пишет код...");
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, "Senior");
        this.technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
    }

    code() {
        console.log("Senior разработчик пишет код...");
    }
}

// Тестирование
const juniorDeveloper = new JuniorDeveloper("Анастасия", 20);
const middleDeveloper = new MiddleDeveloper("Игорь", 25);
const seniorDeveloper = new SeniorDeveloper("Максим", 30);

juniorDeveloper.code();
middleDeveloper.code();
seniorDeveloper.code();

seniorDeveloper.learnNewTechnologies("Docker");

console.log(
    juniorDeveloper.fullName,
    juniorDeveloper.age,
    juniorDeveloper.position,
    juniorDeveloper.technologies,
);

console.log(
    middleDeveloper.fullName,
    middleDeveloper.age,
    middleDeveloper.position,
    middleDeveloper.technologies,
);

console.log(
    seniorDeveloper.fullName,
    seniorDeveloper.age,
    seniorDeveloper.position,
    seniorDeveloper.technologies,
);
