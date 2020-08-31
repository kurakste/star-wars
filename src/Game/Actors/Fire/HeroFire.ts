import Fire from './Fire';
import Game from '../../mainGameUnit';
import gameObjTypes from '../../Interfaces/gameObjTypes';


class HeroFire extends Fire {
  constructor(game: Game, xpos: number, ypos: number) {
    super(game, xpos, ypos, 1);
    this.type = gameObjTypes.mainHeroBullet;
    this.setSpriteMatrix(this.spriteIndexInMatrix);
  }

}

export default HeroFire;
