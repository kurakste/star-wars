import Actor from '../Actors';
import GameFieldObject from '../../../interfaces/GameFieldObject';
import gameObjTypes from '../../../interfaces/gameObjTypes';


class DamageableActors extends Actor {
  protected health: number = 400;
  
  protected getDemage(o: GameFieldObject) {
    this.health = this.health - o.demage;
    console.log('i got demage. Health is: ', this.health)
  }
  
  protected checkHealthLogic() {
    (this.health<=0) && this.game.removeObjectFromField(this);
  }

  public collisionHandler(o: GameFieldObject) {
    console.log('collision with:', o.type);
    if (o.type === gameObjTypes.bullet) this.getDemage(o);
    this.checkHealthLogic();
  }
}

export default DamageableActors;