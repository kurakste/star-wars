import * as cryptoRandomString from 'crypto-random-string';
import Events from '../../interfaces/Events';
import GameObjTypes from '../../interfaces/gameObjTypes';
  
class Actor {
  public id: string;
  public type: GameObjTypes;
  public subscribes: Events[] = [];
  protected width: number;
  protected height: number;
  protected xpos: number;
  protected ypos: number;
  protected img: HTMLImageElement;

  constructor() {
    this.id = cryptoRandomString({length: 10});
  };

  public clock(){}

  public async draw(ctx: CanvasRenderingContext2D) {
    console.log('main hero, draw');
    ctx.drawImage(this.img, 0, 0, 90, 90, this.xpos, this.ypos, 90, 90);
  }

  

}

export default Actor;