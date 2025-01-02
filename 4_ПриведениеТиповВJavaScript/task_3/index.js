// console.log;
// {
//     name: "Maxim";
// }
// Symbol("key");
// Number;
// ("");
// 0 - 10;
// ("-105");

console.log(String(alert)); // Возвращает function alert() { [native code] }
console.log(String(console.log())); // Возвращает undefiend
console.log(
    String({
        name: "Maxim",
    }),
); // Возвращает [object Object]
console.log(String(Symbol("key"))); // Возвращает Symbol(key)
console.log(String(Number(""))); // Возвращает 0
console.log(String(0)); // Возвращает 0
console.log(String(-10)); // Возвращает -10
console.log(String(-105)); // Возвращает -105
