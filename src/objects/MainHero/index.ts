import * as cryptoRandomString from 'crypto-random-string';
import Events from '../../interfaces/Events';
import GameObjTypes from '../../interfaces/gameObjTypes';
import imgPath from './mainHero2.png';
import imageLoader from '../../helpers/imageLoader';



  class MainHero {
  width: number = 10;
  height: number = 20;
  xpos: number;
  ypos: number;
  id: string;
  type: GameObjTypes;
  subscribes: Events[] = [];

  constructor() {
    this.subscribes = [Events.Keyboard, Events.Clock ];
    this.id = cryptoRandomString({length: 10});
    this.type = GameObjTypes.mainGameActor;

  };

  keyboardHandler(e: KeyboardEvent) {
    console.log('from Main hero keyboard handler');
  }

  async draw(ctx: CanvasRenderingContext2D) {
    const img: any = await imageLoader(imgPath);
    ctx.drawImage(img, 0, 0, 312, 312, 20, 20, 90, 90);
  }
}

export default MainHero;