let restaurantes = [
    {nome: 'Restaurante A', estado: 'SP'},
    {nome: 'Restaurante B', estado: 'RJ'},
    {nome: 'Restaurante C', estado: 'SP'},
    {nome: 'Restaurante D', estado: 'RJ'}
];

function retornaRestaurantesRJ (restaurante) {
    return (restaurante.estado == 'RJ');
}
function retornaRestaurantesSP (restaurante) {
    return (restaurante.estado == 'SP');
}

let estado = 'RJ';

let retornaRestaurantes;

switch (estado){
    case 'RJ':
        retornaRestaurantes = restaurantes.filter(retornaRestaurantesRJ);
        break;
    case 'SP':
        retornaRestaurantes = restaurantes.filter(retornaRestaurantesSP);
        break;
}
retornaRestaurantes.forEach(restaurante => {
    console.log(restaurante.nome);
});