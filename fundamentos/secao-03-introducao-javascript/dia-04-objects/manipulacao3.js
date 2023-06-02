const school = {
    lessons: [
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
    ], 

};

//Crie uma função que obtenha o valor da chave de acordo com sua posição no array.

const getValue = (obj, index) => Object.values(obj)[index];
console.log(getValue(school, 0));

//Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
const quantidadeEstudantes = (obj) => {

    let count = 0 
    for(let i = 0; i < obj.lessons.length; i += 1){
        count += obj.lessons[i].students
    }
    return count
}

console.log(quantidadeEstudantes(school))
