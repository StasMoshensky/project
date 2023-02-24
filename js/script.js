"use strict";

let area = 5;
const userNumb = 1;

// console.log(number);
// console.log(userNumb);

// number = 10;
// console.log(number);

let use = "k";
// console.log(use);

//Стили написания переменных

//camelCase
//snake_case
//UPPER_SNAKE_CASE
//Kebab-case
//PascalCase

//Задание 1

let userName = "John";
let userNumber = 25;
userNumber = 24;



//Типы данных


//Простые типы данных

//Число
let number = 5;

//Infinity
console.log(4/0);

//NaN (не число)
console.log('string' * 4);


//Строка

const person = "Stas";
let data = "5";

console.log(person + data);

//Логические типы (boolean)

let age = true; //Yes
let bool = false; //No

console.log (age);

//Null (не существует)
console.log = (gngh)

//Undefined (не определено)
let und;
console.log(und);

//Symbol

//BigInt (очень большие числа)



//Комплексные типы данных


//Объекты
let obj = {
  //ключ: значение
  name: "Stas",
  age: 52,
  isMarried: false
};

//Свойства объектов
console.log(obj.name);
console.log(obj["age"]);

//Массивы (объекты, в которых данные хранятся строго по-порядку)
let arr = ["Stas", 52, false, {}, []];
console.log(arr[1]);

//Разница между массивами и объектами
let ar = [1, 2, 3];
console.log(ar[1]); //Индекс массива

let ob = {
  Anna: 500, //Ключ - строка, можно писать без кавычек
  Pit: 600,
  Lilu: 700
};

//В массивах ключ - всегда номер по-порядку
let arOj = [1, 2, 3];
let obi = {
  0: 1,
  a: 2,
  2: 3
};
console.log(arOj[1]);
console.log(obi["a"]);

//Добавление свойств в объект
let obOi = {
  0: 1,
  a: 2,
  2: 3
};

obOi.b = "1235";

console.log(obOi["b"]);
console.log(obOi.b);

//Вложенность объектов
let arrOv = {
  dev: 25,
  vef: 14,
  df: [{}, {}],
  bed: {
    n: 5,
    j: 12
  }
};

console.log(arrOv["bed"]);






