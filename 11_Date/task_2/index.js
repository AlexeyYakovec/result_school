/*

Часто мы записываем даты в следующем формате: «день.месяц.год». Сейчас вам необходимо создать функцию getDateFormat(), которая будет приводить дату к этому формату. Она принимает 2 параметра:

date - экземпляр класса Date, который нужно перевести в данный текстовый формат: “день.месяц.год”
separator - разделитель дня, месяца и года. По умолчанию он должен быть равен точке ".". 
Если в качестве разделителя будет передано тире "-", то формат уже должен быть таким: “день-месяц-год”.
Также учтите, что номер месяца в JavaScript считается с 0 до 11. 
Кроме этого, если день либо месяц возвращают однозначное число, то вам к нему необходимо добавить 0. То есть результат должен быть не таким: «5.5.2001», а «05.05.2001».

*/

function getDateFormat(date, separator = ".") {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }

    if (separator === "-") {
        return `${day}-${month}-${year}`;
    } else {
        return `${day}${separator}${month}${separator}${year}`;
    }
}

console.log(getDateFormat(new Date(2012, 1, 20))); // 20.02.2012
console.log(getDateFormat(new Date(2012, 1, 20), "-")); // 20-02-2012
