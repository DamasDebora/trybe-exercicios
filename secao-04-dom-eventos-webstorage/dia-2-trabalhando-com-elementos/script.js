const body = document.body

const h1 = document.createElement('h1')
h1.innerText = 'TrybeTrip - Agência de Viagens'
body.appendChild(h1)

const main = document.createElement('main')
main.className = 'main-content'
body.appendChild(main)

const section = document.createElement('section')
section.className = 'center-content'
main.appendChild(section)

const p = document.createElement('p')
section.appendChild(p)

const sectionLeft = document.createElement('section')
sectionLeft.className = 'left-content'
main.appendChild(sectionLeft)

