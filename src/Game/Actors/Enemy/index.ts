import Actor from '../Actors';
import Events from '../../../interfaces/Events';
import GameObjTypes from '../../../interfaces/gameObjTypes';
import GameFieldObject from '../../../interfaces/GameFieldObject';
import Game from '../../mainGameUnit';
import gameObjTypes from '../../../interfaces/gameObjTypes';
import Fire from '../Fire';
class Enemy extends Actor {

  private health: number = 400;
  private clockBeforeFire:number = 50;

  constructor(game: Game, xpos: number, ypos: number) {
    super(game);
    this.width = 50;
    this.height = 50;
    this.xpos = xpos;
    this.ypos = ypos;
    this.subscribes = [ Events.Clock, Events.Draw, Events.Collision ];
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

  public collisionHandler(o: GameFieldObject) {
    console.log('collision with:', o.type);
    if (o.type === gameObjTypes.bullet) this.getDemage(o);
    this.checkHealthLogic();
  }

  private move() {
    this.ypos = this.ypos + this.vSpeed;
  }

  private getDemage(o: GameFieldObject) {
    try {
      this.health = this.health - o.demage;
      console.log('i got demage. Health is: ', this.health)
    } catch(e) {
      console.log('getDemage Error', e);
    }
  }
  
  private checkHealthLogic() {
    (this.health<=0) && this.game.removeObjectFromField(this);
  }

  private generateFire(){
    //console.log('genFire', this.clockBeforeFire);
    if (this.clockBeforeFire<=0) {
      console.log('genFire', this.clockBeforeFire);
      const fire = new Fire(this.game, this.xpos, this.ypos + this.height + 2, -1);
      this.game.addObjectOnField(fire);
      this.clockBeforeFire = 50;

    } else {
      --this.clockBeforeFire;   
    }
  }
}

export default Enemy;

