"use strict"

let number0fFilms = prompt("Сколько фильмов?");


let personalMovieDB = {
    count : number0fFilms,
    movies : {
        nameFilms : prompt("Один из последних просмотренных фильмов?"),
        raitingFilms : prompt('На сколько оцените его?'),
        nameFilms2 : prompt("Один из последних просмотренных фильмов?"),
        raitingFilms2 : prompt('На сколько оцените его?'),
    },
    actors : {},
    genres : [],
    privat : false,
};
console.log(personalMovieDB);