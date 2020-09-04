import Enemy from '../../Actors/DamageableActors/Enemy';
import Game from '../../mainGameUnit';
import MainHero from '../../Actors/DamageableActors/Hero';

class GameFlowEngine {
  public id = 'gameFlowEngine';
  public type = 'gameFlowEngine';
  private currentGameTime = 0;
  private lastEnemyBornTime: number;
  private enemyBornPeriod = 80;
  private game: Game;
  
  constructor(game: Game) {
    this.game = game;
    this.lastEnemyBornTime = 0;
  }

  public gameTic(addObject: CallableFunction): void {
    this.currentGameTime = this.currentGameTime + 1;
    this.addEnemy(addObject);
  }

  public keyboardHandler(e: KeyboardEvent): void {
    return
  }
  // TODO: ---
  public gameOver(): void { return }
  // TODO: --- 
  public restartGame(): void { return }

  private addEnemy(cb: CallableFunction): void {
    if(this.currentGameTime - this.lastEnemyBornTime >=this.enemyBornPeriod) {
      this.lastEnemyBornTime = this.currentGameTime;
      const xpos = Math.random()*400;
      const enemy = new Enemy(this.game, xpos, 20);
      cb(enemy);
    }
  }

}

export default GameFlowEngine;