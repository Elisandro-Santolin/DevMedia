let palavrasBloqueadas = ["passaporte falso", "cartão de crédito", "gerador de CPF"];

function verificaComentarioValido(palavrasBloqueadas, comentario) {
    let comentarioValido = true;
    palavrasBloqueadas.forEach(palavraBloqueada => {
        if (comentario.indexOf(palavraBloqueada) > -1){
            comentarioValido = false;
        }
});
    return comentarioValido;
}
let comentario = "Compre aqui seu passaporte falso!";

if (verificaComentarioValido(palavrasBloqueadas, comentario)) {
    console.log("Seu comentário: "+comentario);
} else {
    console.log("Comentário bloqueado!");
}