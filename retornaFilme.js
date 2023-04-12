let filmes  = [
    {nome: 'Vingadores'},
    {nome: 'Liga da Justiça'},
    {nome: 'Capitão América: Guerra Civil'},
    {nome: 'Harry Potter e o enigma do príncipe'},
    {nome: 'Your Name.'},
    {nome: 'Naruto: Road to Boruto'},
    {nome: 'Thor: Ragnarok'}
];

let data = new Date();
let dia_semana = data.getDay();

let filme = filmes[dia_semana -1];

console.log(filme);