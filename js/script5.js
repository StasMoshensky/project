"use strict";

//Функции

// function showFirstMessage () {
//   console.log('Hello!');
// }

// showFirstMessage();

//Название функции лучше начинать с глагола


//Аргументы функции

// function showFirstMessage (text) {
//   console.log(text);
// }

// showFirstMessage('Hello!');


//Переменные внутри функции {} (локальные переменные)

// function showFirstMessage (text) {
//   console.log(text);
//   let num = 20;
// }

// showFirstMessage('Hello!');
// console.log(num);

//Глобальные переменные

// let num = 20;

// function showFirstMessage (text) {
//   console.log(text);
//   num = 10;
// }

// showFirstMessage('Hello!');
// console.log(num);


//Замыкание функции (сама функция + доступные глобальные переменные)

// let num = 20;

// function showFirstMessage (text) {
//   console.log(text);
//   let num = 10;
//   console.log(num);
// }

// showFirstMessage('Hello!');
// console.log(num);

// Возврат значения RETURN (прекращение действия функции)

// function calc (a, b) {
//   return(a + b);
// }
// console.log(calc(4, 5));
// console.log(calc(10, 5));

// Возврат значения RETURN (возвращение значения локальной переменной наружу)

// function ret() {
//   let num = 50;
//   return num;
// }
// const anotherNum = ret();

// console.log(anotherNum);


//Классификация функций

//FUNCTION DECLARATION
//Существует еще до того, как запуститься код

function ret() {
  let num = 50;
  console.log(num);
}
ret();


//FUNCTION EXPRESSION (создается только после объявления, работает, когда до нее доходит поток кода)

const logger = function() {
  console.log('Hello');
}; 

logger();


//СТРЕЛОЧНЫЕ ФУНКЦИИ

const calc = (a, b) => {
  console.log(calc);
  return a + b;
};
calc();
console.log(calc(4, 5));


//Аргументы функций

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//   console.log(curr * amount);
// }
// convert(500,usdCurr);
// convert(500, eurCurr);


//Важность RETURN

//Каждая функция должна что-то вернуть в результате своей работы

const usdCurr = 28;
const eurCurr = 32;
const discont = 0.9;

function convert(amount, curr) {
  return curr * amount; //Код остановился
  console.log(1); // Не сработает
}

function promotion(result) {
  console.log(result * discont);
} 

promotion (convert(500, usdCurr));
promotion (convert(500, eurCurr));

//или

const res = convert(500, usdCurr);
promotion(res);





function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return
  }
  console.log('done'); //Код не дошел, закончился не только цикл, но и работа функции
}

test();
//Функция закончила работу


function doNothing() {}
  console.log(doNothing() === undefined); //true

//Любая функция без return выдает undefined








