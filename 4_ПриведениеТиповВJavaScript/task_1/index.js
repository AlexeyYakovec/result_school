let num = 42;
console.log(Number(num), Boolean(num), String(num));

let str = "Hello";
console.log(Number(str), Boolean(str), String(str));

let bool = true;
console.log(Number(bool), Boolean(bool), String(bool));

let undef;
console.log(Number(undef), Boolean(undef), String(undef));

let nul = null;
console.log(Number(nul), Boolean(nul), String(nul));

let obj = { key: "value" };
console.log(Number(obj), Boolean(obj), String(obj));

let arr = [1, 2, 3];
console.log(Number(arr), Boolean(arr), String(arr));

let sym = Symbol("id");
console.log(
    // Number(sym), // Ошибка: Cannot convert a Symbol value to a number
    Boolean(sym),
    String(sym),
);
