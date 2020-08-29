import Actor from '../Actors';
import Events from '../../../interfaces/Events';
import GameObjTypes from '../../../interfaces/gameObjTypes';
import GameFieldObject from '../../../interfaces/GameFieldObject';
import Game from '../../mainGameUnit';
import gameObjTypes from '../../../interfaces/gameObjTypes';
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
    this.vSpeed = 5;
    this.hSpeed = 5;
  };

  public clock(){
    this.ypos = this.ypos + this.vSpeed;
  }

  public collisionHandler(o: GameFieldObject) {
    console.log('collision with:', o.type);
    if (o.type === gameObjTypes.bullet) this.game.removeObjectFromField(this);

  }


}

export default Enemy;

