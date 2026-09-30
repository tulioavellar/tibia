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
let sqmRenderSizeX = 25;
let sqmRenderSizeY = 25;

//Definir tela visual do jogo
let maxSqmX = 15;
let maxSqmY = 11;

//Definir o Mapa View
let todosSqms = [];
let borderColor = "#ccc";

//Criar o Mapa View
let mapaView = new Mapa(ctx, sqmRenderSizeX, sqmRenderSizeY, maxSqmX, maxSqmY, borderColor, todosSqms, innerWidth, innerHeight);

//Definir a Sprite usada
const spriteMapa = new Image();
spriteMapa.src = "src/sprites/mapa/sprite-mapa.jpg";

function createMapView() {
   //Loop para criar os SQMS
  for (let i=0; i < maxSqmX; i++) {
    for (let j=0; j < maxSqmY; j++){
      let mapaViewPosX = mapaView.position.x;
      let mapaViewPosY = mapaView.position.y;
      let colunaAtual = i;
      let linhaAtual = j;
      let renderSizeX = mapaView.sqmRenderSizeX;
      let renderSizeY = mapaView.sqmRenderSizeY;
      
      //Cálculo do SQM
      let posXSqm = mapaViewPosX + (colunaAtual * renderSizeX);
      let posYSqm = mapaViewPosY + (linhaAtual * renderSizeY);
      let posRenderSqmX = 72;
      let posRenderSqmY = 72;
       
      //Criar variável de SQM
      let meuSqm = new Sqm(ctx, spriteMapa, posRenderSqmX, posRenderSqmY, sqmSizeX, sqmSizeY, posXSqm, posYSqm, sqmRenderSizeX, sqmRenderSizeY,
      mapaViewPosX, mapaViewPosY, colunaAtual, linhaAtual, renderSizeX, renderSizeY);
      //Adiciona meuSqm no array
      mapaView.sqms.push(meuSqm);
     };
  };
  //Fim do Loop
};

//Inicia o jogo
function startGame() {
     
   //Criar o MapaView de SQMs
   createMapView();
   //Inicia  função loopGame
   loopGame();
   
};

//Loop Game
function loopGame() {
   //Exibir os SQMs do MapaView
   mapaView.renderizaSqms();
   mapaView.renderizaBorda();
   requestAnimationFrame(loopGame);
}

//Carregar o jogo
spriteMapa.onload = function () {
  console.log("Carregou o jogo");
  startGame();
};

//Função resize da tela
addEventListener("resize", function() {
   console.log("Alterou Resolução");

   //Atualizar tamanho da tela
   mapaView.screenSize.width = innerWidth;
   mapaView.screenSize.height = innerHeight;
   mapaView.getPosition();

   //Atualizar posição do mapaview nos SQM
   mapaView.sqms.forEach(sqm => {
      sqm.renderAtual.posX = mapaView.position.x;
      sqm.renderAtual.posY = mapaView.position.y;
   });
   
   //Definir tamanho da tela
   cnv.width = innerWidth;
   cnv.height = innerHeight;
});


