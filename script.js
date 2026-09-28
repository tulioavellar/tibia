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
let sqmRenderSizeX = 32;
let sqmRenderSizeY = 32;

//Definir tela visual do jogo
let maxSqmX = 15;
let maxSqmY = 11;
let totalSqms = maxSqmX * maxSqmY;

//Definir o Mapa View
let todosSqms = [];
let borderColor = "#ccc";
let mapaView = new Mapa(ctx, 0, 70, 0, 0, sqmRenderSizeX, sqmRenderSizeY, maxSqmX, maxSqmY, borderColor, todosSqms);
mapaView.renderizaBorda();

//Definir a Sprite usada
const spriteMapa = new Image();
spriteMapa.src = "src/sprites/mapa/sprite-mapa.jpg";

//Inicia o jogo
function startGame() {
  //Loop para criar os SQMS
  for (let i=0; i < totalSqms; i++) {
    let posXSqm = 0;
    let posYSqm = 0;
    let posRenderSqmX = 72;
    let posRenderSqmY = 72;
  
    //Criar variável de SQM
    let meuSqm = new Sqm(ctx, posXSqm, posYSqm, sqmSizeX, sqmSizeY, spriteMapa, posRenderSqmX, posRenderSqmY, sqmSizeX, sqmSizeY, posXSqm, posYSqm, sqmRenderSizeX, sqmRenderSizeY);

    mapaView.sqms.push(meuSqm);
  }
  //Fim do Loop
  mapaView.renderizaSqms();
  
}

//Carregar o jogo
spriteMapa.onload = function () {
  console.log("Carregou o jogo");
  startGame();
}
