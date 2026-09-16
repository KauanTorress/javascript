function carregar() {
    var msg = document.getElementById('recado')
    var img = document.getElementById('imagem')

    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`
    
    if (hora >= 0 && hora < 12) {
        img.src = "foto-manha.jpg"
        document.body.style.background = '#FDE953'
    } else if (hora >= 12 && hora <=18) {
        img.src = "foto-tarde.jpg"
        document.body.style.background = '#FEB542'
    } else {
        img.src = "foto-noite.jpg"
        document.body.style.background = '#1D5466'
    }
}