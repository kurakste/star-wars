import Enemy from '../../Actors/DamageableActors/Enemy';
import Game from '../../mainGameUnit';
import IGameFieldObject from '../../Interfaces/IGameFieldObject.t';
import gameObjectTypes from '../../Interfaces/gameObjTypes';

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

  protected enemyWasDestroyed(o: IGameFieldObject): void {
    const score = o.maxHealth ? o.maxHealth / 10 : 0;
    this.game.gameState.score += score;
    if (
      this.game.gameState.score 
        >=
          200 * this.game.gameState.level
            ) {
                ++this.game.gameState.level
            }
  }

  // TODO: --- 
  public restartGame(): void { return }
  
  private addEnemyLogic(): void {
    if(this.currentGameTime - this.lastEnemyBornTime >=this.enemyBornPeriod) {
      this.lastEnemyBornTime = this.currentGameTime;
      const xpos = Math.random()*400;
      const enemy = new Enemy(this.game, xpos, 20);
      this.game.addObjectOnField(enemy);
    }
  }

}

export default GameFlowEngine;