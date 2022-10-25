
// function saudacao(callback){
//     const nome = 'Cristiano';
//     callback(nome);
// }

// function mensagem(nome) {
//     console.log(`Bem vindo, ${nome}`)
// }
// saudacao(function(algumaCoisa){
//     console.log(`Bem vindo, ${algumaCoisa}`)
// });


// const  saudacao = (callback) => {
//     const nome = 'Cristiano';
//     callback(nome);
// }

// const mensagem = (nome) => {
//     console.log(`Bem vindo, ${nome}`)
// }
// saudacao(mensagem)


const  saudacao = (callback) => {
    const nome = 'Cristiano';
    callback(nome);
}

// const mensagem = (nome) => {
//     console.log(`Bem vindo, ${nome}`)
// }
saudacao(nome => {
    console.log(`Bem vindo, ${nome}`);
});


