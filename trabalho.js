export { exibirNomeDogFormatado,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}

 function exibirNomeDogFormatado (nome) {
    return nome.toUpperCase()
}

function  verificarSePodeSerAdotado(idade, porte){
    return(idade === 1 && porte === 'M')    
}

function calcularConsumoDeRacao(nome, idade, peso,){
    return peso * 300;
}

function decidirTipoDeAtividadePorPorte(porte){
    if (porte === 'pequeno') {
        return 'brincar dentro de casa';
      } else {
        return 'porte invalido';
      }
}

async function buscarDadoAsync() {
    return 'Pipoca';
  }
//teste