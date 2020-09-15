import Game from '../../mainGameUnit';
import IGameFieldObject from '../../Interfaces/IGameFieldObject.t';
import gameObjectTypes from '../../Interfaces/gameObjTypes';
import EnemyFactory from '../../Actors/DamageableActors/Enemy/EnemyFactory';

class GameFlowEngine {
  public id = 'gameFlowEngine';
  public type = 'gameFlowEngine';
  private currentGameTime = 0;
  private lastEnemyBornTime: number;
  private enemyBornPeriod = 50;
  private game: Game;
  
  constructor(game: Game) {
    this.game = game;
    this.lastEnemyBornTime = 0;
  }

  public gameTic(): void {
    this.currentGameTime = this.currentGameTime + 1;
    this.addEnemyLogic();
  }

  public keyboardHandler(e: KeyboardEvent): void {
    e.key === 'n' 
      &&  e.type ==='keyup' 
        && this.newGame();
  }

  public objectWasDestroyed(o: IGameFieldObject): void {
    console.log('was destroyed: ', o);
    if (o.type === gameObjectTypes.enemyTypeActor) this.enemyWasDestroyed(o);
  }

  public newGame(): void {
    this.game.newGame();
  }
  
  public restartGame(): void { return }

  protected enemyWasDestroyed(o: IGameFieldObject): void {
    const score = o.maxHealth ? o.maxHealth / 10 : 0;
    this.game.gameState.score += score;
    
  }
  
  private addEnemyLogic(): void {
    if(this.currentGameTime - this.lastEnemyBornTime >=this.enemyBornPeriod) {
      this.lastEnemyBornTime = this.currentGameTime;
      const xpos = Math.random()*400;
      const enemy = new EnemyFactory().createEnemy(
        this.game, xpos, 20, this.game.gameState.level 
        );
      this.game.addObjectOnField(enemy);
    }
  }

}

export default GameFlowEngine;