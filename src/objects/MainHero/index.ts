import * as cryptoRandomString from 'crypto-random-string';
import Events from '../../interfaces/Events';
import GameObjTypes from '../../interfaces/gameObjTypes';
import imgPath from './ships_2.jpg';
  class MainHero {
  width: number = 10;
  height: number = 20;
  xpos: number = 0;
  ypos: number = 0;
  id: string;
  vSpeed = 10;
  hSpeed = 10;
  type: GameObjTypes;
  subscribes: Events[] = [];
  img: HTMLImageElement;

  constructor() {
    this.subscribes = [Events.Keyboard, Events.Clock, Events.Draw ];
    this.id = cryptoRandomString({length: 10});
    this.type = GameObjTypes.mainGameActor;
    this.img = new Image();
    this.img.src = imgPath;
  };


  clock(){
    //this.xpos =  this.xpos + 10;
    console.log('Main Hero clock', this.ypos);
  }

  keyboardHandler(e: KeyboardEvent) {
    console.log('from Main hero keyboard handler', e);
    e.type === 'keydown' && e.key ==='ArrowRight' && this.moveLeft();
    e.type === 'keydown' && e.key ==='ArrowLeft' && this.moveRight();
    e.type === 'keydown' && e.key ==='ArrowUp' && this.moveUp();
    e.type === 'keydown' && e.key ==='ArrowDown' && this.moveDown();
  }

  async draw(ctx: CanvasRenderingContext2D) {
    console.log('main hero, draw');
    ctx.drawImage(this.img, 0, 0, 90, 90, this.xpos, this.ypos, 90, 90);
  }

  private moveLeft() {
    this.xpos = this.xpos + this.hSpeed;
  }

  private moveRight() {
    this.xpos = this.xpos - this.hSpeed;
  }

  private moveDown() {
    this.ypos = this.ypos + this.vSpeed;
  }

  private moveUp() {
    this.ypos = this.ypos - this.vSpeed;
  }

}

export default MainHero;