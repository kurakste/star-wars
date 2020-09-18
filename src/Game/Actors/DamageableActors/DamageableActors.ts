import Actor from '../Actors';
import IGameFieldObject from '../../Interfaces/IGameFieldObject.t';
import gameObjTypes from '../../Interfaces/gameObjTypes';

abstract class DamageableActors extends Actor {
  public maxHealth = 400;
  public health = 400;
  
  protected getDemage(o: IGameFieldObject): void {
    if (o.demage) {
      this.health = this.health - o.demage;
    }
  }
  
  protected checkHealthLogic(): void {
    (this.health<=0) && this.game.gameFlowEngine.objectWasDestroyed(this);
    (this.health<=0) && this.game.removeObjectFromField(this);
  }

  public collisionHandler(o: IGameFieldObject): void {
    if (
      o.type === gameObjTypes.mainHeroBullet 
        || 
          o.type === gameObjTypes.enemyBullet) this.getDemage(o);
    this.checkHealthLogic();
  }
}

export default DamageableActors;