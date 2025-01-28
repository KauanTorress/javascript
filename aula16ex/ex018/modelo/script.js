var numeros = []
var res = document.querySelector('#res');

function adicionar() {
    // Definindo variáveis
    var num = Number(document.querySelector('#tnum').value);
    
    // Limpando resultados anteriores
    res.value = '';

    // Validação do número
    if (num === 0 || num > 100 || isNaN(num)) {
      res.value = 'Por favor, escolha um número entre 1 e 100.';
    } else {
      numeros.push(num); // Adiciona o número ao array
      // Atualiza a <textarea> com todos os valores do array
      numeros.forEach(valor => {
        res.value += `Valor ${valor} adicionado.\n`;
      });
    }

    // Limpa o campo de entrada após adicionar
    document.querySelector('#tnum').value = '';
  }

  function finalizar() {
    //definindo variaveis
    var final = document.querySelector('#restxt');
    var tot = numeros.length
    var maior = Math.max(...numeros)
    var menor = Math.min(...numeros)
    var soma = 0 

    //somando os valores
    for (var num of numeros) {
        soma += num
    }

    //calculando media
    var media = soma / numeros.length

    if (numeros.length === 0) {
        res.value = 'Por favor, Digite valores antes de finalizar!'
    } else {
        final.innerHTML = ''
        final.innerHTML += `Ao todo, temos ${tot} números cadastrados.<br>`
        final.innerHTML += `O maior valor informado foi ${maior}.<br>`
        final.innerHTML += `O menor valor informado foi ${menor}.<br>`
        final.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        final.innerHTML += `A média dos valores digitados é ${media}.`
    }
  }