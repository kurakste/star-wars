import * as cryptoRandomString from 'crypto-random-string';
import Events from '../Interfaces/Events';
import gameObjTypes from '../Interfaces/gameObjTypes';
import imgPath from './mainSprites.png';
import Game from '../mainGameUnit';
import spriteMatrix from './spriteMatrix';
import IGameFieldObject from '../Interfaces/IGameFieldObject.t';
import IActorViewObject from '../Interfaces/IActorViewObject';

abstract class Actor {
  static spritesImg: HTMLImageElement;
  public id: string;
  public type: gameObjTypes;
  public subscribes: Events[] = [];
  public xpos: number;
  public ypos: number;
  public width: number;
  public height: number;
  public hSpeed:number;
  public vSpeed:number;
  protected spriteMatrix = spriteMatrix;
  protected spriteIndexInMatrix: number;
  protected spriteXOffset: number;
  protected spriteYOffset: number;
  protected spriteHeight: number;
  protected spriteWidth: number;
  protected collisions: IGameFieldObject[] = []; // TODO: is it useful?
  protected game: Game; 

  constructor(game: Game, xpos: number, ypos: number, width: number, height: number) {
    this.hSpeed = 0;
    this.vSpeed = 0;
    this.spriteIndexInMatrix = 0;
    this.game = game;
    this.xpos = xpos;
    this.ypos = ypos;
    this.width = width;
    this.height = height;
    this.subscribes = [ Events.Clock, Events.Draw, Events.Collision ];
    if (Actor.spritesImg === undefined) {
      Actor.spritesImg = new Image();
      Actor.spritesImg.src = imgPath;
      console.log('img:', Actor.spritesImg);
    }
    this.id = cryptoRandomString({length: 10});
  }

  public clock(): void { return }

  public getActorViewObject(): IActorViewObject {
      return {
        spriteXOffset: this.spriteXOffset, 
        spriteYOffset: this.spriteYOffset, 
        spriteWidth: this.spriteWidth, 
        spriteHeight: this.spriteHeight,
        xpos: this.xpos, 
        ypos: this.ypos, 
        imageWidth: this.width, 
        imageHeight: this.height
      }
  }

  public borderCollisionHandler(): void {
    // console.log('border collision method', this);
    this.game.removeObjectFromField(this);
  }

  public collisionHandler(o: IGameFieldObject): void {
    console.log(`collision: ${this.type} - ${this.id} with:`, o);
  }

  public setSpriteMatrix(index: number): void {
    try {
      // console.log(this.type);
      this.spriteXOffset = this.spriteMatrix[this.type][index].sx;
      this.spriteYOffset = spriteMatrix[this.type][index].sy;
      this.spriteWidth = spriteMatrix[this.type][index].width;
      this.spriteHeight = spriteMatrix[this.type][index].hight;
      this.width = spriteMatrix[this.type][index].width / 4;
      this.height = spriteMatrix[this.type][index].hight/ 4;
    } catch(e) {
      console.log('error', this, e, spriteMatrix)
    }
  }
  
  protected moveLeft(): void {
    this.xpos = this.xpos + this.hSpeed;
  }

  protected moveRight(): void {
    this.xpos = this.xpos - this.hSpeed;
  }
  
  protected moveDown(): void {
    this.ypos = this.ypos + this.vSpeed;
  }
  
  protected moveUp(): void {
    this.ypos = this.ypos - this.vSpeed;
  }

}
export default Actor;