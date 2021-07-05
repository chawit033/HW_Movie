import movieList from './movies.json'

import icon from './icon.json'

import './main.scss'

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.getElementById('card')
    const movies = movieList
    insertMovie(movies,cards)
})


function insertMovie(movies,cards) {
    movies.forEach(movie => {
        let cardDOM = buildCardDOM(movie)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })

}
        

function buildCardDOM(movie) {
  let IconScore = '';
  let s = movie.tomatoScore;
  if (s < 60) {
    IconScore += `<img class="icon" src="${icon[0].img}" alt="#" />`;
  } else if (s >= 60 && s < 80) {
    IconScore += `<img class="icon" src="${icon[1].img}" alt="#" />`;
  } else {
    IconScore += `<img class="icon" src="${icon[2].img}" alt="#" />`;
  }
  
  return `<div class="card">
            <img src="${movie.posters.primary}" alt="#" />
            <div class="movie-info">
                <div class="title">${movie.title}</div>
                <div class="iconScore">${IconScore}${movie.tomatoScore}%</div>
                <div class="date">available  ${movie.dvdReleaseDate}</div>
            </div>
          </div>`
  }
