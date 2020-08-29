import Events from '../../../interfaces/Events';
import GameObjTypes from '../../../interfaces/gameObjTypes';
import Actor from '../Actors';
import Fire from './Fire';
import MainGameUnit from '../../mainGameUnit';

  class MainHero extends Actor{
    game: MainGameUnit;

  constructor(game: MainGameUnit, xpos: number, ypos: number, ) {
    super(game);
    this.game = game;
    this.width = 50;
    this.height = 50;
    this.xpos = xpos;
    this.ypos = ypos;
    this.subscribes = [
      Events.Keyboard, 
      Events.Clock, 
      Events.Draw, 
      Events.Collision
    ];
    this.type = GameObjTypes.mainGameActor;
    this.spriteXOffset = 0;
    this.spriteYOffset = 0;
    this.spriteHeight = 90;
    this.spriteWidth = 100;
    this.vSpeed = 10;
    this.hSpeed = 10;
  };

  public keyboardHandler(e: KeyboardEvent) {
    //console.log('from Main hero keyboard handler', e);
    e.type === 'keydown' && e.key ==='ArrowRight' && this.moveLeft();
    e.type === 'keydown' && e.key ==='ArrowLeft' && this.moveRight();
    e.type === 'keydown' && e.key ==='ArrowUp' && this.moveUp();
    e.type === 'keydown' && e.key ==='ArrowDown' && this.moveDown();
    e.type === 'keydown' && e.key ===' ' && this.fire();
  }

  fire() {
    console.log('fire');
    const fire = new Fire(this.game, this.xpos, this.ypos);
    this.game.addObjectOnField(fire);
  }

  

}

export default MainHero;