const form = document.querySelector('form')
const inputTitle = form.querySelector('#title')
const img = form.querySelector('#img')
const checkboxWacth = form.querySelector('#watched')

const submitNewMovie = (event) => {
    event.preventDefault()

    const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || []

    const movie = {
        title: inputTitle.value,
        img: img.value,
        watched: checkboxWacth.checked
    }
    savedMovies.push(movie)
    inputTitle.value = ''
    img.value = ''
    checkboxWacth.watched = false
    console.log(savedMovies)

    localStorage.setItem('savedMovies', JSON.stringify(savedMovies))

    location.href = '/index.html'
}


form.addEventListener('submit', submitNewMovie)