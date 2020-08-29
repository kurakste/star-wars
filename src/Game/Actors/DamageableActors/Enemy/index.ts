import DamageableActors from '../DamageableActors';
import Events from '../../../../interfaces/Events';
import GameObjTypes from '../../../../interfaces/gameObjTypes';
import Game from '../../../mainGameUnit';
import Fire from '../../Fire';
class Enemy extends DamageableActors {

  private clockBeforeFire:number = 50;

  constructor(game: Game, xpos: number, ypos: number) {
    super(game, xpos, ypos, 50, 50);
    this.type = GameObjTypes.enemyTypeActor;
    this.spriteXOffset = 190;
    this.spriteYOffset = 0;
    this.spriteHeight = 90;
    this.spriteWidth = 100;
    this.vSpeed = 5;
    this.hSpeed = 5;
  };

  public clock(){
    this.move();
    this.generateFire()
  }

  private move() {
    this.ypos = this.ypos + this.vSpeed;
  }

  private generateFire(){
    //console.log('genFire', this.clockBeforeFire);
    if (this.clockBeforeFire<=0) {
      // console.log('genFire', this.clockBeforeFire);
      const fire = new Fire(this.game, this.xpos, this.ypos + this.height + 2, -1);
      this.game.addObjectOnField(fire);
      this.clockBeforeFire = 50;

    } else {
      --this.clockBeforeFire;   
    }
  }
}

export default Enemy;

