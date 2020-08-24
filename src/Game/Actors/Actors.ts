import * as cryptoRandomString from 'crypto-random-string';
import Events from '../../interfaces/Events';
import GameObjTypes from '../../interfaces/gameObjTypes';
import imgPath from './hero_sprites.jpg';

  
class Actor {
  static spritesImg: HTMLImageElement;
  public id: string;
  public type: GameObjTypes;
  public subscribes: Events[] = [];
  public xpos: number;
  public ypos: number;
  public width: number;
  public height: number;
  protected spriteXOffset: number;
  protected spriteYOffset: number;
  protected spriteHeight: number;
  protected spriteWidth: number;
  protected hSpeed:number  = 0;
  protected vSpeed:number = 0;


  constructor() {
    if (Actor.spritesImg === undefined) {
      Actor.spritesImg = new Image();
      Actor.spritesImg.src = imgPath;
      console.log('img from constructor', Actor.spritesImg);
    }
    this.id = cryptoRandomString({length: 10});
  };

  public clock(){}

  public async draw(ctx: CanvasRenderingContext2D) {
    // console.log('Actor draw', this);
    ctx.drawImage(
      Actor.spritesImg, 
      this.spriteXOffset, 
      this.spriteYOffset, 
      this.spriteWidth, 
      this.spriteHeight,
      this.xpos, 
      this.ypos, 
      this.width, 
      this.height
      );
  }
  protected moveLeft() {
    this.xpos = this.xpos + this.hSpeed;
  }

  protected moveRight() {
    this.xpos = this.xpos - this.hSpeed;
  }
  
  protected moveDown() {
    this.ypos = this.ypos + this.vSpeed;
  }
  
  protected moveUp() {
    this.ypos = this.ypos - this.vSpeed;
  }
}
export default Actor;