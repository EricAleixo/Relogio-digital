function checarHora(){
    var data = new Date()

    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    document.querySelector("#hora").innerHTML = hora
    document.querySelector("#minutos").innerHTML = minutos
    document.querySelector("#segundos").innerHTML = segundos
}

setInterval(checarHora, 1000)