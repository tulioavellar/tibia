import Sqm from "./sqm.js";

const cnv = document.querySelector("#tela");
const ctx = cnv.getContext("2d");

//Definir tamanho do Canvas
cnv.width = innerWidth;
cnv.height = innerHeight;

//Definições iniciais
let sqmSizeX = 32;
let sqmSizeY = 32;

//Definir tela visual do jogo
let maxSqmX = 15;
let maxSqmY = 11;
let mapaView = {
  position: {
    x: (innerWidth/2) - ((sqmSizeX*maxSqmX)/2),
    y: 60
  },
  size: {
    w: sqmSizeX*maxSqmX,
    h: sqmSizeY*maxSqmY
  }
};
ctx.strokeStyle = "#ccc";
ctx.fillRect(mapaView.position.x, mapaView.position.y, mapaView.size.w, mapaView.size.h);
ctx.strokeRect(mapaView.position.x, mapaView.position.y, mapaView.size.w, mapaView.size.h);

//Definir a Sprite usada
const spriteMapa = new Image();
spriteMapa.src = "src/sprites/mapa/sprite-mapa.jpg";

//Desenhar na tela

function startGame() {

}

//Criar variável de SQM
let meuSqm1 = new Sqm(ctx, 0, 0, 32, 32, spriteMapa, 0, 0, 32, 32, 0, 0, 32, 32);
let meuSqm2 = new Sqm(ctx, 0, 0, 32, 32, spriteMapa, 0, 0, 32, 32, 64, 64, 32, 32);

console.log(meuSqm1);

meuSqm1.renderiza();
meuSqm2.renderiza();

//Carregar o jogo
spriteMapa.onload = function () {
  console.log("Carregou o jogo");
  startGame();
}
