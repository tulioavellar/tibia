export default class Mapa {
  constructor(ctx, x, y, w, h, sqmSizeX, sqmSizeY, maxSqmX, maxSqmY, borderColor, sqms) {
    this.ctx = ctx;
    this.borderColor = borderColor;
    this.sqmSizeX = sqmSizeX;
    this.sqmSizeY = sqmSizeY;
    this.maxSqmX = maxSqmX;
    this.maxSqmY = maxSqmY;
    this.sqms = sqms;
    this.position = {
      x: (innerWidth/2) - ((this.sqmSizeX*this.maxSqmX)/2),
      y: y
    };
    
    this.size = {
      w: this.sqmSizeX*this.maxSqmX,
      h: this.sqmSizeY*this.maxSqmY
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
