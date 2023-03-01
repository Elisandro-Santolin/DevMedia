const chuvaMeteoros = [
    {nome: 'Alfa',              declinacao: -59},
    {nome: 'Beta',              declinacao: -50},
    {nome: 'Pi',                declinacao: -45},
    {nome: 'Liridas',           declinacao:  34},
    {nome: 'Eta',               declinacao:  -1},
    {nome: 'Eta Liridas',       declinacao:  44},
    {nome: 'Bootideos',         declinacao:  48},
    {nome: 'Alfa Capricornios', declinacao: -10},
    {nome: 'Delta Jhonson',     declinacao: -16},
    {nome: 'Astralopitecos',    declinacao: -30},
    {nome: 'Perseidas',         declinacao:  58}
];

const chuvaNoNorte = chuvaMeteoros.filter (
    (chuva) => chuva.declinacao >= 0
);
const chuvaNoSul = chuvaMeteoros.filter (
    (chuva) => chuva.declinacao < 0
); 

const imprimirChuva = function (chuva) {
    console.log(chuva); 
}
console.log("\nChuvas no hemisfério Norte: ");
    chuvaNoNorte.forEach(imprimirChuva);

console.log("\nChuvas no hemisfério Sul: ");
    chuvaNoSul.forEach(imprimirChuva);