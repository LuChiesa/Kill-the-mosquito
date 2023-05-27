
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

var posicaoX = Math.floor(Math.random() * largura) - 90 
var posicaoY = Math.floor(Math.random() * altura) - 90 // you need to decrement this to your mosquito doesnt jump out of the screen
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY // take care to the mosquito doesnt fly off your screen jajaja so if the is under 0 it needs to come back for itself

console.log(posicaoX, posicaoY)

var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = 'mosca1'
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'
mosca.style.position = 'absolute'

document.body.appendChild(mosca)
}