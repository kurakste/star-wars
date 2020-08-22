import Events from '../../../interfaces/Events';
import GameObjTypes from '../../../interfaces/gameObjTypes';
import imgPath from './ships_2.jpg';
import Actor from '../Actors';

  class MainHero extends Actor{
  private vSpeed = 10;
  private hSpeed = 10;

  constructor(xpos: number, ypos: number) {
    super();
    this.width = 10;
    this.height = 20;
    this.xpos = xpos;
    this.ypos = ypos;
    this.subscribes = [Events.Keyboard, Events.Clock, Events.Draw ];
    this.type = GameObjTypes.mainGameActor;
    this.img = new Image();
    this.img.src = imgPath;
  };

  public keyboardHandler(e: KeyboardEvent) {
    console.log('from Main hero keyboard handler', e);
    e.type === 'keydown' && e.key ==='ArrowRight' && this.moveLeft();
    e.type === 'keydown' && e.key ==='ArrowLeft' && this.moveRight();
    e.type === 'keydown' && e.key ==='ArrowUp' && this.moveUp();
    e.type === 'keydown' && e.key ==='ArrowDown' && this.moveDown();
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