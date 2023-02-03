const verificaMaiorIdade = (idade) => {
    
    let resultado = (idade >= 18) ?  'Maior de Idade.' : 'Menor de Idade.';
        return resultado;
}
console.log(verificaMaiorIdade());