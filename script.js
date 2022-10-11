function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = 'manha.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18){
    // BOA TARDE
    document.body.style.background = '#b9846f'
    img.src = 'tarde.jpg'
} else {
    // boa noite
    document.body.style.background = '#515154'
    img.src = 'noite.jpg'
}

}
