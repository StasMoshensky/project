"use strict";

//ЦИКЛЫ



//while

// let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// };


//do

//Проверка условия

// do {
//   console.log(num);
//   num++;
// }
// while(num < 55);


//for

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//Досрочное окончание цикла

// for (let a = 1; a < 15; a++) {
//   if (a === 12) {
//     break;
//   }
//   console.log(a);
// }
// Цикл работает до 12


//Пропуск шага цикла без прерывания цикла

// for (let s = 1; s <= 14; s++) {
//   if (s === 11) {
//     continue;
//   }
//   console.log(s);
// }

// Цикл пропускает 11




//ЦИКЛ В ЦИКЛЕ

// for (e = 0; e < 5; e++) {
//   console.log(e);
//   for (j = 0; j < 5; j++) {
//     console.log(j);
//   }
// }

// * Asterix

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }


//   result += '\n';
// }

// console.log(result);


//Метка цикла

// let result = '';
// const lenght = 7;

// first: for (let i = 1; i < lenght; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < i; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 5; k++) {
//       console.log(`Third level: ${k}`);
//       if (k === 2) continue first;
//     }
//   }
// }


//Exercise_2

// for (let c = 5; c <= 10; c++) {
//   console.log(c);
// };


// for (let i = 20; i >= 10; i--) {
//   if (i === 13) break;
//   console.log(i)
// };

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//   console.log(i);
//   }
// };



let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



function rememberFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", "");
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberFilms();


function directPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Зритель!');
  } else if(personalMovieDB.count < 30) {
    console.log('Киноман!');
  } else {
    console.log('Error');
  };
  
  for (let h = 5; h <= 10; h++) {
    console.log(h);
  }
  
  for (let e = 20; e >= 10; e--) {
    if (e === 11) break;
    console.log(e)
  }
}

// directPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {

  if(!hidden) {

    console.log(personalMovieDB);

  }
  
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {

  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`'Ваш любимый фильм под номером' ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }

}

writeYourGenres();
