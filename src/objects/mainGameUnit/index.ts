import imageLoader from '../../helpers/imageLoader';
import imgPath from '../../assets/img/mainHero2.png';
import Game from '../../interfaces/Game';
import KeyboardController from './Controllers/KeyboardController';
import ClockController from './Controllers/ClockController'
import GameFieldObject from '../../interfaces/GameFieldObject';
import Events from '../../interfaces/Events';


class mainGame implements Game {
  width: number;
  height: number;
  ctx: any;
  keyboardController = new KeyboardController();
  clockController = new ClockController();
  events = Events;
  

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

  clock = () => {
    this.clockController.eventHandler();
  }

  keyboardHandler(e: KeyboardEvent): void {
    this.keyboardController.eventHandler(e);  
  }

  async draw(): Promise<void> {
    const img: any = await imageLoader(imgPath);
    this.ctx.drawImage(img, 0, 0, 312, 312, 20, 20, 90, 90);
  }

  addObjectOnField(o: GameFieldObject): void {
    console.log('addObjectOnField', o.subscribes)
    o.subscribes.map(el => this.subscriber(el, o)) 
 }

  subscriber(el:Events, obj:GameFieldObject){
    console.log('subscriber', el, obj);
    switch(el) {
      case Events.Keyboard:
        this.keyboardController.addNewEventListener(obj);
        break
    }
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