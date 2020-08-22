import GameFieldObject from '../../../interfaces/GameFieldObject';
import Events from '../../../interfaces/Events';

class Controller {
 eventsListeners:GameFieldObject[] = [];

  addNewEventListener(o:GameFieldObject) {
    this.eventsListeners.push(o);
  }
  
  eventHandler(e: any): void {}

  removeEventListener(o:GameFieldObject) {
    this.eventsListeners = this.eventsListeners.filter(el=> el.id !== o.id);
  }
}

export default Controller;