const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores contidos nele com a função console.log().

for (let i =0 ; i < numbers.length; i++){
    console.log(`${i} - ${numbers[i]}`)
}

//Some todos os valores contidos no array e imprima o resultado.
let sum = 0 
for (let i =0 ; i < numbers.length; i++){
    sum += numbers[i]
}
console.log(`soma: ${sum}`)

//Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
for (let i =0 ; i < numbers.length; i++){
    sum += numbers[i]
}
let media = sum / numbers.length
console.log(`media: ${media}`)

//Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
if (media > 20){
    console.log('O valor da média aritméticaé maior que 20')
} else {
    console.log('O valor da média aritmética é menor ou igual a 20')
}

/*Utilizando for, descubra o maior valor contido no array e imprima-o.

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
*/
