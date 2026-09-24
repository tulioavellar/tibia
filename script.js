const cnv = document.querySelector("#mapa");
const ctx = cnv.getContext("2d");

//Definir tamanho do Canvas
cnv.width = innerWidth;
cnv.height = innerHeight;

//Definir a Sprite usada
const spriteMapa = new Image();
spriteMapa.src = "src/sprites/mapa/sprite-mapa.jgp";

//Desenhar na tela

class Sqm {
  constructor(contexto, x, y, w, h, sprite, sx, sy, sw, sh, px, py, pw, ph) {
    this.contexto = contexto;
    this.sprite = {
      img: sprite,
      x: sx,
      y: sy,
      w: sw,
      h: sh,
      px: px,
      py: py,
      pw: pw,
      ph: ph
    };
    
    this.position = {
      x: 0,
      y: 0
    };
    
    this.size = {
      w: w,
      h: h
    };
  }
  //Renderizar o SQM
  rederiza() {
    this.contexto.drawImage(this.sprite.img, this.sprite.x, this.sprite.y, this.sprite.w, this.sprite.h, this.sprite.px, this.sprite.py, this.sprite.pw, this.sprite.ph);
  }
}

function startGame() {

}

//Mostrar o SQM
let meuSqm1 = new Sqm(ctx, 0, 0, 40, 40, spriteMapa, 0, 0, 40, 40, 0, 0, 40, 40);

console.log(meuSqm1);

meuSqm1.renderiza();

//Carregar o jogo
spriteMapa.onload = function () {
  console.log("Carregou o jogo");
  startGame();
}
