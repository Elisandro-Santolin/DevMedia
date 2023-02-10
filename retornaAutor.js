let livros = [
    {titulo: 'Tenki no ko',               autor: 'Makoto Shinkai'},
    {titulo: 'Toradora',                  autor: 'Yuyuko Takemia'},
    {titulo: 'Kimi no na wa',             autor: 'Makoto Shinkai'},
    {titulo: 'A silent voice',            autor: 'Yoshitoki Oima'},
    {titulo: '5 Centímetros por segundo', autor: 'Makoto Shinkai'}
];
function verificaAutor(livro) {
    return (livro.autor == 'Makoto Shinkai');
}
let livrosMakotoShinkai = livros.filter(verificaAutor);

livrosMakotoShinkai.forEach(livro => {
    console.log(livro.titulo);
});