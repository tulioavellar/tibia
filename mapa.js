export default class Mapa {
  constructor(x, y, w, h, sqmSizeX, sqmSizeY, maxSqmX, maxSqmY) {
    this.sqmSizeX = sqmSizeX;
    this.sqmSizeY = sqmSizeY;
    this.maxSqmX = maxSqmX;
    this.maxSqmY = maxSqmY;
    
    this.position = {
      x: (innerWidth/2) - ((this.sqmSizeX*this.maxSqmX)/2),
      y: 60,
    };
    
    this.size = {
      w: this.sqmSizeX*this.maxSqmX,
      h: this.sqmSizeY*this.maxSqmY
    };
  }
  
