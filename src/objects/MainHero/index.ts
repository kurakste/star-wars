import * as cryptoRandomString from 'crypto-random-string';
import Events from '../../interfaces/Events';
import GameObjTypes from '../../interfaces/gameObjTypes';
import imgPath from './mainHero2.png';
import imageLoader from '../../helpers/imageLoader';

  class MainHero {
  width: number = 10;
  height: number = 20;
  xpos: number = 0;
  ypos: number = 0;
  id: string;
  type: GameObjTypes;
  subscribes: Events[] = [];

  constructor() {
    this.subscribes = [Events.Keyboard, Events.Clock, Events.Draw ];
    this.id = cryptoRandomString({length: 10});
    this.type = GameObjTypes.mainGameActor;

  };

  clock(){
    //this.xpos =  this.xpos + 10;
    this.ypos =  this.ypos + 10;
    console.log('Main Hero clock', this.ypos);
  }

  keyboardHandler(e: KeyboardEvent) {
    console.log('from Main hero keyboard handler', e);
   
    if (e.type === 'keydown' && e.key ==='ArrowRight') {
      this.xpos = this.xpos + 10;
    }

    if (e.type === 'keydown' && e.key ==='ArrowLeft') {
      this.xpos = this.xpos - 10;
    }
  }

  async draw(ctx: CanvasRenderingContext2D) {
    console.log('main hero, draw');
    const img: any = await imageLoader(imgPath);
    ctx.drawImage(img, 0, 0, 312, 312, this.xpos, this.ypos, 90, 90);
  }
}

export default MainHero;