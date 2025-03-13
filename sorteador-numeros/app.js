function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let minimo = parseInt(document.getElementById('de').value);
    let maximo = parseInt(document.getElementById('ate').value);
    
    alert(sorteador_numeros(minimo, maximo, quantidade));

    //alert(`Quantidade: ${quantidade}\nMinimo: ${minimo}\nMaximo: ${maximo}`)
}

function sorteador_numeros(minimo, maximo, quantidade){
    let numeros_sorteados = [];

    for (let contador = 0; contador <= quantidade; contador++){
        numeros_sorteados.push(Math.round(Math.random() * (maximo - minimo))+minimo);
    }

}

