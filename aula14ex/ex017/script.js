function gerarTabuada() {
    var num = Number(document.querySelector('#tnum').value)
    var res = document.querySelector('#res')

    //Limpar resultado anterior
    res.value = ""

    if (isNaN(num)) {
        res.value = 'Por favor, digite um número válido!'
    }

    //Gerar tabuada
    for (var i = 1; i <= 10; i++) {
        res.value += `${num} x ${i} = ${num * i}\n`
    }
}