const buscarFrutas = (arrayFrutas, callback) => {
    for (const fruta of arrayFrutas) {
        if (callback(fruta)) {
            console.log('Fruta encontrada');
            return;
        }
    }
    console.log('Fruta não encontrada');
}

const frutas = ['uva', 'manga', 'abacaxi', 'banana'];

buscarFrutas(frutas, (item) => {
    return item === 'mangaba';
});