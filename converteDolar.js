let dolar = 25;
let real = converteDolarParaReal(dolar);

function converteDolarParaReal(dolar)
{
    let real = dolar * 5.170;

    return real;
}
console.log(real.toFixed(2));