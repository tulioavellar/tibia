const cnv = document.querySelector("#mapa");
const ctx = cnv.getContext("2d");

//Definir tamanho do Canvas
cnv.width = innerWidth;
cnv.height = innerHeight;

//Desenhar na tela
ctx.fillRect(0,0,40,40);
