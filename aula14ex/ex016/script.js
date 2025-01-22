function contar() {
    var inicio = Number(document.getElementById('inc').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('pas').value || 1 )
    var res = document.getElementById('res')
    res.innerHTML = ''

    if (inicio === 0 || fim === 0 || passo === 0) {
        res.innerHTML += "<p >Impossível contar: preencha todos os campos!</p> "
        return
    }

    if (passo <= 0) {
        alert('O passo deve ser maior que zero, considerando 1.');
        passo = 1
    }

    res.innerHTML = "Contando:"

    if (inicio < fim) {
        for (var i = inicio; i <= fim; i += passo) {
            res.innerHTML += ` &#x1F449; ${i}`;
        }
    } else {
        for (var i = inicio; i >= fim; i -= passo) {
            res.innerHTML += ` &#x1F449; ${i}`;
        }
    }
    res.innerHTML += " &#x1F3C1;"  
}