const jogos = [
    { id: 1, nome: 'Resident Evil 7', preco: 250 },
    { id: 2, nome: 'God of War', preco: 300 },
    { id: 3, nome: 'Stronghold Warlords', preco: 280 },
];
    
    const total = jogos.reduce (( total, jogo) => {
        return total + jogo.preco;
}, 0);

console.log("O valor do total dos jogos é "+total.toFixed(2)+" R$.");