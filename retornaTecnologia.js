const tecnologias = [ "PHP", "Flutter", "HTML", "CSS", "C#", "React Native" ];

function imprimeStack(tec) {
    switch (tec) {
    case "HTML":
    case "CSS":
        console.log('Front-end');
        break;

    case "C#":
    case "PHP":
        console.log('Back-end');
        break;

    case "Flutter":
    case "React Native":
        console.log('Mobile');
        break;

    default:
        console.log('Tecnologia não encontrada');
        break;
    }
}
console.log(imprimeStack("PHP"));