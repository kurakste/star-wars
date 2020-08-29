import * as cryptoRandomString from 'crypto-random-string';
import Events from '../../interfaces/Events';
import GameObjTypes from '../../interfaces/gameObjTypes';
import imgPath from './hero_sprites.jpg';
import GameFieldObject from '../../interfaces/GameFieldObject';
import Game from '../mainGameUnit';
import directions from '../../interfaces/Direction';
  
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
  protected collisions: GameFieldObject[] = [];
  protected game: Game; 

  constructor(game: Game, xpos: number, ypos: number, width: number, height: number) {
    this.game = game;
    this.xpos = xpos;
    this.ypos = ypos;
    this.width = 40;
    this.height = 40;
    this.subscribes = [ Events.Clock, Events.Draw, Events.Collision ];
    if (Actor.spritesImg === undefined) {
      Actor.spritesImg = new Image();
      Actor.spritesImg.src = imgPath;
    }
    this.id = cryptoRandomString({length: 10});
  };

  public clock(){}

  public async draw(ctx: CanvasRenderingContext2D) {
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

  public borderCollisionHandler(dir: directions) {
    // console.log('border collision method', this);
    this.game.removeObjectFromField(this);
  }

  public collisionHandler(o: GameFieldObject) {
    console.log('COLLISION HANDLER');
    // console.log(`collision: ${this.type} - ${this.id}`);
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