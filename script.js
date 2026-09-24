import Sqm from "./sqm.js";

const cnv = document.querySelector("#mapa");
const ctx = cnv.getContext("2d");

//Definir tamanho do Canvas
cnv.width = innerWidth;
cnv.height = innerHeight;

//Definir a Sprite usada
const spriteMapa = new Image();
spriteMapa.src = "src/sprites/mapa/sprite-mapa.jpg";

//Desenhar na tela

function startGame() {

}

//Mostrar o SQM
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
