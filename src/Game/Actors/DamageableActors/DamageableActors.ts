import Actor from '../Actors';
import GameFieldObject from '../../../interfaces/GameFieldObject';
import gameObjTypes from '../../../interfaces/gameObjTypes';

class DamageableActors extends Actor {
  protected health = 400;
  
  protected getDemage(o: GameFieldObject): void {
    this.health = this.health - o.demage;
    console.log('i got demage. Health is: ', this.health)
  }
  
  protected checkHealthLogic(): void {
    (this.health<=0) && this.game.removeObjectFromField(this);
  }

  public collisionHandler(o: GameFieldObject): void {
    console.log('collision with:', o.type);
    if (
      o.type === gameObjTypes.mainHeroBullet 
        || 
      o.type === gameObjTypes.enemyBullet) this.getDemage(o);
    this.checkHealthLogic();
  }
}

export default DamageableActors;