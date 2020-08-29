import Actor from '../Actors';
import Events from '../../../interfaces/Events';
import GameObjTypes from '../../../interfaces/gameObjTypes';
import Game from '../../mainGameUnit';
class Enemy extends Actor {

  constructor(game: Game, xpos: number, ypos: number) {
    super(game);
    this.width = 50;
    this.height = 50;
    this.xpos = xpos;
    this.ypos = ypos;
    this.subscribes = [ Events.Clock, Events.Draw, Events.Collision ];
    this.type = GameObjTypes.enemyTypeActor;
    this.spriteXOffset = 190;
    this.spriteYOffset = 0;
    this.spriteHeight = 90;
    this.spriteWidth = 100;
    this.vSpeed = 1;
    this.hSpeed = 1;
  };

  public clock(){
    this.ypos = this.ypos + this.vSpeed;
  }

}

export default Enemy;

