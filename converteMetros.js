// ## ESTRUTURA PADRÃO DE DECLARAR UMA FUNÇÃO ## //
function converteCentimetroParaMetro(centimetro){
    let metro = centimetro / 100;
        return metro;
}
function converteMetroParaCentimetro(metro){
    let centimetro = metro * 100;
        return centimetro;
}
function converteMetroParaQuilometro(metro){
    let quilometro = metro / 1000;
        return quilometro;
}

// ## ESTRUTURA ARROW FUNCTION DE DECLARAR UMA FUNÇÃO ## //
const converteCentimetroParaMetro = (centimetro) => centimetro / 100; 

const converteMetroParaCentimetro = (metro) => metro * 100;

const converteMetroParaQuilometro = (metro) => metro / 1000;

