/*

Вам необходимо создать функцию giveJobToStudent(), которая будет добавлять новое свойство в объект и выводить информацию в модальном окне. Она принимает в себя 2 параметра:

student — объект, содержащий информацию о студенте.
jobName — название новой работы студента.
Функция giveJobToStudent() выводит в модальное окно сообщение 
«Поздравляем! У студента fullName появилась новая работа! Теперь он jobName», где fullName — это имя студента, а jobName — название новой работы студента.

Функция giveJobToStudent() должна возвращать новый объект студента, в котором будут все ключи из объекта student и также появится новый ключ job со значением параметра jobName.

Для теста функции giveJobToStudent() используйте следующий код:

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}

*/

function giveJobToStudent(student, jobName) {
    student.job = jobName;
    return student;
}

const student = {
    fullName: "Максим",
    experienceInMonths: 12,
    stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");

console.log(updatedStudent);
