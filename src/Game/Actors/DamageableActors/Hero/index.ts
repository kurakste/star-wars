import Events from '../../../Interfaces/Events';
import gameObjTypes from '../../../Interfaces/gameObjTypes';
import DamageableActors from '../DamageableActors';
import Fire from '../../Fire/HeroFire';
import MainGameUnit from '../../../mainGameUnit';
import directions from '../../../Interfaces/Direction';
import IGameFieldObject from '../../../Interfaces/IGameFieldObject.t';

class MainHero extends DamageableActors {
    type = gameObjTypes.mainGameActor;

  constructor(game: MainGameUnit, xpos: number, ypos: number, ) {
    super(game, xpos, ypos, 50, 50);
    this.subscribes.push(Events.Keyboard);
    this.vSpeed = 10;
    this.hSpeed = 10;
    this.setSpriteMatrix(this.spriteIndexInMatrix); 
    this.health = 900;
    this.maxHealth = 900;
    this.game.gameState.health = this.health;
  }

  public keyboardHandler(e: KeyboardEvent): void {
    if (e.type !== 'keydown') return;
    e.key ==='ArrowRight' 
      && !this.checkIsThereTheGameBoarder(directions.right) && this.moveLeft();
    e.key ==='ArrowLeft'
      && !this.checkIsThereTheGameBoarder(directions.left) && this.moveRight();
    e.key ==='ArrowUp' 
      && !this.checkIsThereTheGameBoarder(directions.up) && this.moveUp();
    e.key ==='ArrowDown' 
      && !this.checkIsThereTheGameBoarder(directions.down)&& this.moveDown();
    e.key ===' ' && this.fire();
  }

  public clock():void {
    return;
  }
  
  public borderCollisionHandler(): void {
    // rewrite parent method
    // TODO: Here we need write a logic what we has to do when enemy cross bottom
    // border. 
  }
  fire(): void {
    const fire = new Fire(this.game, this.xpos + 5, this.ypos - 42);
    this.game.addObjectOnField(fire);
  }

  private checkIsThereTheGameBoarder(dir: directions) {
    const workMatrix = {
      [directions.down]: () => this.ypos + this.height >= this.game.height,
      [directions.up]: () => this.ypos <=0,
      [directions.left]: () => this.xpos<=0,
      [directions.right]: () => this.xpos + this.width>=this.game.width,
    }
    return workMatrix[dir]();
  }

  private sendGameOver() {
    this.game.gameOver();
  }

  protected getDemage(o: IGameFieldObject): void {
    super.getDemage(o);
    this.game.gameState.health = this.health;
    (this.health<=0) && this.sendGameOver();
  }
}

export default MainHero;