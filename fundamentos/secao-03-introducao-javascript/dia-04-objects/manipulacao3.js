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
    ], 
    lessons2: [
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
    ]

};

//Crie uma função que obtenha o valor da chave de acordo com sua posição no array.

const getValue = (obj, index) => Object.values(obj)[index];

console.log(getValue(school, 1));