"use strict";
// let nimber = 45;
// const leftBorderWidth = 1;
// number = 12;
// leftBorderWidth = 2;

// console.log(leftBorderWidth);

// let result = confirm("are you ok?"); 
// console.log(result);

// const answer = prompt("are you ok?", "18");
// console.log(answer);

// const answers = [];

// answers[0] = prompt("Как тебя зовут?", "");
// answers[1] = prompt("Как твоя фамилия?", "");
// answers[2] = prompt("Сколько тебе лет?", "");

// document.write(answers);

// const user = prompt('ваше имя');
// document.write(`Привет, ${user}, ты какашка?`) 
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
