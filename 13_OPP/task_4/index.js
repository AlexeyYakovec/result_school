/*

В прошлом задании вы создали словарь. Заказчик доволен проделанной работой и команда разработки тоже. 
Так как вы уже хорошо разобрались с технологией словаря, то вас попросили реализовать еще один словарь. Заказчик хочет создать новую категорию слов “Сложные слова”.

Используйте код, написанный в прошлом задании. Вам необходимо создать дочерний класс HardWordsDictionary от класса Dictionary. 
Конструктор у HardWordsDictionary принимает в себя также параметр name и вызывает конструктор родительского класса.

Примечание: если конструктор только вызывает родительский конструктор со всеми переданными параметрами, то в дочернем классе его можно не реализовывать, 
автоматически будет вызываться родительский (ссылка на документацию).

Все методы, которые есть в Dictionary, должны остаться без изменений в HardWordsDictionary, кроме одного. 
Вам необходимо переопределить метод add(), который должен работать по той же логике, что и add() у Dictionary, только объект слова должен выглядеть следующим образом:

{
   word: 'word',
   description: 'description',
   isDifficult: true,
}
Для теста класса HardWordsDictionary используйте данный код:

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без 
специальной подготовки, обладая только поверхностными знаниями.');
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое 
значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
    
hardWordsDictionary.remove('неологизм');
    
hardWordsDictionary.showAllWords();
    
// дилетант - Тот, кто занимается наукой или искусством // без специальной подготовки, обладая только поверхностными знаниями.// квант - Неделимая часть какой-либо величины в физике.

*/

class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }
    add(word, description) {
        if (this.words[word] === undefined) {
            this.words[word] = { word, description };
        }
        return this.words;
    }
    remove(word) {
        delete this.words[word];
        return this.words;
    }
    showAllWords() {
        console.log(Object.values(this.words));
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }
    add(word, description) {
        if (this.words[word] === undefined) {
            this.words[word] = { word, description, isDifficult: true };
        }
        return this.words;
    }
}

// Тестирование
const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
    "дилетант",
    "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.",
);

hardWordsDictionary.add(
    "неологизм",
    "Новое слово или выражение, а также новое значение старого слова.",
);

hardWordsDictionary.add(
    "квант",
    "Неделимая часть какой-либо величины в физике.",
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();
