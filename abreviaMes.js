const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    
    function abreviar (mes) {
        return mes.substr(0,3)
    };
    
    const mesesAbreviados = meses.map(abreviar); //## .map percorre o array e o modifica ##
    
    mesesAbreviados.forEach(mes => {
        console.log(mes);
    });