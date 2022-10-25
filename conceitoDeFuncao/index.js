

function saudacao(callback){
    const nome = 'Cristiano';
    callback(nome);
}

saudacao(function(algumaCoisa){
    console.log(`Bem vindo, ${algumaCoisa}`)
});