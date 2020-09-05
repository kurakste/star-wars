import Actor from '../Actors';
import IGameFieldObject from '../../Interfaces/IGameFieldObject.t';
import gameObjTypes from '../../Interfaces/gameObjTypes';

abstract class DamageableActors extends Actor {
  public health = 400;
  
  protected getDemage(o: IGameFieldObject): void {
    if (o.demage) {
      this.health = this.health - o.demage;
      console.log('i got demage. Health is: ', this.health);
    }
  }
  
  protected checkHealthLogic(): void {
    (this.health<=0) && this.game.removeObjectFromField(this);
  }

  public collisionHandler(o: IGameFieldObject): void {
    // console.log('collision with:', o.type);
    if (
      o.type === gameObjTypes.mainHeroBullet 
        || 
      o.type === gameObjTypes.enemyBullet) this.getDemage(o);
    this.checkHealthLogic();
  }
}

export default DamageableActors;