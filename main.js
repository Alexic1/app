"use strict";

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {
    },
    genres: [],
    privat: false
};
function showMyDB(hidden) {
    // if(!hidden) {
    //     console.log(personalMovieDB);
    // }
    if (hidden == false) {
        console.log(personalMovieDB);
    }
    else{
        console.log('idi nahuy');
    }
}

showMyDB(personalMovieDB.privat);

function rememberMyFilms() {
let i = 0;
do {
    const a = prompt('Один из последний просмотренных фильмов?', '').trim(),
        b = prompt('На соклько оцените его?', '').trim();
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    i++;
}
while (i < 2);
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы не киноман');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы больной');
    } else {
        console.log('eror');
    }
}
detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
    
}

writeYourGenres()