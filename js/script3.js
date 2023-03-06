"use strict";

//Условия

if (4 == 9) {
  console.log("Ok");
} else {
  console.log("Error");
}

//Вложенность условий

// const num = 50;

// if (num < 49) {
//   console.log('Error');
// } else if (num > 52) {
//   console.log('More');
// } else {
//   console.log('Ok');
// }


// //Тернарный оператор

// (num == 50) ? console.log('Error') : console.log('Ok');

// Конструкция swith (проверка нескольких условий) только строгое сравнение!

const num = 50;

switch(num) {
  case 49:
    console.log('No');
    break;
  case 100:
    console.log('No');
    break;
  case 50:
    console.log('Yes');
    break;
  default:
    console.log('No more');
    break;
};
//В консоль выводиться правдивый case


//Логические операторы (&& ? ||)

//&&

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//   console.log('Ok');
// };

// console.log((hamburger && fries)); //true (результат сравнения - булевое значение)

// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//   console.log('Ok');
// };

// console.log((hamburger && fries)); //false (результат сравнения - булевое значение)

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//   console.log('Ok');
// };

// console.log((hamburger && fries)); //false (результат сравнения - булевое значение)


//Динамическая типизация

//Всегда будет false
// 0
// ''
// null
// indefined
// NuN

//Всегда будет true
//все остальное


// const hamburger = 3;
// const fries = 1;

// if (hamburger === 3 && fries === 2) {
//   console.log('Ok');
// } else {
//   console.log('Bed');
// };

//Оператор && работает до первого false

// const hamburger = 3;
// const fries = 1;
// cola = 0;

// if (hamburger === 3 && cola === 2 && fries === 2) {
//   console.log('Ok');
// } else {
//   console.log('Bed');
// };

// Оператор && возвращает первое ложное значение, на котором он остановился (0)

// const hamburger = 3;
// const fries = 1;
// cola = 0;

// console.log(hamburger === 3 && fries && cola); //0

// Если все  элементы правдивы, оператор && возвращает последний элемент (2)

// const hamburger = 3;
// const fries = 1;
// cola = 2;

// console.log(hamburger === 3 && fries && cola); //2



//Оператор || или

// Оператор перестает работать, как только находит TRUE

//Возвращает первое правдивое значение

// const hamburger = 0;
// const fries = 1;
// const cola = 0;

// if (hamburger || cola || fries) {
//   console.log('Ok');
// } else {
//   console.log('Bed');
// };

// console.log(hamburger || fries || cola); //1


// Если все FALSE, то возвращается ПОСЛЕДНЕЕ ложное значение

// const hamburger = 0;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//   console.log('Ok');
// } else {
//   console.log('Bed');
// };

// console.log(hamburger || fries || cola); //0


// КОМБИНАЦИИ ОПЕРАТОРОВ


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//   console.log('Ok');
// } else {
//   console.log('Bed');
// };

// console.log(hamburger || fries || cola); //0


// Оператор ! не

console.log(!0); //true

// Сначала превращает аргумент в логический тип данных (TRUE/FALSE), а потом возвращает противоположное значение



//Exercise_2

//2
console.log( NaN || 2 || undefined );

//NaN
console.log( NaN && 2 && undefined );

//3
console.log( 1 && 2 && 3 );

//false
console.log( !1 && 2 || !3 );

//25
console.log( 25 || null && !3 );

//5
console.log( NaN || null || !3 || undefined || 5);

//5
console.log( NaN || null && !3 && undefined || 5);

//true
console.log( 5 === 5 && 3 > 1 || 5);


//true/ Done!
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}









