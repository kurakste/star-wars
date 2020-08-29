import Controller from "../Controller";
import GameFieldObject from '../../../../interfaces/GameFieldObject';
import Game from '../../../mainGameUnit';
import checkCollision from './checkCollisionFunction';
import directions from '../../../../interfaces/Direction';
//import collides from "./checkCollisionFunction";

class CollisionController extends Controller {
  protected game: Game;

  constructor(game: Game) {
    super();
    this.game = game;
  }

  eventHandler(): void {
    //console.log('collision controller', this.eventsListeners);
    this.eventsListeners.map((o, i, arr) => {
      if (this.checkObjectPositionForCollionWitGameFieldBorder(o)) {
        const dir: directions = this.getBorderCollisionDirection(o);
        o.borderCollisionHandler(dir);
      } 
        const shortArr = arr.slice(i+1);
        shortArr.map(oo => {
          const collision = this.checkObjectForCollision(o, oo);
          if (collision) {
            o.collisionHandler(oo);
            oo.collisionHandler(o);
          }
        });
    });
  }

  protected getBorderCollisionDirection(o: GameFieldObject): directions {
    let dir: directions =directions.right;
    if (o.xpos<=0) dir = directions.left;
    if (o.xpos + o.width >= this.game.width) dir = directions.right;
    if (o.ypos<=0) dir = directions.up;
    if (o.ypos + o.height >= this.game.height) dir = directions.down
    return dir
  }

  protected checkObjectPositionForCollionWitGameFieldBorder(o: GameFieldObject): boolean {
    const res = (o.xpos<=0) || (o.xpos + o.width >= this.game.width) 
    || o.ypos<=0 || (o.ypos + o.height >= this.game.height);
    return res;
  }


  protected checkObjectForCollision(o1: GameFieldObject, o2: GameFieldObject) {
    const ax0 = o1.xpos, ay0 = o1.ypos, 
          ax1 = ax0 + o1.width, ay1 = ay0 + o1.height;
    const bx0 = o2.xpos, by0 = o2.ypos,
          bx1 = bx0 + o2.width, by1 = by0 + o2.height;

    const isCollision = checkCollision(
      ax0, ay0, ax1, ay1,
      bx0, by0, bx1, by1
    );

    isCollision && console.log('collision', isCollision);//, o1, o2);
    return isCollision;
  }

}

export default CollisionController;