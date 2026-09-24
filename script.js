const cnv = document.querySelector("#mapa");
const ctx = cnv.getContext("2d");

//Definir tamanho do Canvas
cnv.width = innerWidth;
cnv.height = innerHeight;

//Definir a Sprite usada
const spriteMapa = new Image();
spriteMapa.src = "src/sprites/mapa.png";

//Desenhar na tela

class Sqm {
  constructor(contexto, x, y, w, h, sprite, sx, sy, sw, sh, px, py, pw, ph) {
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
}

//Mostrar o SQM
let meuSqm1 = new Sqm(ctx, 0, 0, 40, 40, spriteMapa, 0, 0, 40, 40, 0, 0, 40, 40);

console.log(meuSqm1);
