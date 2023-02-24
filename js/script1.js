"use strict";

// Общение с пользователем


// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "");
// console.log(answer);
// console.log(typeof(answer)); //Строка

// Вся информация от пользователя приходит в виде СТРОКИ! Можно поменять тип данных
// const answer = +prompt("Вам есть 18?"); //Теперь число
// console.log(answer + 5); 

// const anwers = []

// anwers[0] = prompt("Как ваше имя?");
// anwers[1] = prompt("Как ваша фамилия?");
// anwers[2] = prompt("Сколько вам лет?");

// console.log(anwers);


//Интерполяция


const category = "toys";

// console.log("https://someurl.com/" + category);

// console.log(`https://someurl.com/${category}/5`)

const user = 'Ivan';

alert(`Hello, ${user}`);


//Операторы

// +
//Конкатенация
console.log("ghh" + "-jtyf");
console.log(4 + "-jtyf");

console.log(4 + +"5"); //Унарный плюс


//Инкремент, декремент

//Префиксная форма

// let incr = 10;
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

//Постфиксная форма (возвращает старое значение)

// let incr = 10;
//     decr = 10;

// ++incr;
// --decr;

// console.log(incr);
// console.log(decr);

let incr = 10;
    decr = 10;

// ++incr;
// --decr;

console.log(incr++);
console.log(decr--);


//Оператор %

console.log(5%2);


//Оператор равенства =

// = Присваивание

const jhj = 5;

//Сравнение

console.log(2*4 == 8);

//Строгое сравнение

console.log(2*4 === '8'); //false
console.log(2*4 === 8); //true



//Логические операторы

// оператор И && (работает, если 2 и более элемента есть правдивыми выражениями)

// let isChecked = true;
// let isClose = true;

// console.log(isChecked && isClose); //true

// let isChecked = true;
// let isClose = false;

// console.log(isChecked && isClose); //false


// оператор ИЛИ || (работает, если хоть 1 элемент есть правдивым выражением)

// let isChecked = true;
// let isClose = false;

// console.log(isChecked || isClose); //true


// Оператор отрицания ! (возвращает значение в обратное)

let isChecked = true;
let isClose = false;

console.log(!isChecked || isClose); //false




