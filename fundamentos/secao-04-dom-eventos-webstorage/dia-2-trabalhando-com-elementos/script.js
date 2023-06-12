const body = document.body

const h1 = document.createElement('h1')
h1.innerText = 'TrybeTrip - Agência de Viagens'
body.appendChild(h1)
h1.className = 'title'

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

const sectionRight = document.createElement('section')
sectionRight.className = 'right-content'
main.appendChild(sectionRight)

const img = document.createElement('img')
img.src = 'https://picsum.photos/200'
img.className = 'small-image'
sectionLeft.appendChild(img)

const ul = document.createElement('ul')
const numbers = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

for(let i =0; i < numbers.length; i += 1){
    const li = document.createElement('li')
    li.innerText = numbers[i]
    ul.appendChild(li)
}
sectionRight.appendChild(ul)

for (let i = 0; i < 3; i += 1){
    const h3 = document.createElement('h3')
    h3.innerText = i
    main.appendChild(h3)
}

const h3 = document.getElementsByTagName('h3')
for (let i =0; i < 3; i += 1){
    h3[i].className = 'description'
}