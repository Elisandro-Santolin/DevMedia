let paises = [
    {nome: 'Brasil', local: 'América do Sul'},
    {nome: 'Estados Unidos', local: 'América do Norte'},
	{nome: 'Argentina', local: 'América do Sul'},
	{nome: 'Canada', local: 'América do Norte'},
];
function retornaPaisesAmericaNorte(pais){
    return (pais.local == 'América do Norte');
}
function retornaPaisesAmericaSul(pais){
    return (pais.local == 'América do Sul');
}

let local = 'América do Norte';
let retornaPaises = [];

switch (local) {
    case 'América do Norte':
        retornaPaises = paises.filter(retornaPaisesAmericaNorte);
        break;
    case 'América do Sul':
        retornaPaises = paises.filter(retornaPaisesAmericaSul);
        break;        
}
retornaPaises.forEach(pais => {
    console.log(pais.nome); 
});
