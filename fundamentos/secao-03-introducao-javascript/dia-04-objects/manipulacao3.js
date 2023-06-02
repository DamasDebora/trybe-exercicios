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
const getStudents = (obj) => {

    let count = 0 
    for(let i = 0; i < obj.lessons.length; i += 1){
        count += obj.lessons[i].students
    }
    return count
}
console.log(getStudents(school))

//Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false).
//Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
 
const verifyKey = (obj, key) => {
    for(let i = 0; i < obj.lessons.length; i += 1){
        if(obj.lessons[i][key] === undefined){
            return false
        }
    }
    return true
}
console.log(verifyKey(school, 'cours'))

