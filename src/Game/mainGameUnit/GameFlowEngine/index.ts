import Enemy from '../../Actors/DamageableActors/Enemy';
import Game from '../../mainGameUnit';

class GameFlowEngine {
  private currentGameTime = 0;
  private lastEnemyBornTime: number;
  private enemyBornPeriod = 80;
  private game: Game;
  
  constructor(game: Game) {
    this.game = game;
    this.lastEnemyBornTime = 0;
  }

  gameTic(addObject: Function) {
    this.currentGameTime = this.currentGameTime + 1;
    // console.log('game tick!!!:', this.lastEnemyBornTime);
    this.addEnemy(addObject);
  }

  private addEnemy(cb: Function) {
    // console.log('before add new enemy start:', this.currentGameTime - this.lastEnemyBornTime);
    if(this.currentGameTime - this.lastEnemyBornTime >=this.enemyBornPeriod) {
      this.lastEnemyBornTime = this.currentGameTime;
      const xpos = Math.random()*400;
      const enemy = new Enemy(this.game, xpos, 20);
      // console.log('addEnemy start: new object added', enemy)
      cb(enemy);
      // console.log('addEnemy end:', enemy)
    }
  }

}

export default GameFlowEngine;