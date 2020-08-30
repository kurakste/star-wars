import Events from '../../../../interfaces/Events';
import gameObjTypes from '../../../../interfaces/gameObjTypes';
import DamageableActors from '../DamageableActors';
import Fire from '../../Fire';
import MainGameUnit from '../../../mainGameUnit';
import directions from '../../../../interfaces/Direction';
import spriteMatrix from '../../spriteMatrix';

class MainHero extends DamageableActors {
  protected spriteMatrix = spriteMatrix;

  constructor(game: MainGameUnit, xpos: number, ypos: number, ) {
    super(game, xpos, ypos, 50, 50);
    this.subscribes.push(Events.Keyboard);
    this.type = gameObjTypes.mainHeroBullet;
    this.setSpriteMatrix(4);
    this.vSpeed = 10;
    this.hSpeed = 10;
  }

  public keyboardHandler(e: KeyboardEvent): void {
    e.type === 'keydown' && e.key ==='ArrowRight' 
      && !this.checkIsThereTheGameBoarder(directions.right) && this.moveLeft();
    e.type === 'keydown' && e.key ==='ArrowLeft'
      && !this.checkIsThereTheGameBoarder(directions.left) && this.moveRight();
    e.type === 'keydown' && e.key ==='ArrowUp' 
      && !this.checkIsThereTheGameBoarder(directions.up) && this.moveUp();
    e.type === 'keydown' && e.key ==='ArrowDown' 
      && !this.checkIsThereTheGameBoarder(directions.down)&& this.moveDown();
    e.type === 'keydown' && e.key ===' ' && this.fire();
  }

  public borderCollisionHandler(dir: directions): void {
    // rewrite parent method;
  }

  fire(): void {
    const fire = new Fire(this.game, this.xpos + 5, this.ypos - 42, 1);
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

  private setSpriteMatrix(index: number) {
    const tp = gameObjTypes.enemyBullet;
    //const tp = this.type;
    this.spriteXOffset = spriteMatrix[tp][index].sx;
    this.spriteYOffset = spriteMatrix[tp][index].sy;
    this.spriteWidth = spriteMatrix[tp][index].width;
    this.spriteHeight = spriteMatrix[tp][index].hight;
    this.width = spriteMatrix[tp][index].width / 4;
    this.height = spriteMatrix[tp][index].hight/ 4;
  }
}

export default MainHero;