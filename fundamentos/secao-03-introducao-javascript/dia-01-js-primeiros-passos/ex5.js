const peca = 'cavalo'

switch (peca){
    case 'cavalo':
        console.log('cavalo > pula sobre as peças')
        break
    case 'rei': 
        console.log('rei > uma casa pra qualquer direção')
        break 
    case 'bispo':
        console.log('bispo > diagonais')
        break
    case 'rainha':
        console.log('rainha > diagonal, verticl, horizontal')
        break
    case 'torre':
        console.log('torre > horizontal e vertical')
        break
    case 'peao':
        console.log('peao > diagonais')
        break
    default: 
        console.log('inválido')
}