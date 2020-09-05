import Actor from "../Actors";
import Events from '../../Interfaces/Events';
import GameObjTypes from '../../Interfaces/gameObjTypes';
import Game from '../../mainGameUnit';
import GameFieldObject from '../../Interfaces/IGameFieldObject.t';

abstract class Fire extends Actor {

  public demage: number;
  private direction: number;
  constructor(game: Game, xpos: number, ypos: number, direction: number) {
    super(game, xpos, ypos, 40, 40);
    this.demage = 200;
    this.subscribes = [Events.Clock, Events.Draw, Events.Collision ];
    this.vSpeed = 10;
    this.direction = direction;
  }

  clock(): void {
    this.ypos = this.ypos - this.vSpeed * this.direction;
  }

  collisionHandler(o: GameFieldObject): void {
    (o.type!== GameObjTypes.enemyBullet) && this.game.removeObjectFromField(this);
  }
}

export default Fire;