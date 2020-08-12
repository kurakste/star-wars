
import imageLoader from '../../helpers/imageLoader';
import imgPath from '../../assets/img/mainHero2.png';
import Game from '../../interfaces/Game';
import GameFieldObject from '../../interfaces/GameFieldObject';

class mainGame implements Game {
  width: number;
  height: number;
  ctx: any;
  keyboardEventsListeners:GameFieldObject[] = [];

  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
  }

  async initGame(): Promise<void> {
    const canvas: HTMLCanvasElement = this._addCanvasElement();
    this.ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
    console.log('init game done');
  }

  clock():void {
    //console.log('clock');
  }

  keyboardHandler(e: KeyboardEvent): void {
   // console.log('keyboard event:', e);
    console.log('keyboardEventsListeners', this.keyboardEventsListeners);

    this.keyboardEventsListeners.forEach((i) => i.keyboardHandler(e));
  }

  async draw(): Promise<void> {
    const img: any = await imageLoader(imgPath);
    this.ctx.drawImage(img, 0, 0, 312, 312, 20, 20, 90, 90);
  }

  addObjectOnField(o: GameFieldObject): void {
    const isDrawable = 
      Object.prototype.hasOwnProperty.call(o, 'draw') && typeof o.draw ==='function';
    const isKeyboardListener = 
    "keyboardHandler" in o && typeof o.keyboardHandler ==='function';
    isKeyboardListener && this._addNewKeyboardListener(o);
    console.log('is isKeyboardListener:', isKeyboardListener, o);
 }

 _addNewKeyboardListener(o: GameFieldObject): void {
  this.keyboardEventsListeners.push(o);
  console.log('_addNewKeyboardListener:', this.keyboardEventsListeners);

 }

  _addCanvasElement():HTMLCanvasElement {
    const can:HTMLCanvasElement = document.createElement('canvas');
    can.width = this.width;
    can.height = this.height;
    can.style.background = 'black';
    return can;
  }

}

export default mainGame;