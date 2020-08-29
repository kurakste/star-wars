import Actor from "../../Actors";
import Events from '../../../../interfaces/Events';
import GameObjTypes from '../../../../interfaces/gameObjTypes';
import Game from '../../../mainGameUnit';
import GameFieldObject from '../../../../interfaces/GameFieldObject';

class Fire extends Actor {

  constructor(game: Game, xpos: number, ypos: number) {
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
  }

  clock() {
    this.ypos = this.ypos - this.vSpeed;
  }

  collisionHandler(o: GameFieldObject) {
    (o.type!== GameObjTypes.bullet) && this.game.removeObjectFromField(this);
  }
}

export default Fire;