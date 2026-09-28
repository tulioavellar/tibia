import Sqm from "./sqm.js";
import Mapa from "./mapa.js";

//Canvas
const cnv = document.querySelector("#tela");
const ctx = cnv.getContext("2d");

//Definir tamanho do Canvas
cnv.width = innerWidth;
cnv.height = innerHeight;

//Definições iniciais
let sqmSizeX = 72;
let sqmSizeY = 72;

//Definir tela visual do jogo
let maxSqmX = 15;
let maxSqmY = 11;

//Definir o Mapa View
let borderColor = "#ccc";
let mapaView = new Mapa(ctx, 0, 70, 0, 0, sqmSizeX, sqmSizeY, maxSqmX, maxSqmY, borderColor);
mapaView.draw();

//Definir a Sprite usada
const spriteMapa = new Image();
spriteMapa.src = "src/sprites/mapa/sprite-mapa.jpg";

//Inicia o jogo
function startGame() {
}

//Criar variável de SQM
let meuSqm1 = new Sqm(ctx, 0, 0, sqmSizeX, sqmSizeY, spriteMapa, 72, 72, sqmSizeX, sqmSizeY, 0, 0, sqmSizeX, sqmSizeY);
meuSqm1.renderiza();

//Carregar o jogo
spriteMapa.onload = function () {
  console.log("Carregou o jogo");
  startGame();
}
