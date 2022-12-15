const menu = document.getElementById('header');

window.addEventListener('scroll', () =>{
    menu.classList.toggle('active-header', window.scrollY >0)
})

// consumo de API

// hero
const sliderHero = [...document.querySelectorAll('.card-hero')]
const next = document.getElementById('next')
const before = document.getElementById('before')

next.addEventListener('click', () => changePosition(1))
before.addEventListener('click', () => changePosition(-1))

function changePosition(change){
  const currentElement = Number(document.querySelector('.card--show').dataset.id)
  
  let value = currentElement
  value +=change

  if(value === 0 || value === sliderHero.length+1){
    value = value === 0 ? sliderHero.length : 1
  }

  sliderHero[currentElement-1].classList.toggle('card--show')
  sliderHero[value-1].classList.toggle('card--show')
}

async function getTrendingMoviesHero(){
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
  const data = await res.json();
  const movies = data.results
  const prevImgUrl = 'https://image.tmdb.org/t/p/original'

    const card1 = document.getElementById('cardHeroImg1')
    const card2 = document.getElementById('cardHeroImg2')
    const card3 = document.getElementById('cardHeroImg3')
    const card4 = document.getElementById('cardHeroImg4')

    card1.setAttribute('src', `${prevImgUrl}${movies[0].backdrop_path}`)
    card2.setAttribute('src', `${prevImgUrl}${movies[1].backdrop_path}`)
    card3.setAttribute('src', `${prevImgUrl}${movies[2].backdrop_path}`)
    card4.setAttribute('src', `${prevImgUrl}${movies[3].backdrop_path}`)
}
getTrendingMoviesHero()

// recommended section
async function getTrendingMoviesPreview(){
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
  const data = await res.json();
  const prevImgUrl = 'https://image.tmdb.org/t/p/w200'
  const sliderContainer = document.getElementById('sliderRecommended')
  
  const movies = data.results;
  
  movies.forEach(movie => {
  const movieCard = document.createElement('div')
  movieCard.classList.add('movie-card')

  const movieImg = document.createElement('img')
  movieImg.setAttribute('src', `${prevImgUrl}${movie.poster_path}`)

  movieCard.appendChild(movieImg)

  sliderContainer.appendChild(movieCard)
  });
}

getTrendingMoviesPreview()

 