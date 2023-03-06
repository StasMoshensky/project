"use strict";

//СВОЙСТВА И МЕТОДЫ строк и чисел 

//Методы - вспомогательные функции

// Свойства - вспомогательные значения


//Свойства


//Количество символов в строке
// const str = "test";
// console.log(str.length);

//Количество элементов в массиве
const arr = [1, 2, 5, 7];
console.log(arr.length);

//Вызов элемента по индексу
// const str = "test";
console.log(str[2]); //s

//Методы

//Изменение регистра
const str = "test";
console.log(str.toUpperCase()); //TEST (возвращает новое значение, исходник не меняется)

const st = 'teSt';
console.log(st.toLowerCase()); //test

//Поиск кусочка строки по индексу (поиск подстроки)
const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); //5 (начальный индекс в строке)

//Модификация строки
const logg = 'Hello world'; 
//Вырезать по индексу (начальный индекс, конечный индекс)
console.log(logg.slice(3, 8)); //lo wo
console.log(logg.slice(7, 11)); //orld
console.log(logg.slice(6)); //world

console.log(logg.substring(7, 11)); //orld
console.log(logg.substring(6)); //world

//Вырезать по индексу (начальный индекс, количество символов)
console.log(logg.substr(6, 4)); //worl



//Библиотека Math.

//Метод округления
const num = 23.5;
console.log(Math.round(num)); //24

const test = '12.3px';
console.log(parseInt(test)); //12 и переводит строку в числовой тип данных
console.log(parseFloat(test)); //12.3 переводит строку в числовой тип данных c дробными значениями



const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


//Метод TRIM (возвращает строку с вырезанными пробельными символами)



//Callback function
// Должна начать работу, когда другая функция будет выполнена



function learnJS(lang, callback) {

    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

// learnJS('JS', function() {
//     console.log('Я прошел этот урок');
// })

learnJS('JS', done);







// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//           js: '20%',
//           php: '10%'
//       },
//       exp: '1 month'
//   },
//   showAgeAndLangs: function(plan) {
//       const {age} = plan;
//       const {languages} = plan.skills;
//       let str = `Мне ${age} и я владею языками: `;

//       languages.forEach(function(lang) {
//           str += `${lang.toUpperCase()} `;
//       });

//       return str;
//   }
// };

// console.log(typeof(+ '5'));

// console.log(typeof(parseInt('15px', '5')));



// function message () {
//     console.log('Hello');
// }
// message();

// function mess(text) {
//     console.log(text);
// }
// mess('Hello');






//Объекты, деструктуризация объектов

// const options = {
//   name: 'test',
//   width: 500,
//   height: 700,
//   colors: {
//     border: 'red',
//     background: 'blue'
//   }
// }

// console.log(options.colors.border); //red

//Удаление свойства из объекта (оператор delete)

// delete options.name; //Удаление свойства name из объекта
// console.log(options);

//Удаление нескольких свойств из объекта с помощью цикла (конструкция for(in))
//Перебор свойств объекта

// for (let key in options) {
//   console.log(`Свойство ${key} имеет значение ${options[key]} `)
// }

//Перебор свойств внутри вложенного объекта

for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key] [i]} `);
    } 
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]} `);
  }
}



//Свойства и методы объектов


//Счетчик количества свойств внутри объекта


// let counter = 0;
// for (let key in options) {
//   if (typeof (options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key] [i]} `);
//       counter++;
//     } 
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]} `);
//     counter++;
//   }
// }

// console.log(counter);

//Метод Object.keys


const options = {
  name: 'test',
  width: 500,
  height: 700,
  colors: {
    border: 'red',
    background: 'blue'
  }
}

console.log(Object.keys(options));

//Получаем массив. Теперь узнаем длину массива (количество элементов)

console.log(Object.keys(options).length);


//Пример

// let me = {
//   name: 'Stas',
//   family: 'Moshensky',
//   age: 52,
//   home: {
//     street: 'Nizova',
//     building: 12,
//   },
//   color: {
//     red: 1,
//     blue: 6
//   }
// }

console.log(Object.keys(me).length);


//Методы можно создавать самому

// let me = {
//   name: 'Stas',
//   family: 'Moshensky',
//   age: 52,
//   home: {
//     street: 'Nizova',
//     building: 12,
//   },
//   color: {
//     red: 1,
//     blue: 6
//   },
//   makeTest: function() {
//     console.log('Test');
//   }
// }

// me.makeTest();



//ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

let me = {
  name: 'Stas',
  family: 'Moshensky',
  age: 52,
  home: {
    street: 'Nizova',
    building: 12,
  },
  color: {
    red: 1,
    blue: 6
  },
  makeTest: function() {
    console.log('Test');
  }
}

me.makeTest();

const {red, blue} = me.color;
console.log(blue);

