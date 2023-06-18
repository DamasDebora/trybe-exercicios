const movieLibrary = document.getElementById('movie-library')

const createMvieShape = (movieObj) => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
     
    img.src = movieObj.img
    h1.textContent = movieObj.title

    if(movieObj.watched){
        h2.textContent = 'assistido'
    } else {
        h2.textContent = 'não assistido'
    }

    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(h2)

    return div
}
const loadMovies = () => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'))

    for(let i =0; i < savedMovies.length; i += 1){
       const movieElement = createMvieShape(savedMovies[i])
       movieLibrary.appendChild(movieElement)
    }
}

const onload = () => {
    loadMovies()
}

window.onload = onload