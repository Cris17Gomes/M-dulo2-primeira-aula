// const imprimirMensagem = () => {
//     console.log('Olá Cris')
// }
// setTimeout(imprimirMensagem, 2000);


const imprimirMensagem = (nome, idade) => {
    
    console.log(`Olá ${nome}. Você tem ${idade} anos!`)
}
console.log('Só um instante');
setTimeout(imprimirMensagem, 2000, 'Cris', 41)

