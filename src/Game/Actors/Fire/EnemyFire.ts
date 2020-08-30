import Fire from './Fire';
import Game from '../../mainGameUnit';
import gameObjTypes from '../../../interfaces/gameObjTypes';


class EnemyFire extends Fire {
  constructor(game: Game, xpos: number, ypos: number) {
    super(game, xpos, ypos, -1);
    this.type = gameObjTypes.enemyBullet;
    this.setSpriteMatrix(this.spriteIndexInMatrix);
  }

}

export default EnemyFire;
