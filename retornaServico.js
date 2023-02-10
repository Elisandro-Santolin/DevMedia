let series = [
    {nome: 'Loki',             servico: 'Disney+'},
	{nome: 'Friends',          servico: 'HBO'},
	{nome: 'Superman & Lois',  servico: 'HBO'},
	{nome: 'WandaVision',      servico: 'Disney+'},
];

function retornaSeriesDisney(serie){
    return(serie.servico == 'Disney+');
}
function retornaSeriesHBO(serie){
    return(serie.servico == 'HBO');
}

let servico = 'Disney';
let retornaSeries = [];

switch(servico){
    case 'Disney':
        retornaSeries = series.filter(retornaSeriesDisney);
        break;
    case 'HBO':
        retornaSeries = series.filter(retornaSeriesHBO);
        break;
}
retornaSeries.forEach(serie => {
	console.log(serie.nome);
});