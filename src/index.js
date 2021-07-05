import movieList from './movies.json'
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
  let icon = ''
  let s = movie.tomatoScore;
  if (s < 60) {
    icon += `<img class="icon" src="https://staticv2-4.rottentomatoes.com/static/images/icons/splat-16.png" alt="#" />`;
  } 
  else if (s >= 60 && s < 80) {
    icon += `<img class="icon" src="https://staticv2-4.rottentomatoes.com/static/images/icons/fresh-16.png" alt="#" />`;
  } 
  else {
    icon += `<img class="icon" src="https://staticv2-4.rottentomatoes.com/static/images/icons/CF_16x16.png" alt="#" />`;
  }
  
  return `<div class="card">
            <img src="${movie.posters.primary}" alt="#" />
            <div class="movie-info">
                <div class="title">${movie.title}</div>
                <div class="iconScore">${icon} ${movie.tomatoScore}%</div>
                <div class="date">available  ${movie.dvdReleaseDate}</div>
            </div>
          </div>`
  }
