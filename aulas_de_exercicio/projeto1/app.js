function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    img.src = set_image_by_hour(hora)
    document.body.style.background = set_background_by_hour(hora)
}

function set_image_by_hour(hora){
    if (hora >= 12 && hora < 18){
        return "tarde.jpg"
    } else if (hora >= 18 && hora <= 23 || hora >= 0 && hora <= 4){
        return "noite.jpg"
    } else{
        return "manha.jpg"
    }
}

function set_background_by_hour(hora){
    if (hora >= 12 && hora < 18){
        return "rgba(183, 100, 49, 0.895)"
    } else if (hora >= 18 && hora <= 23 || hora >= 0 && hora <= 4){
        return "rgba(20, 49, 112, 0.895)"
    } else{
        return "rgba(240, 218, 74, 0.895)"
    }
}