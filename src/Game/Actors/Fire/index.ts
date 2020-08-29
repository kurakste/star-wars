import Actor from "../Actors";
import Events from '../../../interfaces/Events';
import GameObjTypes from '../../../interfaces/gameObjTypes';
import Game from '../../mainGameUnit';
import GameFieldObject from '../../../interfaces/GameFieldObject';

class Fire extends Actor {

  //public demage: number = 300;
  private direction: number;
  constructor(game: Game, xpos: number, ypos: number, direction: number) {
    super(game);
    this.width = 40;
    this.height = 40;
    this.xpos = xpos;
    this.ypos = ypos;
    this.subscribes = [Events.Clock, Events.Draw, Events.Collision ];
    this.type = GameObjTypes.bullet;
    this.spriteXOffset = 369
    this.spriteYOffset = 612;
    this.spriteHeight = 40;
    this.spriteWidth = 40;
    this.vSpeed = 10;
    this.direction = direction;
  }

  clock() {
    this.ypos = this.ypos - this.vSpeed * this.direction;
  }

  collisionHandler(o: GameFieldObject) {
    (o.type!== GameObjTypes.bullet) && this.game.removeObjectFromField(this);
  }
}

export default Fire;