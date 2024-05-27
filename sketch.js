let xBol = 300
let yBol = 200
let diametro = 18
let raio = diametro / 2

let xRaquete = 5
let yRaquete = 150

let colidiu = false

let velBx = 6
let velBy = 6

let raqueteComprimento = 10
let raqueteAltura = 100

let xRaqueteOp = 585
let yRaqueteOp = 150
let velOpY 

let meusP = 0
let opP = 0

let raquetada 
let ponto 
let trilha

let pausado = false
let pausaTempo = 3000
let pausaInicio = 0

function preload() {
  ponto = loadSound("Ponto.mp3")
  raquetada = loadSound("Raquetada.mp3")
  trilha = loadSound("Trilha.wav")
}

function setup() {
  createCanvas(600, 400)
  trilha.loop()
}

var res = confirm("Você deseja jogar com 1 jogador?")
  if (res == true) {
    alert("Modo de um jogador será executado")
    alert("Use a W e S para se movimentar para cima e para baixo")
    alert("Aproveite a experiência!")
    function draw() {
      background("#00FF48")
      mostraBolinha()
      movimentaBolinha()
      verificaColisao()
      mostraRaquete(xRaquete, yRaquete)
      movimentaMinhaRaquete()
      //verificaColisaoRaquete()
      colisaoRaquete(xRaquete, yRaquete)
      mostraRaquete(xRaqueteOp, yRaqueteOp)
      movimentaRaqueteOp()
      colisaoRaquete(xRaqueteOp, yRaqueteOp )
      placar()
      pontos()
  }

    function mostraBolinha() {
      stroke("white")
      line(300, 0, 300, 400)
      fill("red")
      circle(xBol, yBol, diametro)
      
  }

    function movimentaBolinha() {
      if (pausado) {
        if (millis() - pausaInicio >= pausaTempo) {
          pausado = false
        } else {
          return 
        }
      }
      
      xBol += velBx
      yBol += velBy
        
  }

   function verificaColisao() {
      if (xBol + raio> width || xBol - raio < 0) {
      velBx *= -1
    }

    if (yBol + raio > height || yBol - raio < 0) {
      velBy *= -1
    }
  }

  function mostraRaquete(x,y) {
    fill("#BF3030") 
    rect(x, y,raqueteComprimento,raqueteAltura)
    }

  function movimentaMinhaRaquete() {
    if(keyIsDown(87)) {
      yRaquete -= 10
    }

    if(keyIsDown(83)) {
      yRaquete += 10
    }
  }

  function verificaColisaoRaquete() {
    if (xBol - raio < xRaquete + raqueteComprimento && yRaquete - raio < yRaquete + raqueteAltura && yBol + raio > yRaquete) {
      velBx *= -1
      raquetada.play()
    }
  }

  function colisaoRaquete(x, y) { 

  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBol, yBol, raio)
    if (colidiu){
      velBx *= -1
      raquetada.play()
    }
  }

  function movimentaRaqueteOp() { 
    fill("#BF3030")  
    velOpY = yBol - 70 - yRaqueteOp - raqueteComprimento / 2 - 30
      yRaqueteOp += velOpY
    }

  function colisaoRaqueteOpBiblioteca() { 

  colidiu = collideRectCircle(xRaqueteOp, yRaqueteOp, raqueteComprimento, raqueteAltura, xBol, yBol, raio)
    if (colidiu){
      velBx *= -1
    }
  }

  function placar() {
    stroke("red")
    textAlign(CENTER)
    textSize(16)
    fill("#daa520")
    rect(150, 10, 40, 20)
    fill("black")
    text(meusP, 170, 26)
    fill("#daa520" )
    rect(450, 10, 40, 20)
    fill("black")
    text(opP, 470, 26)
    if (meusP >= 0 && opP >= 0) {

    }
  }
    function pontos(){
    if (xBol > 590) {
      meusP += 1
      ponto.play()
      xBol = 300
      yBol = 200
      pausado = true
      pausaInicio = millis()
      }
      
    
    if (xBol < 10) {
      opP += 1
      ponto.play()
      xBol = 300
      yBol = 200
      pausado = true
      pausaInicio = millis()

      
      
    }
  }
}



if (res == false) {
  alert("Modo de dois jogadores será executado")
  alert("O jogador da esquerda usa o W e o S, já o da esquerda usa as setinhas")
  alert("Aproveite a experiência!")
  function draw() {
      background("#00FF48")
      mostraBolinha()
      movimentaBolinha()
      verificaColisao()
      mostraRaquete(xRaquete, yRaquete)
      movimentaMinhaRaquete()
      //verificaColisaoRaquete()
      colisaoRaquete(xRaquete, yRaquete)
      mostraRaquete(xRaqueteOp, yRaqueteOp)
      movimentaRaqueteOp()
      colisaoRaquete(xRaqueteOp, yRaqueteOp )
      placar()
      pontos()
  }

    function mostraBolinha() {
      stroke("white")
      line(300, 0, 300, 400)
      fill("red")
      circle(xBol, yBol, diametro)

  }

    function movimentaBolinha() {
      if (pausado) {
        if (millis() - pausaInicio >= pausaTempo) {
          pausado = false
        } else {
          return 
        }
      }
      
      xBol += velBx
      yBol += velBy
      
      }
  

   function verificaColisao() {
      if (xBol + raio> width || xBol - raio < 0) {
      velBx *= -1
    }

    if (yBol + raio > height || yBol - raio < 0) {
      velBy *= -1
    }
  }

  function mostraRaquete(x,y) {
    fill("#BF3030") 
    rect(x, y,raqueteComprimento,raqueteAltura)
    }

  function movimentaMinhaRaquete() {
    if(keyIsDown(87)) {
      yRaquete -= 10
    }

    if(keyIsDown(83)) {
      yRaquete += 10
    }
  }

  function verificaColisaoRaquete() {
    if (xBol - raio < xRaquete + raqueteComprimento && yRaquete - raio < yRaquete + raqueteAltura && yBol + raio > yRaquete) {
      velBx *= -1
      raquetada.play()
    }
  }

  function colisaoRaquete(x, y) { 

  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBol, yBol, raio)
    if (colidiu){
      velBx *= -1
      raquetada.play()
    }
  }

  function movimentaRaqueteOp() { 
      if(keyIsDown(UP_ARROW)) {
      yRaqueteOp -= 10
    }

    if(keyIsDown(DOWN_ARROW)) {
      yRaqueteOp += 10
    }
  }

  function colisaoRaqueteOpBiblioteca() { 

  colidiu = collideRectCircle(xRaqueteOp, yRaqueteOp, raqueteComprimento, raqueteAltura, xBol, yBol, raio)
    if (colidiu){
      velBx *= -1
    }
  }

  function placar() {
    stroke("red")
    textAlign(CENTER)
    textSize(16)
    fill("#daa520")
    rect(150, 10, 40, 20)
    fill("black")
    text(meusP, 170, 26)
    fill("#daa520" )
    rect(450, 10, 40, 20)
    fill("black")
    text(opP, 470, 26)
    if (meusP >= 0 && opP >= 0) {

    }
  }
    function pontos(){ 
    if (xBol > 590) {
      meusP += 1
      ponto.play()
      xBol = 300
      yBol = 200
      pausado = true
      pausaInicio = millis()

      
    }
    if (xBol < 10) {
      opP += 1
      ponto.play()
      xBol = 300
      yBol = 200
      pausado = true
      pausaInicio = millis()

    }
  }
}
