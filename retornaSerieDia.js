function retornaSerieDia(){

    let data = new Date();
    let diaSemana = data.getDay();
    let serie = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];
        return serie[diaSemana];
}
let serieDoDia = retornaSerieDia();

console.log("Serie do dia: " + serieDoDia + "!");