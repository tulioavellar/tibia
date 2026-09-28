export default class Mapa {
  constructor(ctx, x, y, w, h, sqmRenderSizeX, sqmRenderSizeY, maxSqmX, maxSqmY, borderColor, sqms) {
    this.ctx = ctx;
    this.borderColor = borderColor;
    this.sqmRenderSizeX = sqmRenderSizeX;
    this.sqmRenderSizeY = sqmRenderSizeY;
    this.maxSqmX = maxSqmX;
    this.maxSqmY = maxSqmY;
    this.sqms = sqms;
    this.position = {
      x: (innerWidth/2) - ((this.sqmRenderSizeX*this.maxSqmX)/2),
      y: (innerHeight/2) - ((this.sqmRenderSizeY*this.maxSqmY)/2
    };
    
    this.size = {
      w: sqmRenderSizeX,
      h: sqmRenderSizeY
    };
  }

  //Desenhar borda  
  renderizaBorda() {
    this.ctx.strokeStyle = this.borderColor;
    this.ctx.strokeRect(this.position.x, this.position.y, this.size.w, this.size.h);
  }

  //Função Renderiza os SQM
  renderizaSqms() {
    console.log(this.sqms);
  }
}  
