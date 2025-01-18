function verificar() {
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Digite um ano válido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.borderRadius = '50%'
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.padding = '10px'
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança  
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/velho-homem.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulta-mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/velha-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        res.appendChild(img)
    }
}