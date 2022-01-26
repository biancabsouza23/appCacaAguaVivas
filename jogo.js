/*Bianca Bastos
Inspirado no projeto de Jorge Santana (jorgesantana.net.br), disponibilizado na Udemy*/

//variaveis
var altura = 0, largura = 0, tam, posicaoX, posicaoY, agviva, lado, vidas = 1
var tempo = 10

//recupera informacoes de dimensao da pg
function ajustaTamanhoDoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth 
    //console.log(altura, largura)
}

//chama uma vez
ajustaTamanhoDoPalco()

var cronometro = setInterval(function() {
    tempo -= 1
    if (tempo < 0) { //venceu a partida
        clearInterval(cronometro)
        clearInterval(criaAgviva)
        window.location.href = 'https://biancabsouza23.github.io/appCacaAguaVivas/vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandom(){
    //remover aguaviva anterior, caso exista
    if (document.getElementById('agviva')) {
        if (vidas > 3) {
            window.location.href = 'https://biancabsouza23.github.io/appCacaAguaVivas/fim_de_jogo.html'
        } else {
            document.getElementById('agviva').remove()
            document.getElementById('v' + vidas).src = "coracao_vazio.png"
            vidas++
        }
    }
  
    posicaoX = Math.random()
    posicaoY = Math.random()
    agviva = document.createElement('img')//criar elemento html

    posicaoX = Math.floor(posicaoX * largura) - 90
    posicaoY = Math.floor(posicaoY * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)
    agviva.src = 'ag.png' //atribui elemento
    agviva.className = tamanhoRandom() + ' ' + ladoRandom()
    agviva.style.left = posicaoX + 'px'
    agviva.style.top = posicaoY + 'px'
    agviva.style.position = 'absolute'
    agviva.id = 'agviva'
    agviva.onclick = function() {
        this.remove()
    }
    document.body.appendChild(agviva) //incluir elemento no body da pg
}

function tamanhoRandom() {
    tam = Math.floor(Math.random() * 3)
    switch (tam) {
        case 0: return 'aguaviva0'
        case 1: return 'aguaviva1'
        case 2: return 'aguaviva2' 
    }
}

function ladoRandom() {
    lado = Math.floor(Math.random() * 2)
    switch (lado) {
        case 0: return 'ladoA'
        case 1: return 'ladoB'
    }
}
