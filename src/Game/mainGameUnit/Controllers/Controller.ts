import GameFieldObject from '../../../interfaces/GameFieldObject';

class Controller {
 eventsListeners:GameFieldObject[] = [];

  addNewEventListener(o:GameFieldObject): void {
    this.eventsListeners.push(o);
  }
  
  eventHandler(e: any): void { return }

  removeEventListener(o:GameFieldObject): void {
    this.eventsListeners = this.eventsListeners.filter(el=> el.id !== o.id);
  }
}

export default Controller;