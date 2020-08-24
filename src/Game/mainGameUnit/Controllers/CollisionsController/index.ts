import Controller from "../Controller";
import GameFieldObject from '../../../../interfaces/GameFieldObject';
import Game from '../../../mainGameUnit';

class CollisionController extends Controller {
  protected game: Game;

  constructor(game: Game) {
    super();
    this.game = game;
  }

  eventHandler(): void {
    console.log('collision controller', this.eventsListeners);
    this.eventsListeners.map(o => {
      this.checkObjectPositionForCollionWitGameFieldBorder(o) 
        && this.game.removeObjectFromField(o); 
    });
  }

  protected checkObjectPositionForCollionWitGameFieldBorder(o: GameFieldObject): boolean {
    const res = (o.xpos<=0) || (o.xpos + o.width >= this.game.width) 
    || o.ypos<=0 || (o.ypos + o.height >= this.game.height);
    return res;
  }

  protected checkObjectForCollision(o1: GameFieldObject, o2: GameFieldObject) {
    return this.checkCollision(
      o1.xpos, o1.ypos, o1.width, o1.height,
      o2.xpos, o2.ypos, o2.width, o2.height,
    )
  }

  protected checkCollision(
    ax: number, ay: number, aw: number, ah: number, 
    bx: number, by: number, bw: number, bh: number
    ): boolean {
      const bx1 = bx + bw; 
      const by1 = by + bh;
      const ax1 = ax + aw;
      const ay1 = ay + ah;
      const collision = ( ay < by1 || ay1 > by || ax1 < bx || ax > bx1 );

      return collision;
  }
}

export default CollisionController;