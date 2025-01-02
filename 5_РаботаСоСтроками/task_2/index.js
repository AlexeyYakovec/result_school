const myName = "Aleksey";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Vladilen";
const reasonText = "За интерес к веб-разработке";
const numberOfMonth = 12;
let myInfoText = `«Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что reasonText. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!»`;

console.log(myInfoText.replaceAll("JavaScript", "javascript"));
