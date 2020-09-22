import Fire from './Fire';
import Game from '../../mainGameUnit';
import gameObjTypes from '../../Interfaces/gameObjTypes';
import GameFieldObject from '../../Interfaces/IGameFieldObject.t';

class EnemyFire extends Fire {
  constructor(game: Game, xpos: number, ypos: number) {
    super(game, xpos, ypos, -1);
    this.type = gameObjTypes.enemyBullet;
    this.setSpriteMatrix(this.spriteIndexInMatrix);
  }

  collisionHandler(o: GameFieldObject): void {
    (o.type!== gameObjTypes.enemyBullet)
      && (o.type!== gameObjTypes.mainHeroBullet) 
        && (o.type!== gameObjTypes.enemyTypeActor )
          && this.game.removeObjectFromField(this);
  }

}

export default EnemyFire;
