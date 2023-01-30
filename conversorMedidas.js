function centimetrosParaMetros(centimetros){
    let metros = (centimetros / 100);
    return metros;
}
function metrosParaCentimetros(metros){
    let centimetros = (metros * 100);
    return centimetros;
}

let convertePara = 'm';
let medida = 250;

if (convertePara == 'm') {
    let metros = centimetrosParaMetros(medida);
    console.log(metros+'m');
}
else {
    let centimetros = metrosParaCentimetros(medida);
    console.log(centimetros+'cm')
}

