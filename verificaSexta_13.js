const dataAtual = new Date();

const diaSemana = dataAtual.getDay();
const diaMes = dataAtual.getDate();

if (diaSemana === 5 && diaMes === 13){
    console.log('Cuidado! Hoje é sexta-feira 13');
    } else if (diaSemana === 5) {
        console.log('Sextou!!!');
    } else {
    switch(diaSemana){
        case 1:
            diaSemana == 1;
            console.log('Hoje é segunda-feira.');
            break;
        case 2:
            console.log('Hoje é terça-feira');
            break;
        case 3:
            console.log('Hoje é quarta-feira');
            break;
        case 4:
            console.log('Hoje é quinta-feira');
            break;
        case 6:
            console.log('Hoje é sábado');
            break;
        case 7:
            console.log('Hoje é Domingo');
            break;
        default:
            console.log('data não é válida');
    }
}