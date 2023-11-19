"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};
let i=0;
    do{
        const a = prompt('Один из последний просмотренных фильмов?', ''),
        b = prompt('На соклько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log ('done');
        } else{
          console.log ('error');
          i--;
        }
        i++;
    }
      while(i<2);

if(personalMovieDB.count < 10) {
    console.log('Вы не киноман');
} else if(personalMovieDB.count > 10 && personalMovieDB.count >30) {
    console.log('Вы киноман');
} else if (personalMovieDB.count > 30) {
    console.log ('Вы больной');
} else {
    console.log('eror');
}



console.log(personalMovieDB);