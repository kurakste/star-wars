import DamageableActors from '../DamageableActors';
import GameObjTypes from '../../../Interfaces/gameObjTypes';
import Game from '../../../mainGameUnit';
import Fire from '../../Fire/EnemyFire';
import { calcEnemySteps } from './calcEnemySteps';
class Enemy extends DamageableActors {

  private clockBeforeFire = 50;
  protected level: number;

  constructor(game: Game, xpos: number, ypos: number, health: number, spriteMatrixIndex: number) {
    super(game, xpos, ypos, 50, 50);
    this.type = GameObjTypes.enemyTypeActor;
    this.spriteXOffset = 190;
    this.spriteYOffset = 0;
    this.spriteHeight = 90;
    this.spriteWidth = 100;
    this.vSpeed = 5;
    this.hSpeed = 5;
    this.level = game.gameState.level;
    this.health = health;
    this.maxHealth = health;
    this.setSpriteMatrix(spriteMatrixIndex); // TODO: check is this useful this.spriteIndexInMatrix
    console.log('AAA++++++++++', spriteMatrixIndex)
  }

  public clock(): void {
    this.move();
    this.generateFire()
  }

  protected move():void {
    const {dx, dy} = calcEnemySteps(this.level, {x: this.xpos, y: this.ypos});
    this.ypos = this.ypos + dy;
    const border = (this.xpos + dx >= this.game.width - this.width || this.xpos + dx <= 5);
    if (border) return;
    this.xpos = this.xpos + dx;
  }

  private generateFire(){
    if (this.clockBeforeFire<=0) {
      const fire = new Fire(this.game, this.xpos, this.ypos + this.height + 2);
      this.game.addObjectOnField(fire);
      this.clockBeforeFire = 50;
    } else {
      --this.clockBeforeFire;
    }
  }
}

export default Enemy;

