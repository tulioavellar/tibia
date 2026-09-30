export default class Mapa {
  constructor(ctx, sqmRenderSizeX, sqmRenderSizeY, maxSqmX, maxSqmY, borderColor, sqms, screenSizeW, screenSizeH) {
    this.ctx = ctx;
    this.borderColor = borderColor;
    this.sqmRenderSizeX = sqmRenderSizeX;
    this.sqmRenderSizeY = sqmRenderSizeY;
    this.maxSqmX = maxSqmX;
    this.maxSqmY = maxSqmY;
    this.sqms = sqms;
    this.screenSize = {
      width: screenSizeW,
      height: screenSizeH
    };
    this.position = {
      x: (innerWidth/2) - ((this.sqmRenderSizeX*this.maxSqmX)/2),
      y: (innerHeight/2) - ((this.sqmRenderSizeY*this.maxSqmY)/2)
    };
    this.size = {
      w: sqmRenderSizeX * maxSqmX,
      h: sqmRenderSizeY * maxSqmY
    };
  };

  //Desenhar borda  
  renderizaBorda() {
    this.ctx.strokeStyle = this.borderColor;
    this.ctx.strokeRect(this.position.x, this.position.y, this.size.w, this.size.h);
  };

  //Função Renderiza os SQM
  renderizaSqms() {
    this.sqms.forEach(sqm => {
      sqm.renderiza();
    });
  };
  //Função que define posição x, y do MapaView
  getPosition(){
    this.position.x = this.screenSize.width/2 - ((this.sqmRenderSizeX * this.maxSqmX) / 2);
    this.position.y = this.screenSize.height/2 - ((this.sqmRenderSizeY * this.maxSqmY) / 2);
  }
};  
