function verifica_tamanho_senha (senha) {

    if (senha.length >= 10){
        return true; // ESSA AQUI EU ME FODI BONITO KKKK SAI FORA CARA 
    }
    }
    let senha_cadastro = "minhasenha";
    
    if(verifica_tamanho_senha(senha_cadastro)){
        console.log("A senha possui o mínimo de 10 caracteres");
    }else {
        console.log("A senha não possui o mínimo de 10 caracteres");
    }