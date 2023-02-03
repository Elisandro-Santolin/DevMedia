function celsiusParaFahrenheit (celsius){
    let fahrenheit = (celsius * 1.8) + 32;
        return fahrenheit;
}
let celsius = 25;

let fahrenheit = celsiusParaFahrenheit(celsius);

console.log('A conversão de '+celsius+'c '+'para Fahrenheit é de '+fahrenheit+'f.');